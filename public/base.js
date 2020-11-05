function sendTranslation() {
	var inputValue = document.getElementById('userInput').value;
	inputValue.replace(/\W/g, '');
	var xhr = new XMLHttpRequest();
	xhr.open("POST", '/translate', true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify({
		inputValue: inputValue
	}));
}
