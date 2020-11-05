
var mysql = require('mysql');


var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "rootpassword",
	//database: "NodeJSConnection",
	//port: 3306
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	con.query("CREATE DATABASE dorbgorb", function (err, result) {
		if (err) throw err;
		console.log("Database created");
		con.end();
	});
});

