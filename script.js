const signIn = document.getElementById("sign-in");
const signInBtn = document.getElementById("sign-in-btn");
const register = document.getElementById("register");
const registerBtn = document.getElementById("register-btn");
const formContainer = document.getElementById("slider");

function toggleForms(clicked) {
	console.log(clicked.id);
	if (clicked.id == signInBtn.id) {
		signIn.classList.replace("hidden", "active");
		register.classList.replace("active", "hidden");
		registerBtn.setAttribute("data", "off");
		signInBtn.setAttribute("data", "focus");
		formContainer.classList = "left-side-container animated left";
	}
	if (clicked.id == registerBtn.id) {
		signIn.classList.replace("active", "hidden");
		register.classList.replace("hidden", "active");
		registerBtn.setAttribute("data", "focus");
		signInBtn.setAttribute("data", "off");
		formContainer.classList = "left-side-container animated right";
	}
}
