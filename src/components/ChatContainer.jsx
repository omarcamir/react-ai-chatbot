import { useState } from "react";
// import { Mesgs } from "../utils/dummyData";
import Chat from "./Chat";
import ChatForm from "./ChatContent/ChatForm";
import { sendToGemini } from "../assistants/Gemini";
import { sendToGPT } from "../assistants/GPTAssistant";
import Loader from "./Loader";
import Header from "./Header";

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const [assistant, setAssistant] = useState("gemini");
  const [loading, setLoading] = useState(false);
  const addMsg = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const sendMessage = async (newMessage) => {
    addMsg({ role: "user", content: newMessage });
    setLoading(true);

    try {
      let text;
      if (assistant === "gemini") {
        text = await sendToGemini(newMessage, "gemini-2.5-flash");
      } else {
        text = await sendToGPT(newMessage, "gpt-4o-mini");
      }
      setLoading(false);
      addMsg({ role: "assistant", content: text });
    } catch (error) {
      setLoading(false);
      addMsg({
        role: "error",
        content: error || "Error: Unable to fetch response.",
      });
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header assistant={assistant} setAssistant={setAssistant} />
      <main className="flex-1 overflow-y-auto py-2 relative">
        <Chat messages={messages} />
        {loading && <Loader />}
      </main>
      <footer className="p-2 bg-white/40 backdrop-blur-md sticky bottom-0 left-0 w-full z-10">
        <ChatForm sendMessage={sendMessage} loading={loading} />
      </footer>
    </div>
  );
};

export default ChatContainer;
