const submitBtn = document.querySelector('.submit-btn');
const firstName = document.getElementById('name');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const secondPassword = document.getElementById('second-password');
console.log(submitBtn);

// console.log(form, firstName, lastName, email, password);

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	checkInputField();
	console.log('he');
});

const displayError = (el, mess) => {
	const inputForm = el.parentElement;
	const error = inputForm.querySelector('.error');
	error.innerText = mess;
	inputForm.classList.add('error');
	inputForm.classList.remove('success');
	console.log(mess);
};
const displaySuccess = (el) => {
	const inputForm = el.parentElement;
	const error = inputForm.querySelector('.error');
	error.innerText = '';
	inputForm.classList.add('success');
	inputForm.classList.remove('error');
};

const checkInputField = () => {
	const nameValue = firstName.value.trim();
	const lastNameValue = lastName.value.trim();
	const emailValue = email.value.trim();
	const passWordValue = password.value.trim();
	const secondPasswordValue = secondPassword.value.trim();
	if (!nameValue) {
		displayError(firstName, 'first name is required');
	} else {
		displaySuccess(firstName);
	}
	if (!lastNameValue) {
		displayError(lastName, 'last name is required');
	} else {
		displaySuccess(lastName);
	}
	if (!emailValue) {
		displayError(email, 'the email field should not be blank');
	} else {
		displaySuccess(email);
	}
	if (!passWordValue) {
		displayError(password, 'Password is required');
	} else if (passWordValue.length > 10) {
		displayError(password, 'Passord must be at least 8 character.');
	} else {
		displaySuccess(password);
	}
	if (!secondPasswordValue) {
		displayError(secondPassword, 'confirm your password');
	} else if (secondPasswordValue !== passWordValue) {
		displayError(secondPassword, 'Password does not match');
	}
};

// SHOW AND HIDE PASSWORD

const togglePassword = document.querySelector('.toggle-password');
console.log(togglePassword);
togglePassword.addEventListener('click', () => {
	if (password.type === 'password') {
		password.setAttribute('type', 'text');
		togglePassword.classList.add('hide');
	} else {
		password.setAttribute('type', 'password');
		togglePassword.classList.remove('hide');
	}
});
