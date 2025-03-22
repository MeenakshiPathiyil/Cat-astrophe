document.addEventListener("DOMContentLoaded", async () => {
    const imageElement = document.getElementById("catImage");
    const messageElement = document.getElementById("message");

    
    const messages = ["Judging you...", "Good job!"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.textContent = randomMessage;

    
    try {
        const response = await fetch("https://source.unsplash.com/?cat");
        imageElement.src = response.url;
    } catch (error) {
        console.error("Failed to fetch cat image:", error);
        messageElement.textContent = "Error fetching sass!";
    }
});
