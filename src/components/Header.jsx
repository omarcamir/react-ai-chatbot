import AssistantSelect from "./AssistantSelect";
import Logo from "./Logo";


const Header = ({ assistant, setAssistant }) => {
  return (
    <header className=" bg-white/40 backdrop-blur-md shadow-md sticky top-0 z-10 py-1 pb-2 md:pb-0">
      <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-5">
        <Logo />
        <AssistantSelect assistant={assistant} setAssistant={setAssistant} />
      </div>
    </header>
  );
};

export default Header;
