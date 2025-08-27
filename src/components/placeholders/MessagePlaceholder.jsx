const MessagePlaceholder = () => {
  return (
    <div className="p-3 mb-2 rounded-lg w-[85%] bg-gray-200 text-black self-start shadow-md animate-pulse">
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-300 rounded w-5/6" />
        <div className="h-4 bg-gray-300 rounded w-2/3" />
      </div>
    </div>
  );
};

export default MessagePlaceholder;
