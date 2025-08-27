const MessageBox = ({ message }) => {
  return (
    <div
      className={`p-3 mb-2 rounded-lg max-w-[85%] shadow-md ${
        message.role === "user"
          ? "bg-main-color text-white self-end"
          : message.role === "error"
          ? "bg-red-200 text-black self-start"
          : "bg-gray-200 text-black self-start"
      }`}
    >
      <p className="white">{message.content}</p>
    </div>
  );
};

export default MessageBox;
