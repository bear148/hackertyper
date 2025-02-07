const typingArea = document.getElementById("typing-area");
let currentChar = 0;

document.body.addEventListener("keypress", (e) => {
    typingArea.children[currentChar].classList.add("valid");
    currentChar++;
});