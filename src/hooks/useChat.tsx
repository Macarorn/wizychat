// Handles message list, typing state, and simulates bot replies (including product fetch)
import { useState, useEffect } from "react";
import { ChatMessage } from "../types/chat";
import { fetchProductRecommendations } from "../utils/api";
import { getRandomBotResponse } from "../utils/responses";
import { v4 as uuidv4 } from "uuid";

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const welcome: ChatMessage = {
      id: uuidv4(),
      sender: "bot",
      content: "Hello there! Do you need any help?",
      timestamp: new Date().toISOString(),
    };
    setMessages([welcome]);
  }, []);

  const sendMessage = async (content: string) => {
    const userMessage: ChatMessage = {
      id: uuidv4(),
      sender: "user",
      content,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(async () => {
      let botContent: string;
      try {
        if (content.toLowerCase().includes("i want product recommendations")) {
          const products = await fetchProductRecommendations();
          botContent = JSON.stringify(products);
        } else {
          botContent = getRandomBotResponse();
        }
      } catch (e) {
        botContent = "Oops! Something went wrong fetching the products.";
      }

      const botMessage: ChatMessage = {
        id: uuidv4(),
        sender: "bot",
        content: botContent,
        timestamp: new Date().toISOString(),
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botMessage]);
    }, 3000);
  };

  return { messages, isTyping, sendMessage };
};
