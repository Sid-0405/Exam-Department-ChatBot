document.addEventListener("DOMContentLoaded", function () {
    const chatInput = document.getElementById("chat-input");
    const chatBody = document.getElementById("chat-container");
    const chatSubmit = document.getElementById("chat-submit");
  
    chatSubmit.addEventListener("click", function () {
        const userMessage = chatInput.value.trim();
        if (userMessage !== "") {
            appendMessage("user", userMessage);
            const botMessage = getBotResponse(userMessage);
            appendMessage("bot", botMessage);
            chatInput.value = "";
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    });
  
    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add(`${sender}-message`);
        messageElement.textContent = message;
        chatBody.appendChild(messageElement);
    }
  
    function getBotResponse(userMessage) {
        let botMessage;
        // Example bot responses based on user input
        switch (userMessage.toLowerCase()) {
            case "exam schedule":
                botMessage =
                    "The exam schedule for this semester is available on our website. You can find it under the 'Exams' section.";
                break;
            case "registration procedure":
                botMessage =
                    "To register for exams, you need to login to the student portal and follow the instructions under the 'Exam Registration' tab.";
                break;
            case "contact information":
                botMessage =
                    "You can contact us at https://dbatu.ac.in/contact-us/ ";
                break;
  
            case "what is the exam schedule for this semester?":
                botMessage =
                    " The exam schedule for this semester is available on our website. You can find it under the 'Exams' section.";
                break;
            case "how can i register for exams?":
                botMessage =
                    " To register for exams, you need to login to the student portal and follow the instructions under the 'Exam Registration' tab.";
                break;
            default:
                botMessage =
                    "Something wrong, please type a valid query";
                break;
        }
        return botMessage;
    }
  });
