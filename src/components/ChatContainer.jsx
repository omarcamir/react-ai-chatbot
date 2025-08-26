import { useState } from "react";
import { Mesgs } from "../utils/dummyData";
import Chat from "./Chat";
import ChatForm from "./ChatContent/ChatForm";
import Logo from "./Logo";

const ChatContainer = () => {
  const [messages, setMessages] = useState(Mesgs);
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className=" bg-white/60 backdrop-blur-md shadow-md sticky top-0 z-10 py-1">
        <Logo />
      </header>
      <main className="flex-1 overflow-y-auto">
        <Chat messages={messages} />
      </main>
      <footer className="p-2 bg-white/60 backdrop-blur-md sticky bottom-0 left-0 w-full z-10">
        <ChatForm />
      </footer>
    </div>
  );
};

export default ChatContainer;
