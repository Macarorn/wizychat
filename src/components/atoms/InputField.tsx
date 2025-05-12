import React from "react";
import Sendarrow from "../../assets/icons/send-arrow";
import Happyface from "../../assets/icons/happy-face";
import Wizylogo from "../../wizychat-logo";

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
}

export const InputField = ({ value, onChange, onSend }: InputFieldProps) => (
  <div className="w-full flex flex-col">
    {/* Separator line */}
    <div className="border-t border-gray-300" />

    {/* Text field + button */}
    <div className="flex items-center px-4 py-2">
      <Happyface width={20} height={20} className="mr-3" />
      <input
        type="text"
        className="flex-1 px-3 py-2 outline-none"
        placeholder="Write a message..."
        value={value}
        onChange={onChange}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
      />
      <button
        onClick={onSend}
        className="bg-[#1b1b50] hover:bg-[#252550] transition rounded-full w-10 h-10 flex items-center justify-center ml-3"
      >
        <Sendarrow width={20} height={20} />
      </button>
    </div>
    <div className="bg-[#f0f0f0] flex items-center justify-center text-xs text-[#a4acac] py-2 rounded-b-xl -mt-1">
      <span className="font-bold border-b border-[#a4acac]">
        Powered By Wizybot
      </span>
      <Wizylogo width={20} height={20} className="ml-3" color="#a4acac" />
    </div>
  </div>
);
