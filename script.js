document.getElementById("revealButton").addEventListener("click", function () {
    const surprise = document.getElementById("surprise");
    const bigText = document.getElementById("bigText");
  
    // Show the surprise section and big "Happy Birthday" text
    surprise.classList.remove("hidden");
    bigText.classList.remove("hidden");
  
    // Hide the reveal button
    this.style.display = "none";
  });
  
  document.getElementById("fireworksButton").addEventListener("click", function () {
    const fireworksContainer = document.getElementById("fireworks");
    fireworksContainer.classList.remove("hidden");
  
    // Generate fireworks
    for (let i = 0; i < 30; i++) {
      const firework = document.createElement("div");
      firework.classList.add("firework");
      firework.style.left = `${Math.random() * 100}%`;
      firework.style.top = `${Math.random() * 100}%`;
      firework.style.animationDelay = `${Math.random()}s`;
      fireworksContainer.appendChild(firework);
  
      // Remove firework after animation ends
      setTimeout(() => firework.remove(), 2000);
    }
  });
  