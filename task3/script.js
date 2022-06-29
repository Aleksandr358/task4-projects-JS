var elems = document.querySelectorAll('div');
for (var i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', onGreen);
}

function onGreen() {
	this.style.backgroundColor = 'green';
	this.removeEventListener('click', onGreen);
	this.addEventListener('click', onYellow);
}

function onYellow() {
	this.style.backgroundColor = 'yellow';
	this.removeEventListener('click', onYellow);
	this.addEventListener('click', onRed);
}

function onRed() {
	this.style.backgroundColor = 'red';
	this.removeEventListener('click', onRed);
	this.addEventListener('click', onBlack);
}

function onBlack() {
	this.style.backgroundColor = 'black';
	this.removeEventListener('click', onBlack);
	this.addEventListener('click', onGreen);
}
