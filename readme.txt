

This is a webserver to assist with the translation of English to Gorbyoyo.

Set Up Instructions
	1.  Install MySQL from https://dev.mysql.com/downloads/
		Stick with the default developer options
		Since this will be for local use only, use password 'rootpassword' for the root account
		Be sure to use the old version of the security configuration

	2.  Install Node from https://nodejs.org/en/download/
		Use the default settings

	3.  Download the repository from https://github.com/jdipietro235/JDiPietroDorbGorb
		Unzip the repo somewhere you won't lose it

	4.  Open Commandline and navigate to the location you saved the repository 
		Type in 'node init_1.js' and hit enter 
		Type in 'node init_2.js' and hit enter
		Those 2 files hold the configuration commands for the database

	5. 	Type in 'node server.js' and hit enter
		The server should now be running.
		Navigate to localhost:8080 in your web browser

I've tested this on Windows 10 in Firefox, Chrome, and Edge.
Please let me know if you have any problems running this program either by bug report or email. I appreciate any feedback you can offer.
	

Your goal is to
	Create a full stack web application
		Done
	Read and understand the instructions to translate a string of Dorbdorb to Gorbyoyo
		Done
	Create a function that calls the interstellar Dorbdorb translation API that takes an English string as an Input
		Done
	Using Dorbdorb to Gorbyoyo translation guidelines, code in a function to translate the payload
		Done
	Check with the translation verification API to make sure the translation is correct
		Done
	Output the correct translation to the screen using a specific style that Gorboyoyo's can only read
		Done
	Gorbyoyos can only read large, brightly-colored, centered text on a dark background
		Done
	Store the correct translation in a database 
		Done
	so that if you refresh the page, you can still display the correct translation
		Missed
	Upload your solution onto Github
		Done
	Include documentation wherever you think is necessary
		Done
	Include steps to reproduce project locally, including creating the database
		Done
	Front-end OR back-end tests (your choice)		
		Done
	Verify Gorbyoyo translation
		Missed