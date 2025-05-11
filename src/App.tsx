import React from "react";
import Wizylogo from "./wizychat-logo";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <Wizylogo className="w-32 h-32 mb-6" />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
