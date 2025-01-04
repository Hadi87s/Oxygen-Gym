document.querySelector(".chat-icon-close").style.display = "none";
document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chat-box");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-btn");
  let apiKey = ""; // Placeholder for the fetched API key

  // Fetch the API key from the PHP file
  async function fetchApiKey() {
    try {
      const response = await fetch("get-api-key.php"); // Path to your PHP file
      const data = await response.json();
      apiKey = data.apiKey;
    } catch (error) {
      console.error("Failed to fetch API key:", error);
    }
  }

  // Append messages to the chatbox
  function appendMessage(content, sender) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${sender}-message`;
    messageElement.textContent = content;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
  }

  // Show typing indicator
  function showTypingIndicator() {
    const typingIndicator = document.createElement("div");
    typingIndicator.className = "typing-indicator";
    typingIndicator.innerHTML = `<span></span><span></span><span></span>`;
    chatBox.appendChild(typingIndicator);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
    return typingIndicator;
  }

  // Call the DeepSeek API
  async function callDeepSeekAPI(message) {
    const API_URL = "https://api.deepseek.com/v1/chat/completions";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: message },
          ],
          model: "deepseek-chat",
        }),
      });

      if (!response.ok) {
        throw new Error("API Error");
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error(error);
      return "Sorry, I couldn't process your request. Please try again later.";
    }
  }

  // Handle message sending
  async function handleMessageSend() {
    const message = userInput.value.trim();
    if (!message) return;

    appendMessage(message, "user");
    userInput.value = "";

    const typingIndicator = showTypingIndicator();

    const botResponse = await callDeepSeekAPI(message);
    typingIndicator.remove(); // Remove typing indicator
    appendMessage(botResponse, "bot");
  }

  sendButton.addEventListener("click", handleMessageSend);

  userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleMessageSend();
    }
  });

  // Fetch the API key when the page loads
  fetchApiKey();
});

document.addEventListener("DOMContentLoaded", () => {
  const chatIcon = document.getElementById("chat-icon");
  const openIcon = document.querySelector(".chat-icon-open");
  const closeIcon = document.querySelector(".chat-icon-close");
  const chatWindow = document.getElementById("chat-window");
  const chatBox = document.getElementById("chat-box");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-btn");
  const today = document.createElement("div");
  today.style.margin = "1px auto";
  today.textContent = "Today";
  // Toggle chat window visibility
  function toggleChat() {
    if (chatWindow.classList.contains("active")) {
      closeChat();
    } else {
      openChat();
    }
  }

  function openChat() {
    chatWindow.classList.add("active");
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
    chatBox.appendChild(today);
  }

  function closeChat() {
    chatWindow.classList.remove("active");
    chatBox.removeChild(today);
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
  }

  // Close chat when clicking outside
  document.addEventListener("click", (e) => {
    if (!chatWindow.contains(e.target) && !chatIcon.contains(e.target)) {
      closeChat();
    }
  });

  // Append messages to chatbox
  function appendMessage(content, sender) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${sender}-message`;
    messageElement.textContent = content;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // Show typing indicator
  function showTypingIndicator() {
    const typingIndicator = document.createElement("div");
    typingIndicator.className = "typing-indicator";
    typingIndicator.innerHTML = "<span></span><span></span><span></span>";
    chatBox.appendChild(typingIndicator);
    chatBox.scrollTop = chatBox.scrollHeight;
    return typingIndicator;
  }

  // Simulate bot response
  function botReply() {
    const typingIndicator = showTypingIndicator();
    setTimeout(() => {
      typingIndicator.remove();
      appendMessage("Hello! How can I assist you today? 😊", "bot");
    }, 1500);
  }

  // Send message function
  function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    appendMessage(message, "user");
    userInput.value = "";
    botReply();
  }

  // Event listeners
  chatIcon.addEventListener("click", toggleChat);
  sendButton.addEventListener("click", sendMessage);
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
});
