import React from "react";

export default function Documentation() {
  return (
    <>
      <header className="bg-orange-400 flex items-center justify-center h-20"><h1 className="text-3xl text-white text-center">Eldeary Advisor Chatbot Documentation</h1></header>
      <section id="project-overview" className="mb-10 ">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Project Overview</h1>
          <h2 className="text-2xl font-semibold mb-4">Elderly Advisor Chatbot</h2>
          <p className="mb-4 text-lg">
            The Elderly Advisor Chatbot is designed to assist elderly users by providing them with advice and information tailored to their needs. Powered by Gemini AI, this chatbot offers a user-friendly interface and predefined responses to common queries, making it an invaluable tool for elderly care. The chatbot is integrated with a task manager and reminder system to help users manage their daily activities effectively.
          </p>
          <h3 className="text-xl font-semibold mb-3">Key Points:</h3>
          <ul className="list-disc list-inside mb-4">
            <li className="text-lg">Developed as a project at XZECT Labs Private Limited.</li>
            <li className="text-lg">Provides elderly care advice and additional information.</li>
            <li className="text-lg">Powered by Gemini AI for intelligent responses.</li>
            <li className="text-lg">Includes task management and reminder functionalities.</li>
          </ul>
        </div>
      </section>

      <section id="features" className="mb-10 ">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Features</h1>
          <p className="mb-4 text-lg">
            The Elderly Advisor Chatbot includes a range of features designed to assist users in caring for elderly individuals. Here are the key features:
          </p>
          <h2 className="text-2xl font-semibold mb-4">Intelligent Responses:</h2>
          <p className="mb-4 text-lg">
            Powered by Gemini AI, the chatbot delivers accurate and relevant answers to user queries about elderly care.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Predefined Responses:</h2>
          <p className="mb-4 text-lg">
            Includes a comprehensive set of predefined responses to common questions related to elderly care, ensuring users receive consistent and helpful information.
          </p>
          <h2 className="text-2xl font-semibold mb-4">User-Friendly Interface:</h2>
          <p className="mb-4 text-lg">
            The chatbot interface is designed to be intuitive and easy to use, making it accessible for elderly users and their caregivers.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Additional Support:</h2>
          <p className="mb-4 text-lg">
            Provides additional advice and resources on various aspects of elderly care, including health, nutrition, and safety.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Responsive Design:</h2>
          <p className="mb-4 text-lg">
            The chatbot is designed to be responsive, ensuring it works well on both desktop and mobile devices for convenience.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Dark Mode and Light Mode:</h2>
          <p className="mb-4 text-lg">
            Users can switch between dark mode and light mode according to their preference, enhancing usability in different lighting conditions.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Comprehensive Documentation:</h2>
          <p className="mb-4 text-lg">
            Detailed documentation is available, providing users and developers with all necessary information to use and customize the chatbot effectively.
          </p>
        </div>
      </section>

      <section id="technologies-used" className="mb-10">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Technologies Used</h1>
          <p className="mb-4 text-lg">
            The Elderly Advisor Chatbot leverages several technologies to deliver a seamless and user-friendly experience. Here are the key technologies used in the project:
          </p>
          <h2 className="text-2xl font-semibold mb-4">HTML:</h2>
          <p className="mb-4 text-lg">
            <strong>Purpose:</strong> HTML is used for structuring the basic body of the web pages.
          </p>
          <p className="mb-4 text-lg">
            <strong>Details:</strong> The foundational markup language for creating the structure of the chatbot interface, ensuring that the content is organized and accessible.
          </p>
          <h2 className="text-2xl font-semibold mb-4">CSS:</h2>
          <p className="mb-4 text-lg">
            <strong>Purpose:</strong> CSS is used for styling the application, ensuring a visually appealing and consistent look across different devices.
          </p>
          <p className="mb-4 text-lg">
            <strong>Details:</strong> Custom CSS is written to style specific components and elements of the chatbot, enhancing the visual aesthetics and usability.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Tailwind CSS:</h2>
          <p className="mb-4 text-lg">
            <strong>Purpose:</strong> Tailwind CSS framework is used to design the app efficiently.
          </p>
          <p className="mb-4 text-lg">
            <strong>Details:</strong> Tailwind CSS provides utility-first CSS classes that allow for rapid styling without writing custom CSS. It helps in building responsive designs quickly and ensures consistency across different parts of the application.
          </p>
          <h2 className="text-2xl font-semibold mb-4">JavaScript:</h2>
          <p className="mb-4 text-lg">
            <strong>Purpose:</strong> JavaScript is used for building the logic of the application.
          </p>
          <p className="mb-4 text-lg">
            <strong>Details:</strong> JavaScript handles the interactive features and dynamic content of the chatbot. It is used to manage the chatbot's responses, handle user inputs, and interact with the Gemini AI API.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Gemini AI API:</h2>
          <p className="mb-4 text-lg">
            <strong>Purpose:</strong> The Gemini AI API powers the chatbot functionality.
          </p>
          <p className="mb-4 text-lg">
            <strong>Details:</strong> The API provides the backend intelligence for the chatbot, enabling it to deliver intelligent and relevant responses to user queries. It leverages machine learning and natural language processing to understand and generate human-like responses, making the chatbot more effective in providing elderly care advice.
          </p>
        </div>
      </section>

      <section id="setup-Instructions" className="mb-10">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Setup Instructions</h1>
          <ol className="list-decimal ml-6">
            <li className="mb-4">
              <h2 className="text-xl font-semibold">Clone the Repository</h2>
              <p className="ml-4 text-lg">
                Open your terminal and clone the repository using the following command:
              </p>
              <div className="overflow-x-auto mt-2">
                <pre className="bg-gray-100 p-4 rounded">
                  <code>git clone https://github.com/gauravkumar7303/chatbot.git</code>
                </pre>
              </div>
            </li>
            <li className="mb-4 text-lg">
              <h2 className="text-xl font-semibold">Navigate to the Project Directory</h2>
              <p className="ml-4 text-lg">Change into the project directory:</p>
              <div className="overflow-x-auto mt-2">
                <pre className="bg-gray-100 p-4 rounded">
                  <code>cd chatbot</code>
                </pre>
              </div>
            </li>
            <li className="mb-4 text-lg">
              <h2 className="text-xl font-semibold">Install Dependencies</h2>
              <p className="ml-4 text-lg">Install the necessary dependencies using npm:</p>
              <div className="overflow-x-auto mt-2">
                <pre className="bg-gray-100 p-4 rounded">
                  <code>npm install</code>
                </pre>
              </div>
            </li>
            <li className="mb-4">
              <h2 className="text-xl font-semibold">Run the Application</h2>
              <p className="ml-4">Start the development server:</p>
              <div className="overflow-x-auto mt-2">
                <pre className="bg-gray-100 p-4 rounded">
                  <code>npm run dev</code>
                </pre>
              </div>
              <p className="ml-4 text-lg">Open your browser and navigate to <a href="http://localhost:3000" className="text-blue-600 underline">http://localhost:3000</a></p>
            </li>
            <li className="mb-4 text-lg">
              <h2 className="text-xl font-semibold">Navigate to Documentation</h2>
              <p className="ml-4 text-lg">To access the documentation, click on the "Documentation" link in the navigation bar or go to:</p>
              <div className="overflow-x-auto mt-2">
                <pre className="bg-gray-100 p-4 rounded">
                  <code>http://localhost:3000/documentation</code>
                </pre>
              </div>
            </li>
          </ol>
        </div>
      </section>


      <section id="usage-instructions" className="mb-10">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Usage Instructions</h1>
          <p className="text-lg">To use the Elderly Advisor Chatbot, follow these steps:</p>

          <ol className="list-decimal list-inside mt-4">
            <li className="mb-2">
              <strong>Access the Chatbot:</strong>
              <p className="ml-6 text-lg">Open your web browser and navigate to <a href="https://chatbot-swart-nine.vercel.app/" className="text-blue-500 hover:underline">Elderly Advisor Chatbot</a>.</p>
            </li>

            <li className="mb-2">
              <strong>Start a Conversation:</strong>
              <p className="ml-6 text-lg">Once the page loads, you will see the chatbot interface. Type your query related to elderly care into the input box at the bottom of the screen.</p>
            </li>

            <li className="mb-2">
              <strong>Receive Advice:</strong>
              <p className="ml-6 text-lg">The chatbot, powered by Gemini AI, will process your query and provide an intelligent response tailored to your needs. You can ask follow-up questions or seek further advice based on the response you receive.</p>
            </li>

            <li className="mb-2">
              <strong>Switch Modes:</strong>
              <p className="ml-6 text-lg">You can switch between dark mode and light mode by toggling the theme switch located at the top of the interface, according to your preference.</p>
            </li>

            <li className="mb-2">
              <strong>Navigate Through the Chatbot Features:</strong>
              <p className="ml-6 text-lg">Explore different features and predefined responses by interacting with the chatbot. It provides advice on various aspects of elderly care, including health, nutrition, and safety.</p>
            </li>

            <li className="mb-2">
              <strong>Access Additional Resources:</strong>
              <p className="ml-6 text-lg">The chatbot also provides additional support and resources for elderly care. You can request information on specific topics to receive detailed advice and resources.</p>
            </li>
          </ol>
        </div>
      </section>

      <section id="code-structure" className="mb-10">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Code Structure</h1>
          <p className="text-lg">The Elderly Advisor Chatbot project is organized into a structured and easy-to-navigate codebase. Below is an overview of the main components and their purposes:</p>

          <ul className="list-disc list-inside mt-4">
            <li className="mb-2">
              <strong>app/:</strong>
              <p className="ml-6 text-lg">This is the main directory for the Next.js application, containing all the pages and components of the project.</p>
            </li>

            <li className="mb-2">
              <strong>app/page.js:</strong>
              <p className="ml-6 text-lg">The main entry point of the application, which renders the chatbot interface.</p>
            </li>

            <li className="mb-2">
              <strong>app/documentation/:</strong>
              <p className="ml-6 text-lg">Contains all the documentation pages, each with its own directory and page.js file.</p>
            </li>

            <li className="mb-2">
              <strong>app/documentation/layout.js:</strong>
              <p className="ml-6 text-lg">The layout file for the documentation section, including the sidebar navigation and content area.</p>
            </li>

            <li className="mb-2">
              <strong>styles/:</strong>
              <p className="ml-6 text-lg">Contains global CSS and Tailwind CSS configurations used throughout the project.</p>
            </li>

            <li className="mb-2">
              <strong>components/:</strong>
              <p className="ml-6 text-lg">Reusable React components used in various parts of the application to maintain consistency and modularity.</p>
            </li>

            <li className="mb-2">
              <strong>public/:</strong>
              <p className="ml-6 text-lg">Static files such as images, fonts, and other assets.</p>
            </li>

            <li className="mb-2">
              <strong>utils/:</strong>
              <p className="ml-6 text-lg">Utility functions and helpers used across different components and pages.</p>
            </li>

            <li className="mb-2">
              <strong>Gemini AI Integration:</strong>
              <p className="ml-6 text-lg">Code that handles communication with the Gemini AI API, processing user inputs, and generating responses.</p>
            </li>
          </ul>

          <p className="mt-4 text-lg">This structure ensures that the codebase is organized, maintainable, and scalable, making it easy for developers to navigate and contribute to the project.</p>
        </div>
      </section>

      <section id="api-integration" className="mb-10">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">API Integration</h1>
          <p className="text-lg">The Elderly Advisor Chatbot integrates with the Gemini AI API to provide intelligent and relevant responses to user queries. Below is an overview of how the API integration is implemented:</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Setup</h2>
          <p className="text-lg">To set up the Gemini AI API integration, follow these steps:</p>

          <ol className="list-decimal list-inside mt-4">
            <li className="mb-2">Obtain your Gemini AI API key from the Gemini AI developer portal.</li>
            <li className="mb-2">Create a `.env` file in the root directory of your project and add your API key:</li>
          </ol>

          <div className="overflow-x-auto mt-2">
            <pre className="bg-gray-200 p-4 rounded mb-6">
              <code>GEMINI_API_KEY=your_api_key_here</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold mt-6 mb-4">Integration</h2>
          <p className="text-lg">Here is how the Gemini AI API is integrated into the chatbot:</p>

          <ul className="list-disc list-inside mt-4">
            <li className="mb-2">
              <strong>API Request:</strong>
              <p className="ml-6 text-lg">When a user submits a query, an API request is sent to the Gemini AI endpoint with the user's input and the API key.</p>
            </li>
            <li className="mb-2">
              <strong>Processing Response:</strong>
              <p className="ml-6 text-lg">The API processes the input using natural language processing (NLP) and machine learning algorithms to generate a human-like response.</p>
            </li>
            <li className="mb-2">
              <strong>Displaying Response:</strong>
              <p className="ml-6 text-lg">The generated response is sent back to the chatbot interface and displayed to the user in a conversational format.</p>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-4">Example Code</h2>
          <p className="text-lg">Here is a simplified example of how to make an API request to the Gemini AI endpoint:</p>

          <div className="overflow-x-auto mt-2">
            <pre className="bg-gray-200 p-4 rounded mb-6">
              <code>{`
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
        `}</code>
            </pre>
          </div>

          <p className="text-lg">This code demonstrates how to send a user's input to the Gemini AI API and receive a response. The response is then used to provide an answer to the user within the chatbot interface.</p>

          <p className="mt-4 text-lg">With this integration, the Elderly Advisor Chatbot can effectively understand and respond to user queries, offering valuable advice and information on elderly care.</p>
        </div>
      </section>


      <section id="predefined-responses" className="mb-10">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Predefined Responses</h1>
          <p className="text-lg">The Elderly Advisor Chatbot includes a comprehensive set of predefined responses to common questions related to elderly care. These responses ensure users receive consistent and helpful information. Here are some of the predefined responses available:</p>

          <ul className="list-disc list-inside mt-4">
            <li className="mb-2">
              <strong>What services are available for elderly care?</strong>
              <p className="ml-6 text-lg">Services available for elderly care include home healthcare, assisted living, adult day care, and hospice care.</p>
            </li>

            <li className="mb-2">
              <strong>How can I find a reliable caregiver?</strong>
              <p className="ml-6 text-lg">You can find a reliable caregiver through agencies, recommendations from friends or family, and online platforms with verified reviews.</p>
            </li>

            <li className="mb-2">
              <strong>What financial assistance is available for elderly care?</strong>
              <p className="ml-6 text-lg">Financial assistance for elderly care can include Medicaid, Medicare, veteran benefits, and long-term care insurance.</p>
            </li>

            <li className="mb-2">
              <strong>How do I know if my elderly loved one needs professional care?</strong>
              <p className="ml-6 text-lg">Signs that professional care might be needed include difficulty with daily activities, worsening health conditions, and safety concerns at home.</p>
            </li>

            <li className="mb-2">
              <strong>What are the signs of elder abuse?</strong>
              <p className="ml-6 text-lg">Signs of elder abuse include unexplained injuries, withdrawal from normal activities, sudden changes in financial situation, and poor hygiene.</p>
            </li>

            <li className="mb-2">
              <strong>How can I improve the quality of life for my elderly loved one?</strong>
              <p className="ml-6 text-lg">Improving quality of life can include social engagement, physical activities, proper nutrition, and mental stimulation.</p>
            </li>

            <li className="mb-2">
              <strong>What are the benefits of assisted living facilities?</strong>
              <p className="ml-6 text-lg">Benefits of assisted living facilities include personalized care, social activities, safety, and a supportive community.</p>
            </li>

            <li className="mb-2">
              <strong>How can I help my elderly loved one stay mentally active?</strong>
              <p className="ml-6 text-lg">Encourage them to engage in activities like reading, puzzles, socializing, and learning new skills or hobbies.</p>
            </li>

            <li className="mb-2">
              <strong>What are the options for end-of-life care?</strong>
              <p className="ml-6 text-lg">End-of-life care options include palliative care, hospice care, and home care, focusing on comfort and quality of life.</p>
            </li>

            <li className="mb-2">
              <strong>How can I support a family member with dementia?</strong>
              <p className="ml-6 text-lg">Support can include creating a safe environment, establishing routines, providing emotional support, and seeking professional help when needed.</p>
            </li>
          </ul>

          <p className="mt-4 text-lg">These predefined responses are designed to provide quick and accurate information, helping users navigate the complexities of elderly care with ease.</p>
        </div>
      </section>

      <section id="customization" className="mb-10">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Customization:</h1>

          <p>Customizing the Elderly Advisor Chatbot allows you to tailor its behavior and appearance to better meet the needs of your users. Follow these instructions to make changes to the chatbot's responses, design, and functionality.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Customizing Predefined Responses</h2>
          <p>To update or add new responses:</p>

          <ol className="list-decimal list-inside mt-4">
            <li>
              <strong>Locate the Responses File:</strong> The predefined responses are managed in the `predefined-responses` component file located at:
              <div className="overflow-x-auto mt-2">
                <pre className="bg-gray-100 p-2 rounded"><code>// app/documentation/predefined-responses/page.js</code></pre>
              </div>
            </li>
            <li><strong>Edit Responses:</strong> Open the `page.js` file and modify the responses within the element. Update the text to reflect new or revised information.</li>
            <li><strong>Example Code:</strong>
              <div className="overflow-x-auto mt-2">
                <pre className="bg-gray-100 p-2 rounded w-full"><code>
                  &lt;li className="mb-2"&gt;
                  &lt;strong&gt;How can I find reliable elderly care services?&lt;/strong&gt;
                  &lt;p className="ml-6"&gt;Search for services through local agencies, online directories, <br />and recommendations from healthcare professionals.&lt;/p&gt;
                  &lt;/li&gt;
                </code></pre>
              </div>
            </li>
            <li><strong>Testing:</strong> Test the chatbot to ensure that the updated responses display correctly and provide accurate information.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Customizing Chatbot Appearance</h2>
          <p>To adjust the chatbot’s design:</p>

          <ol className="list-decimal list-inside mt-4">
            <li>
              <strong>Locate the CSS File:</strong> Style changes are typically made in the CSS files. The main stylesheet is located at:
              <div className="overflow-x-auto mt-2">
                <pre className="bg-gray-100 p-2 rounded"><code>// styles/global.css</code></pre>
              </div>
            </li>
            <li><strong>Edit Styles:</strong> Open `global.css` and modify the styles according to your design preferences. You can adjust colors, fonts, and layout to match your desired look.</li>
            <li><strong>Example Code:</strong>
              <div className="overflow-x-auto mt-2">
                <pre className="bg-gray-100 p-2 rounded w-full"><code>
                  .chatbot-container {'{'}
                  background-color: #f4f4f4;
                  border-radius: 8px;
                  padding: 16px;
                  {'}'}

                  .chatbot-message {'{'}
                  font-size: 16px;
                  color: #333;
                  {'}'}
                </code></pre>
              </div>
            </li>
            <li><strong>Testing:</strong> Ensure to review the chatbot in different devices and screen sizes to maintain responsiveness and usability.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Customizing Chatbot Functionality</h2>
          <p>To modify the functionality of the chatbot:</p>

          <ol className="list-decimal list-inside mt-4">
            <li>
              <strong>Locate the Functionality File:</strong> The core chatbot logic is managed in the component file:
              <div className="overflow-x-auto mt-2">
                <pre className="bg-gray-100 p-2 rounded"><code>// components/Chatbot.js</code></pre>
              </div>
            </li>
            <li><strong>Edit Logic:</strong> Open `Chatbot.js` and update the JavaScript functions or methods that handle user inputs and chatbot responses.</li>
            <li><strong>Example Code:</strong>
              <div className="overflow-x-auto mt-2">
                <pre className="bg-gray-100 p-2 rounded w-full"><code>
                  const handleUserInput = (input) =&gt; {'{'}
                  if (input.includes('services')) {'{'}
                  return 'Here are the services we offer...';
                  {'}'}
  // Add additional logic as needed
                  {'}'};
                </code></pre>
              </div>
            </li>
            <li><strong>Testing:</strong> Test the chatbot interactions to ensure the functionality behaves as expected and addresses various user inputs correctly.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Adding New Features</h2>
          <p>To integrate new features or capabilities:</p>

          <ol className="list-decimal list-inside mt-4">
            <li><strong>Identify the Feature:</strong> Determine what new feature or capability you want to add (e.g., additional languages, integration with external APIs).</li>
            <li><strong>Implement Feature:</strong> Add the necessary code and dependencies. This may involve updating both frontend and backend components.</li>
            <li><strong>Example Code:</strong>
              <div className="overflow-x-auto mt-2">
                <pre className="bg-gray-100 p-2 rounded"><code>
                  import axios from 'axios';

                  const fetchAdditionalInfo = async (query) =&gt; {'{'}
                  const response = await axios.get(`/api/info?query=${`query`}`);
                  return response.data;
                  {'}'};
                </code></pre>
              </div>
            </li>
            <li><strong>Testing:</strong> Ensure that new features integrate smoothly and do not disrupt existing functionality. Test thoroughly before deploying.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Updating Deployment Configuration</h2>
          <p>To deploy your customized chatbot:</p>

          <ol className="list-decimal list-inside mt-4">
            <li><strong>Update Deployment Settings:</strong> Adjust the deployment configuration files if needed (e.g., `vercel.json` for Vercel deployments).</li>
            <li><strong>Deploy Changes:</strong> Commit your changes to version control and deploy the updated chatbot to your hosting platform.</li>
            <li><strong>Testing:</strong> Verify the deployed version to ensure all customizations are live and functioning as intended.</li>
          </ol>

          <p>Customizing the Elderly Advisor Chatbot allows you to provide a personalized experience for users. Follow these steps to update responses, design, functionality, and features to meet your specific needs. Regular testing and deployment will ensure your chatbot remains effective and user-friendly.</p>
        </div>
      </section>

      <section id="deployment-instructions" className="mb-10">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Deployment Instructions:</h1>

          <p>Deploying your Elderly Advisor Chatbot on Vercel involves a series of steps to ensure a smooth deployment process. Follow these instructions to deploy your chatbot effectively.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Prepare Your Project for Deployment</h2>
          <p>Before deploying, ensure your project is ready by following these steps:</p>

          <ol className="list-decimal list-inside mt-4">
            <li><strong>Ensure All Dependencies Are Installed:</strong> Verify that all necessary dependencies are included in your `package.json` file. Run:
              <pre className="bg-gray-100 p-2 rounded"><code>npm install</code></pre>
            </li>

            <li><strong>Build Your Project:</strong> Generate the production build of your application by running:
              <pre className="bg-gray-100 p-2 rounded"><code>npm run build</code></pre>
            </li>

            <li><strong>Configure Environment Variables:</strong> Set up any environment variables required for your project. Create a `.env` file in your project root if needed.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Set Up a Vercel Account</h2>
          <p>If you don't have a Vercel account, sign up at <a href="https://vercel.com" className="text-blue-500 underline">Vercel</a>.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Deploy Your Project</h2>
          <p>Follow these steps to deploy your project on Vercel:</p>

          <ol className="list-decimal list-inside mt-4">
            <li><strong>Install Vercel CLI:</strong> If you haven't installed the Vercel CLI, do so by running:
              <pre className="bg-gray-100 p-2 rounded"><code>npm install -g vercel</code></pre>
            </li>

            <li><strong>Log In to Vercel:</strong> Authenticate your Vercel account using the CLI:
              <pre className="bg-gray-100 p-2 rounded"><code>vercel login</code></pre>
            </li>

            <li><strong>Deploy Your Project:</strong> Deploy your project by running:
              <pre className="bg-gray-100 p-2 rounded"><code>vercel</code></pre>
              Follow the prompts to configure your deployment settings. Vercel will provide a URL for your live project.</li>

            <li><strong>Configure Deployment Settings:</strong> If needed, adjust your deployment settings on the Vercel dashboard. You can manage environment variables, custom domains, and other settings.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Verify Deployment</h2>
          <p>After deployment, verify that your chatbot is functioning correctly by visiting the provided URL. Test all functionalities to ensure everything is working as expected.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Update Deployment</h2>
          <p>If you make further changes to your project:</p>

          <ol className="list-decimal list-inside mt-4">
            <li><strong>Commit Changes:</strong> Save your changes to version control:</li>
            <pre className="bg-gray-100 p-2 rounded"><code>git add .</code></pre>
            <pre className="bg-gray-100 p-2 rounded"><code>git commit -m "Update deployment"</code></pre>

            <li><strong>Push Changes:</strong> Push changes to your remote repository:</li>
            <pre className="bg-gray-100 p-2 rounded"><code>git push</code></pre>

            <li><strong>Redeploy:</strong> Redeploy your updated project to Vercel:</li>
            <pre className="bg-gray-100 p-2 rounded"><code>vercel --prod</code></pre>
          </ol>

          <p>By following these steps, you can effectively deploy and manage your Elderly Advisor Chatbot on Vercel. For further customization and troubleshooting, refer to Vercel's documentation or support resources.</p>
        </div>
      </section>

      <section id="troubleshooting" className="mb-10">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Troubleshooting:</h1>

          <p>If you encounter issues with your Elderly Advisor Chatbot, this section provides solutions to common problems. Follow these troubleshooting steps to resolve issues effectively.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Chatbot Not Responding</h2>
          <p>If the chatbot is not responding to user inputs, consider the following solutions:</p>

          <ol className="list-decimal list-inside mt-4">
            <li><strong>Check API Connectivity:</strong> Ensure that the API you are using (e.g., Gemini AI API) is reachable. Verify your API keys and network connectivity.</li>

            <li><strong>Review Console Errors:</strong> Open the browser's developer console and look for any error messages that might indicate what’s wrong.</li>

            <li><strong>Verify Code Implementation:</strong> Ensure that the chatbot logic is correctly implemented in the `Chatbot.js` file. Check for any syntax errors or logic issues.</li>

            <li><strong>Inspect Network Requests:</strong> Use browser developer tools to check if network requests are being sent and received correctly. Look for failed requests or error responses.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Incorrect or Outdated Responses</h2>
          <p>If the chatbot is providing incorrect or outdated information:</p>

          <ol className="list-decimal list-inside mt-4">
            <li><strong>Update Predefined Responses:</strong> Check the `predefined-responses/page.js` file and ensure that the responses are accurate and up to date.</li>

            <li><strong>Refresh the Cache:</strong> Clear the browser cache and refresh the page to ensure that the latest changes are being loaded.</li>

            <li><strong>Review Response Logic:</strong> Verify that the logic for generating responses in `Chatbot.js` is functioning as expected. Make sure it handles different user inputs correctly.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Deployment Issues</h2>
          <p>If you encounter problems during deployment:</p>

          <ol className="list-decimal list-inside mt-4">
            <li><strong>Check Deployment Logs:</strong> Review the deployment logs on Vercel for any error messages or issues that occurred during deployment.</li>

            <li><strong>Verify Configuration:</strong> Ensure that your deployment settings, such as environment variables and build configurations, are correctly set up.</li>

            <li><strong>Resolve Build Errors:</strong> If the build fails, check the build logs for errors. Resolve any issues related to missing dependencies or build scripts.</li>

            <li><strong>Re-deploy:</strong> After resolving the issues, redeploy your project to Vercel to apply the fixes.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Styling and Layout Problems</h2>
          <p>If there are issues with the chatbot’s styling or layout:</p>

          <ol className="list-decimal list-inside mt-4">
            <li><strong>Inspect CSS Files:</strong> Verify the styles in `global.css` or other relevant CSS files. Ensure that styles are applied correctly and there are no conflicts.</li>

            <li><strong>Test Responsiveness:</strong> Check how the chatbot looks on different screen sizes and devices. Ensure that the layout is responsive and works well on all devices.</li>

            <li><strong>Review HTML Structure:</strong> Ensure that the HTML structure of the chatbot component is correct and aligns with the styling applied.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. API Integration Issues</h2>
          <p>If there are issues with API integration:</p>

          <ol className="list-decimal list-inside mt-4">
            <li><strong>Verify API Key:</strong> Ensure that the API key is correctly set in your environment variables and matches what is required by the API provider.</li>

            <li><strong>Check API Documentation:</strong> Review the API documentation for any changes or updates that might affect your integration.</li>

            <li><strong>Inspect API Requests:</strong> Use developer tools to monitor API requests and responses. Look for issues such as incorrect endpoints or authentication errors.</li>
          </ol>

          <p>If you need further assistance, consult the API provider’s support resources or seek help from the development community.</p>
        </div>
      </section>

      <section id="contact-information" className="mb-10">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Contact Information:</h1>

          <p>If you need support or wish to contribute to the Elderly Advisor Chatbot project, please use the following contact methods:</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. GitHub Repository</h2>
          <p>For support, contributions, or to report issues, please visit the project's GitHub repository:</p>

          <p><a href="https://github.com/your-username/your-repository" className="text-blue-500 underline">https://github.com/your-username/your-repository</a></p>

          <p>On GitHub, you can:</p>

          <ul className="list-disc list-inside mt-4">
            <li><strong>Open Issues:</strong> Report bugs, request features, or ask questions.</li>
            <li><strong>Submit Pull Requests:</strong> Contribute code improvements or new features.</li>
            <li><strong>Review Code:</strong> View and review code changes and documentation updates.</li>
            <li><strong>Discuss:</strong> Engage with other contributors and project maintainers.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Direct Contact</h2>
          <p>If you prefer direct contact or have specific queries, you can reach out to the project maintainer:</p>

          <p><strong>Email:</strong> <a href="mailto:gaurav.k7303@gmail.com" className="text-blue-500 underline">gaurav.k7303@gmail.com</a></p>

          <p>We appreciate your interest in the Elderly Advisor Chatbot project and look forward to your contributions and feedback!</p>
        </div>
      </section>
      {/* Add more sections here as per the documentation */}
    </>
  );
}

