const nav = document.querySelector(".nav")
window.addEventListener("scroll", fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add("active")
    } else {
        nav.classList.remove("active")
    }

};

//Regex for contact page

const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[0-9]{10}$/;

const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');

//If else statement for name field validation
nameField.addEventListener('input', () => {
	if (!nameRegex.test(nameField.value)) {
		nameField.setCustomValidity('Please enter a valid name.');
	} else {
		nameField.setCustomValidity('');
	}
});

//email field validation
emailField.addEventListener('input', () => {
	if (!emailRegex.test(emailField.value)) {
		emailField.setCustomValidity('Please enter a valid email address.');
	} else {
		emailField.setCustomValidity('');
	}
});

//Phone validation
phoneField.addEventListener('input', () => {
	if (!phoneRegex.test(phoneField.value)) {
		phoneField.setCustomValidity('Please enter a 10-digit phone number.');
	} else {
		phoneField.setCustomValidity('');
	}
});