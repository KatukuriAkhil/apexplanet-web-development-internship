function showMessage() {
    alert("Welcome to TechVerse Academy 🚀");
}

/* Change heading color when clicked */
const heading = document.querySelector("header h1");

heading.addEventListener("click", function () {
    heading.style.color = "yellow";
});

/* Change button text after click */
const button = document.querySelector("button");

button.addEventListener("click", function () {
    button.innerText = "Started Learning!";
});
