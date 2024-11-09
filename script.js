// Typing Effect
const typingText = document.querySelector(".typing");
const phrases = ["A Web Developer", "A Programmer", "A Lifelong Learner"];
let index = 0;
let letterIndex = 0;

function type() {
  if (letterIndex < phrases[index].length) {
    typingText.textContent += phrases[index][letterIndex];
    letterIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (letterIndex > 0) {
    typingText.textContent = phrases[index].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(erase, 100);
  } else {
    index = (index + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);
