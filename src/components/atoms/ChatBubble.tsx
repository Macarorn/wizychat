// Renders a chat bubble aligned by sender with timestamp
import React from "react";
import { Sender } from "../../types/chat";
interface ChatBubbleProps {
  sender: Sender;
  content: string;
}

export const ChatBubble = ({ sender, content }: ChatBubbleProps) => {
  const isUser = sender === "user";
  const now = new Date();
  const time = now
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .replace(/\s+/g, "");
  const day = now.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] px-4 py-2 rounded-xl text-sm mb-1 shadow ${
          isUser ? "bg-[#64c8d7] text-black " : "bg-[#f0f0f0] text-black "
        }`}
      >
        {content}
        <div className="text-[10px] text-[#505a69] text-left mt-1">
          {time} | {day}
        </div>
      </div>
    </div>
  );
};
