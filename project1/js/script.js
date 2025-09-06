// Simple animation and interactivity for front-end

// Animate input placeholder typing effect
const input = document.querySelector("main input");
const placeholders = [
  "Search for restaurant...",
  "Search for cuisine...",
  "Search for a dish..."
];
let placeholderIndex = 0;
let charIndex = 0;
let typingForward = true;

function typePlaceholder() {
  if (typingForward) {
    input.setAttribute("placeholder", placeholders[placeholderIndex].substring(0, charIndex++));
    if (charIndex > placeholders[placeholderIndex].length) {
      typingForward = false;
      setTimeout(typePlaceholder, 1500);
      return;
    }
  } else {
    input.setAttribute("placeholder", placeholders[placeholderIndex].substring(0, charIndex--));
    if (charIndex < 0) {
      typingForward = true;
      placeholderIndex = (placeholderIndex + 1) % placeholders.length;
      charIndex = 0;
    }
  }
  setTimeout(typePlaceholder, typingForward ? 100 : 60);
}

// Start typing effect
typePlaceholder();

// Scroll animation: fade-in effect for elements
const faders = document.querySelectorAll("main p, main img, footer");

function showOnScroll() {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
}

faders.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.8s ease-out";
});

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
