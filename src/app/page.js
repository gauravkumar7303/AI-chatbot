"use client";
import { useEffect, useState, useRef } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [chat, setChat] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [error, setError] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const MODEL_NAME = "gemini-1.0-pro-001";

  const chatContainerRef = useRef(null);

  console.log("API_KEY:", API_KEY); // Debugging: Check if API key is being accessed

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
    "How do I know if my elderly loved one needs professional care?": "Signs that professional care might be needed include difficulty with daily activities, worsening health conditions, and safety concerns at home.",
    "What are the signs of elder abuse?": "Signs of elder abuse include unexplained injuries, withdrawal from normal activities, sudden changes in financial situation, and poor hygiene.",
    "How can I improve the quality of life for my elderly loved one?": "Improving quality of life can include social engagement, physical activities, proper nutrition, and mental stimulation.",
    "What are the benefits of assisted living facilities?": "Benefits of assisted living facilities include personalized care, social activities, safety, and a supportive community.",
    "How can I help my elderly loved one stay mentally active?": "Encourage them to engage in activities like reading, puzzles, socializing, and learning new skills or hobbies.",
    "What are the options for end-of-life care?": "End-of-life care options include palliative care, hospice care, and home care, focusing on comfort and quality of life.",
    "How can I support a family member with dementia?": "Support can include creating a safe environment, establishing routines, providing emotional support, and seeking professional help when needed."
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
      setShowWelcome(false);

      if (predefinedResponses[userInput]) {
        setIsTyping(true);
        setTimeout(() => {
          const botMessage = {
            text: predefinedResponses[userInput],
            role: "bot",
            timestamp: new Date(),
          };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
          setIsTyping(false);
        }, 2000); // Simulate typing delay
      } else if (chat) {
        setIsTyping(true);
        const result = await chat.sendMessage(userInput);
        setTimeout(async () => {
          const botMessage = {
            text: await result.response.text(),
            role: "bot",
            timestamp: new Date(),
          };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
          setIsTyping(false);
        }, 2000); // Simulate typing delay
      } else {
        setError("Chat is not initialized");
      }
    } catch (error) {
      setError("Failed to send message: " + error.message);
    }
  };

  const handlePredefinedResponse = (question) => {
    const userMessage = {
      text: question,
      role: "user",
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setShowWelcome(false);

    setIsTyping(true);
    setTimeout(() => {
      const botMessage = {
        text: predefinedResponses[question],
        role: "bot",
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, 2000); // Simulate typing delay
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

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={`flex flex-col h-screen ${primary}`}>
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <h1 className={`text-2xl font-bold ${text}`}><img src="/chatbot.png" alt="Bot Logo" className="w-5 h-5 inline" /> Elderly Care Advisor Chatbot</h1>
        <div className="flex space-x-2">
          <label htmlFor="theme" className={`text-sm ${text}`}>
            Theme:
          </label>
          <select
            id="theme"
            value={theme}
            onChange={handleThemeChange}
            className={`p-1 rounded-md border text-black-600 h-9 w-16`}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
          <a
            href="https://ai-chatbot-orpin-rho.vercel.app/Documentation"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-md border-2 text-black-600 bg-white h-9 w-16"
          >
            Docs.
          </a>
          </div>
        </div>
        <div ref={chatContainerRef} className={`flex-1 overflow-y-auto p-4 ${secondary}`}>
          {showWelcome && (
            <div className="mb-4 main-container m-auto">
              <div className={`p-4 rounded-lg ${accent} text-white w-4/4 m-auto`}>
                <h1 className="font-bold text-3xl mb-8">Welcome to the Elderly Care Advisor Chatbot!</h1>
                <p>This chatbot is designed to provide assistance and information about elderly care. You can ask about services, caregivers, financial assistance, signs of elder abuse, and more.</p>

                <p> For the addtional information check the Documentation for the Documentation <a href="https://ai-chatbot-orpin-rho.vercel.app/Documentation" className="underline text-blue">Click Here.</a> <br />Here are some common questions:</p>
              </div>
              <div className="flex flex-wrap">
                <div className="mt-2 space-y-2">
                  {Object.keys(predefinedResponses).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handlePredefinedResponse(question)}
                      className="inline-block w-full p-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-black"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
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
                    className={`inline-block p-2 rounded-lg ${msg.role === "user" ? `${accent} text-white` : `${primary} ${text}`
                      }`}
                  >
                    {msg.text}
                  </span>
                </div>
              )}
              {msg.role === "user" && (
                <span
                  className={`inline-block p-2 rounded-lg ${msg.role === "user" ? `${accent} text-white` : `${primary} ${text}`
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
          {isTyping && (
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/chatbot.png" // Replace with your logo URL
                alt="Bot Logo"
                className="w-6 h-6"
              />
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          )}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        </div>
        <div className=" bottom-0 left-0 w-full flex items-center p-4">
          <input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 p-2 border text-black border-gray-300 rounded-full focus:outline-none"
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
