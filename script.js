function openInfo(infoText) {
    const modal = document.getElementById("infoModal");
    const text = document.getElementById("infoText");
    text.innerText = infoText;
    modal.style.display = "block";
}

function closeInfo() {
    const modal = document.getElementById("infoModal");
    modal.style.display = "none";
}

// Create sparkle effect
const sparkleContainer = document.querySelector('.sparkle-container');

document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    sparkleContainer.appendChild(sparkle);

    // Remove sparkle after animation
    setTimeout(() => {
        sparkle.remove();
    }, 1000); // Adjust time to match the animation duration
});
