function openInfo(infoType) {
    const modal = document.getElementById("infoModal");
    const title = document.getElementById("infoTitle");
    const text = document.getElementById("infoText");

    if (infoType === 'info1') {
        title.innerText = "Information 1";
        text.innerText = "This is the detailed information about topic 1.";
    } else if (infoType === 'info2') {
        title.innerText = "Information 2";
        text.innerText = "This is the detailed information about topic 2.";
    } else if (infoType === 'info3') {
        title.innerText = "Information 3";
        text.innerText = "This is the detailed information about topic 3.";
    }

    modal.style.display = "block";
}

function closeInfo() {
    const modal = document.getElementById("infoModal");
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("infoModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
