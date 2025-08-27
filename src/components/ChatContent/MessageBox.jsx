import Markdown from "react-markdown";

const MessageBox = ({ message }) => {
  return (
    <div
      className={`p-3 mb-2 rounded-lg max-w-[85%] shadow-md ${
        message.role === "user"
          ? "bg-main-color text-white self-end"
          : message.role === "error"
          ? "bg-red-200 text-black self-start w-[85%]"
          : "bg-gray-200 text-black self-start"
      }`}
    >
      <Markdown>{message.content}</Markdown>
    </div>
  );
};

export default MessageBox;
