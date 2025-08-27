const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      <img src="/AiChaiBot.webp" alt="logo" className="w-12 md:w-16" />
      <h1 className="text-3xl font-bold uppercase">
        Omar
        <span className="text-main-color">Chai-Bot</span>
      </h1>
    </div>
  );
};

export default Logo;
