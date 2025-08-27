import { useState } from "react";
// import { Mesgs } from "../utils/dummyData";
import Chat from "./Chat";
import ChatForm from "./ChatContent/ChatForm";
import Logo from "./Logo";
import { sendToGemini } from "../assistants/Gemini";

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const addMsg = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const sendMessage = async (newMessage) => {
    addMsg({ role: "user", content: newMessage });

    try {
      const text = await sendToGemini(newMessage, "gemini-2.5-flash");
      addMsg({ role: "assistant", content: text });
    } catch (error) {
      addMsg({
        role: "error",
        content: error || "Error: Unable to fetch response.",
      });
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className=" bg-white/40 backdrop-blur-md shadow-md sticky top-0 z-10 py-1">
        <Logo />
      </header>
      <main className="flex-1 overflow-y-auto py-2">
        <Chat messages={messages} />
      </main>
      <footer className="p-2 bg-white/40 backdrop-blur-md sticky bottom-0 left-0 w-full z-10">
        <ChatForm sendMessage={sendMessage} />
      </footer>
    </div>
  );
};

export default ChatContainer;
