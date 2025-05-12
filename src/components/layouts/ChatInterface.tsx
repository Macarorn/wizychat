import React, { useState, useRef, useEffect } from "react";
import { useChat } from "../../hooks/useChat";

import { ChatBubble } from "../atoms/ChatBubble";
import { InputField } from "../atoms/InputField";
import { TypingDots } from "../atoms/TypingDots";
import { ProductCarousel } from "../organisms/ProductCarousel";
import { Product } from "../../types/chat";
import Profile from "../../assets/icons/profile";
import Cart from "../../assets/icons/cart";
import Downarrow from "../../assets/icons/down-arrow";

export const ChatInterface = () => {
  const { messages, isTyping, sendMessage } = useChat();
  const [inputValue, setInputValue] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    sendMessage(inputValue.trim());
    setInputValue("");
  };

  const renderMessage = (msg: any) => {
    if (msg.sender === "bot" && msg.content.startsWith("[")) {
      try {
        const products: Product[] = JSON.parse(msg.content);
        return <ProductCarousel products={products} />;
      } catch {
        return (
          <ChatBubble
            sender={msg.sender}
            content="Error displaying products."
          />
        );
      }
    }
    return <ChatBubble sender={msg.sender} content={msg.content} />;
  };

  // Scroll to the bottom when messages or typing status change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="bg-white rounded-t-xl rounded-b-xl w-full max-w-sm shadow-md rounded h-[90vh] flex flex-col overflow-hidden">
      {/* ——— header ——— */}
      <div className="pb-1 rounded-t-xl bg-gradient-to-r from-[#191e41] to-[#39559b] p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Profile width={40} height={40} />
          <div className="flex flex-col">
            <span className="text-xs text-white">Chat with</span>
            <span className="text-white text-base font-bold">Wizychat</span>
          </div>
        </div>
        <div className="flex items-center ">
          <Cart width={20} height={20} />
          <button>
            <Downarrow
              width={13}
              height={13}
              className="ml-5 mr-3 text-white"
            />
          </button>
        </div>
      </div>
      {/* ——— sub-header ——— */}
      <div className="relative">
        <div className="bg-gradient-to-r from-[#191e41] to-[#39559b] px-4 flex items-center pl-5">
          <span className="inline-block w-1 h-1 bg-green-400 rounded-full mr-2" />
          <span className="text-xs text-white font-normal">
            We reply immediately!
          </span>
        </div>
        
        <div
          className="absolute top-full left-0 w-full overflow-hidden"
          style={{ height: "20px" }}
        >
          <svg
            className="w-full h-full transform -scale-y-100"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            
            <defs>
              <linearGradient id="headerGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#191e41" />
                <stop offset="100%" stopColor="#39559b" />
              </linearGradient>
            </defs>
            
            <path
              d="M0,30 C150,0 350,40 600,20 C850,0 1050,40 1200,20 L1200,100 L0,100 Z"
              fill="url(#headerGrad)"
            />
          </svg>
        </div>
        
      </div>

      {/* ——— messages ——— */}
      <div className="pt-8 flex-1  overflow-y-auto hide-scrollbar px-4 space-y-2">
        {messages.map((msg) => (
          <div key={msg.id}>{renderMessage(msg)}</div>
        ))}
        {isTyping && <TypingDots />}
        <div ref={bottomRef} />
      </div>

      {/* ——— input field ——— */}
      <InputField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSend={handleSend}
      />
    </div>
  );
};
