document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const webhookURL = "YOUR_DISCORD_WEBHOOK_URL"; 
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
  
      const name = document.getElementById("fname").value.trim();
      const email = document.getElementById("lemail").value.trim();
      const message = document.getElementById("message").value.trim();
  
     
      if (!name || !email || !message) {
        displayMessage("Please fill out all fields.", "error");
        return;
      }
  
      if (!validateEmail(email)) {
        displayMessage("Please enter a valid email address.", "error");
        return;
      }
  
      const payload = {
        content: `**New Contact Form Submission:**\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
      };
  
      try {
        const response = await fetch(webhookURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
  
        if (response.ok) {
          displayMessage("Message sent successfully!", "success");
          form.reset();
        } else {
          displayMessage("Failed to send message. Please try again.", "error");
        }
      } catch (error) {
        displayMessage("Error sending the message.", "error");
        console.error("Error:", error);
      }
    });
  
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  
    function displayMessage(message, type) {
      let feedback = document.querySelector(".form-feedback");
      if (!feedback) {
        feedback = document.createElement("div");
        feedback.className = "form-feedback";
        form.insertAdjacentElement("afterend", feedback);
      }
      feedback.innerText = message;
      feedback.style.color = type === "success" ? "green" : "red";
    }
  });
  