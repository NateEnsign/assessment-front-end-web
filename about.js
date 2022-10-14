console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Form has been successfully submitted!')
	// console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function complimentDuck(evt) {
	evt.preventDefault()
	alert("You're not quite as dumb as you look!")
}

let niceDuck = document.querySelector('img')

niceDuck.addEventListener('mouseover', complimentDuck)