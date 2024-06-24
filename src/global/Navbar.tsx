import { useTheme } from "../context/themeContext";
import Icon from "../shared/Icon";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`flex w-full items-center justify-center min-h-[60px] shadow-2xl`}
    >
      <div className="container flex justify-between items-center sm:mx-4 mx-2">
        <h4 className="sm:text-3xl text-xl text-textColLight dark:text-white text-center font-extrabold">
          KANBAN BOARD
        </h4>
        <div className="buttonWrapper flex justify-center items-center">
          <button className="p-2 bg-light-primary dark:bg-dark-secondary text-textColLight flex justify-center items-center rounded-lg transition-colors duration-300 hover:translate-y-[-2px] active:translate-y-[2px]">
            <span className="hidden sm:block">
              <Icon name="plus" />
            </span>
            Add New Task
          </button>
          <button
            className={`p-3 transition-colors duration-300 text-white`}
            onClick={toggleTheme}
          >
            {theme === "light" ? <Icon name="sun" /> : <Icon name="moon" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
