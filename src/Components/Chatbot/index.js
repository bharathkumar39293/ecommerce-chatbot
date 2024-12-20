import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    // Azure OpenAI credentials
    const apiKey = "6obZDqhGgHmL1u8zhhg504nX5L1v8oSzbkOl0HGJFL7lCDF5zCA5JQQJ99ALACHYHv6XJ3w3AAAAACOGmDul"; // Replace with your actual Azure OpenAI API key
    const endpoint = "https://bhara-m4wfhp94-eastus2.cognitiveservices.azure.com";
    const deploymentId = "gpt-4";
    const apiVersion = "2024-08-01-preview";

    const interactWithAI = async (userInput) => {
        try {
            const response = await axios.post(
                `${endpoint}/openai/deployments/${deploymentId}/chat/completions?api-version=${apiVersion}`,
                {
                    messages: [
                        { role: "system", content: "You are a helpful eCommerce assistant. Answer user queries about products." },
                        { role: "user", content: userInput }
                    ],
                    max_tokens: 150,
                    temperature: 0.7,
                    top_p: 1.0,
                    frequency_penalty: 0,
                    presence_penalty: 0,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": apiKey,
                    },
                }
            );

            return response.data.choices[0].message.content.trim();
        } catch (error) {
            console.error("Error interacting with Azure OpenAI:", error.response?.data || error.message);
            return "Sorry, I couldn't process your request at the moment.";
        }
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);

        const aiResponse = await interactWithAI(input);

        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", text: aiResponse },
        ]);

        setInput("");
    };

    return (
        <div className="chat-container">
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        <p>
                            <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
                        </p>
                    </div>
                ))}
            </div>

            <div className="input-container">
                <input
                    type="text"
                    placeholder="Ask me about products..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatBot;
