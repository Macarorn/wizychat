import React from "react";
import { ChatInterface } from "./components/layouts/ChatInterface";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 p-4">
      <ChatInterface />
    </div>
  );
}
