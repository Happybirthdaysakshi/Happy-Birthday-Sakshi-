document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.querySelector("button");
  
  // Smooth scroll to #memories when clicking the start button
  startButton.addEventListener("click", () => {
    const memoriesSection = document.querySelector("#memories");
    memoriesSection.scrollIntoView({ behavior: "smooth" });
  });
});
// Falling Emojis JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const emojiContainer = document.createElement("div");
  emojiContainer.id = "emoji-container";
  document.body.appendChild(emojiContainer);

  const emojis = ["😘", "💖", "🌹"]; // List of emojis

  function createEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Randomize position and animation
    emoji.style.left = `${Math.random() * 100}%`; // Random horizontal position
    emoji.style.animationDuration = `${Math.random() * 3 + 3}s`; // Random fall speed
    emoji.style.fontSize = `${Math.random() * 5 + 15}px`; // Random font size (smaller)

    emojiContainer.appendChild(emoji);

    // Remove emoji after falling
    setTimeout(() => {
      emoji.remove();
    }, 6000); // Adjust time based on animation duration
  }

  // Generate new emojis every 300ms
  setInterval(createEmoji, 300);
});

