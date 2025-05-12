import React from "react";
import Sendarrow from "../../assets/icons/send-arrow";
// import { FaPaperPlane } from "react-icons/fa";

interface SendButtonProps {
  onClick: () => void;
}

export const SendButton = ({ onClick }: SendButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition"
      aria-label="Send message"
    >
      {/* <FaPaperPlane size={16} /> */}
      <Sendarrow />
    </button>
  );
};
