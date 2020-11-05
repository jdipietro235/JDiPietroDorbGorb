
// Load Node modules
const express = require('express');
const bodyParser = require("body-parser");
const axios = require('axios');
const mysql = require('mysql');
const util = require('util');

// Initialize Express
var app = express();

// Initialize database connection
var dbConnection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "rootpassword",
	database: "dorbgorb"
	//port: 3306
});

// When a user requests the top level of the website, send them index.html 
app.get('/', function(req, res) {
    res.sendFile('public/index.html', {root: __dirname })
});

app.use(bodyParser.urlencoded({extended : true}));

// When a user makes a POST request with a translation, this code is executed
app.post('/translate', function(request, response) {
	// request.body.input is the text entered by the user in the textbox
	var userInput = request.body.input.toLowerCase();
	var rows;

	// mySQL's connection needs to be wrapped so it can be used in an async function
	const query = util.promisify(dbConnection.query).bind(dbConnection);

	(async () => {
		try {
			// check the db to see if user input was already translated
			rows = await query("SELECT translated FROM translations where original = '" + userInput + "'");
		} finally {
			// If the phrase entered by the user has been translated before
			if (rows.length > 0) {
				console.log('translation already exists');
				//return to the user the old translation
				response.end(rows[0].translated);
			// if the phrase is new, translate it
			} else {
				console.log('translation does not exist');
				// make a call to the translation API using axios
				axios      
				.post('https://72exx40653.execute-api.us-east-1.amazonaws.com/prod/translateEnglishToAlien', { "textToTranslate" : userInput })      
				.then(function (resp1) {
					var translated = translateArray(resp1.data);
					// Insert the new translation into the database for next time
					dbConnection.query("INSERT INTO translations (original, translated) VALUES ('" + userInput + "', '" + translated + "')" );
					// I attempted to implement the verification API, but it never returned a successful verification, so I chose not to include it.
					response.end(translated);
					})      
				.catch(err => console.log(err));	
			}
		}
	})()
	
} );


// Translate an array of Dorbdorb into a String of Gorbyoyo
//for each word in the list of words, for each character in that word
//determine if the character is a letter. If it is, that character is the center of the word.
//Take everything to its left and right and sum those 2 things. Then add a yo
function translateArray(dorbArray) {
	var returnString = "";
	for (i = 0; i < dorbArray.length; i++) {
		var letterIndex;
		var letter;
		var addedInts;
		var targetString = dorbArray[i].toLowerCase();
		for (j = 0; j < targetString.length; j++) {
			if (isLetter(targetString.charAt(j).toString())){
				letterIndex = j;
				addedInts = parseInt(targetString.slice(0, letterIndex)) + parseInt(targetString.slice(letterIndex+1));
				letter = targetString.charAt(letterIndex);
				break;
			}
		}
		returnString = returnString + letter + 'yo' + addedInts + ' ';
	}
	return returnString;
}

// Regex to check that the passed in string is a letter
function isLetter(str) {
	return str.length === 1 && str.match(/[a-zA-Z]/i);
}


// Port website will run on
app.listen(8080);
console.log('listening on port 8080'); 

