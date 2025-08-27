import MessageBox from "./ChatContent/MessageBox";

const Chat = ({ messages }) => {
  const welcomeMessage = {
    role: "assistant",
    content: "Hello! How can I assist you today?",
  };

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
      </div>
    </div>
  );
};

export default Chat;
