import { useEffect, useRef } from "react";
import MessageBox from "./ChatContent/MessageBox";
import MessagePlaceholder from "./placeholders/MessagePlaceholder";

const Chat = ({ messages, loading }) => {
  const welcomeMessage = {
    role: "assistant",
    content: "Hello! How can I assist you today?",
  };
  const messagesEndRef = useRef(null);
  useEffect(() => {
    if (messages.length <= 1) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full h-full overflow-y-auto rounded-xl py-6 px-4 md:px-6">
      <div className="flex flex-col gap-2 py-2">
        {!messages || messages.length === 0 ? (
          <MessageBox message={welcomeMessage} />
        ) : (
          messages?.map((msg, index) => (
            <MessageBox key={index} message={msg} />
          ))
        )}
        {loading && <MessagePlaceholder />}
        <div ref={messagesEndRef}></div>
      </div>
    </div>
  );
};

export default Chat;
