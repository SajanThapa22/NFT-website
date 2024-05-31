import { useEffect, useState } from "react";
import Sun from "../assets/svgs/sun.svg?react";
import Moon from "../assets/svgs/moon.svg?react";

const ThemeSwitch = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleClick = () => setIsClicked(!isClicked);
  const makeDark = () => setTheme("dark");
  const makeLight = () => setTheme("light");
  const makeDefault = () => setTheme("system");

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <div>
      <div onClick={handleClick} className="relative">
        <div>
          {theme === "dark" ? (
            <Moon className="w-6 h-6 text-txt-clr" />
          ) : (
            <Sun className="w-6 h-6 text-txt-clr" />
          )}
        </div>
        <div
          className={`absolute bottom-0 translate-y-full text-nowrap text-sm ${
            isClicked ? "w-full" : "w-0 overflow-hidden"
          }`}
        >
          <div onClick={makeLight} className="text-txt-clr cursor-pointer">
            Light Mode
          </div>
          <div onClick={makeDark} className="text-txt-clr cursor-pointer">
            Dark Mode
          </div>
          <div onClick={makeDefault} className="text-txt-clr cursor-pointer">
            System
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
