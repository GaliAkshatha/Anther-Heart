import React from "react";
import HelpChatbot from "../components/common/HelpChatbot";

export default function Help() {
  return (
    <div className="pt-32 px-6 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">How can we help?</h1>

      <HelpChatbot />
    </div>
  );
}


