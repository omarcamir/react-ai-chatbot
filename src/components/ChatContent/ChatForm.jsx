import SendIcon from "../../../public/svg/sendIcon";

const ChatForm = () => {
  return (
    <form className="flex items-center gap-2 mt-4 w-full">
      <textarea
        rows="2"
        placeholder="Type your message..."
        className="flex-1 py-2 px-3 border border-gray-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-main-color"
      />
      <button type="submit" className="bg-main-color hover:bg-transparent border-2 border-transparent hover:border-main-color transition-all duration-200 p-2 w-12 h-12 rounded-full flex items-center justify-center group cursor-pointer">
        <SendIcon className=" text-white group-hover:text-main-color"/>
      </button>
    </form>
  );
};

export default ChatForm;
