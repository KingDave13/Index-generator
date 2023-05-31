// let array = [1,2,3,4,5,6,7];
// console.log('answer:', without(array, 3));

var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.getElementById('unlisted');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement('li');
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = '';
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);

// function isUserValid(bool) {
// 	return bool;
// }

// var answer = isUserValid(false)? 'You May Enter':'Access Denied';

// var automatedAnswer = 'Your account # is ' + (isUserValid(true)? '1234':'not available');


// class Animal {
// 	constructor (name, colour, type) {
// 		this.name =  name;
// 		this.colour = colour;
// 		this.type = type;
// 	}
// }

// class Mamal extends Animal {
// 	constructor (name, colour, type) {
// 		super (name, colour, type)
// 	}
// 	sound() {
// 		console.log (`Moo I'm ${this.name} and I'm a ${this.colour} ${this.type}`);
// 	}
// }

// const horse = new Mamal ('Jessica', 'white', 'horse');


// let obj = {
// 	username0: 'David',
// 	username1: 'Grace',
// 	username2: 'Daniel'
// };

// Object.entries(obj).forEach(value => {
// 	console.log(value);
// })

// Object.entries(obj).map(value => {
// 	return value[1] + value[0].replace('username', '');
// })

// const one = () => {
// 	const two = () => {
// 		console.log(4);
// 	}
// }