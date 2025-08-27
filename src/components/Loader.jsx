const Loader = () => {
  return (
    <div className="fixed right-0 top-0 w-full h-full flex items-center justify-center bg-white/70  z-10">
      <div className="w-3 h-3 rounded-full block mx-auto my-[15px] relative text-main-color box-border animate-loader"></div>
    </div>
  );
};

export default Loader;
