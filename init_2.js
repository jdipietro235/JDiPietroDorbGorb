
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "rootpassword",
	database: "dorbgorb",
	//port: 3306
});
console.log("connection created");
con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	con.query("CREATE TABLE translations (translation_id INT(5) NOT NULL AUTO_INCREMENT, original TEXT, translated TEXT, UNIQUE(translation_id))", function (err, result) {
		if (err) throw err;
		console.log("table created");
		con.end();
	});
});


