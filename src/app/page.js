"use client";
import { useEffect, useState } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [chat, setChat] = useState(null);
  const [theme, setTheme] = useState("light");
  const [error, setError] = useState(null);

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const MODEL_NAME = "gemini-1.0-pro-001";

  const genAI = new GoogleGenerativeAI(API_KEY);

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const predefinedResponses = {
    "What services are available for elderly care?": "Services available for elderly care include home healthcare, assisted living, adult day care, and hospice care.",
    "How can I find a reliable caregiver?": "You can find a reliable caregiver through agencies, recommendations from friends or family, and online platforms with verified reviews.",
    "What financial assistance is available for elderly care?": "Financial assistance for elderly care can include Medicaid, Medicare, veteran benefits, and long-term care insurance.",
    "How do I know if my elderly loved one needs professional care?": "Signs that professional care might be needed include difficulty with daily activities, worsening health conditions, and safety concerns at home."
  };

  useEffect(() => {
    const initChat = async () => {
      try {
        const newChat = await genAI
          .getGenerativeModel({ model: MODEL_NAME })
          .startChat({
            generationConfig,
            safetySettings,
            history: messages.map((msg) => ({
              text: msg.text,
              role: msg.role,
            })),
          });
        setChat(newChat);
      } catch (error) {
        setError("Failed to initialize chat: " + error.message);
      }
    };
    initChat();
  }, []);

  const handleSendMessage = async () => {
    try {
      const userMessage = {
        text: userInput,
        role: "user",
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setUserInput("");

      if (predefinedResponses[userInput]) {
        const botMessage = {
          text: predefinedResponses[userInput],
          role: "bot",
          timestamp: new Date(),
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else if (chat) {
        const result = await chat.sendMessage(userInput);
        const botMessage = {
          text: await result.response.text(),
          role: "bot",
          timestamp: new Date(),
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        setError("Chat is not initialized");
      }
    } catch (error) {
      setError("Failed to send message: " + error.message);
    }
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const getThemeColor = () => {
    switch (theme) {
      case "light":
        return {
          primary: "bg-white-200",
          secondary: "bg-gray-100",
          accent: "bg-blue-500",
          text: "text-gray-800",
        };
      case "dark":
        return {
          primary: "bg-gray-900",
          secondary: "bg-gray-800",
          accent: "bg-gray-500",
          text: "text-gray-100",
        };
      default:
        return {
          primary: "bg-white",
          secondary: "bg-gray-100",
          accent: "bg-blue-500",
          text: "text-gray-800",
        };
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const { primary, secondary, accent, text } = getThemeColor();

  return (
    <div className={`flex flex-col h-screen ${primary}`}>
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <h1 className={`text-2xl font-bold ${text}`}>Chatbot</h1>
        <div className="flex space-x-2">
          <label htmlFor="theme" className={`text-sm ${text}`}>
            Theme:
          </label>
          <select
            id="theme"
            value={theme}
            onChange={handleThemeChange}
            className={`p-1 rounded-md border text-black-600`}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
      <div className={`flex-1 overflow-y-auto p-4 ${secondary}`}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${msg.role === "user" ? "text-right" : "text-left"}`}
          >
            {msg.role === "bot" && (
              <div className="flex items-center space-x-2">
                <img
                  src="/chatbot.png" // Replace with your logo URL
                  alt="Bot Logo"
                  className="w-6 h-6"
                />
                <span
                  className={`inline-block p-2 rounded-lg ${
                    msg.role === "user" ? `${accent} text-white` : `${primary} ${text}`
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            )}
            {msg.role === "user" && (
              <span
                className={`inline-block p-2 rounded-lg ${
                  msg.role === "user" ? `${accent} text-white` : `${primary} ${text}`
                }`}
              >
                {msg.text}
              </span>
            )}
            <p className={`text-xs ${text} mt-1`}>
              {msg.role === "bot" ? "Bot" : "You"} -{" "}
              {msg.timestamp.toLocaleTimeString()}
            </p>
          </div>
        ))}
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
      </div>
      <div className="fixed bottom-0 left-0 w-full flex items-center p-4">
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className={`p-2 ${accent} text-white rounded-full w-20 hover:bg-opacity-80 focus:outline-none`}
        >
          Send
        </button>
      </div>
    </div>
  );
}

