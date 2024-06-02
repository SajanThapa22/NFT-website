import { useEffect, useState } from "react";
import Sun from "../assets/svgs/sun.svg?react";
import Moon from "../assets/svgs/moon.svg?react";
import System from "../assets/svgs/system.svg?react";

const modes = [
  { text: "light", icon: Sun },
  { text: "dark", icon: Moon },
  { text: "system", icon: System },
];

const ThemeSwitch = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = () => setIsClicked(!isClicked);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

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
          {theme === "dark" && <Moon className="w-6 h-6 text-txt-clr" />}
          {theme === "light" && <Sun className="w-6 h-6 text-txt-clr" />}
          {theme === "system" && <System className="w-6 h-6 text-txt-clr" />}
        </div>
        <ul
          className={`absolute bottom-0 bg-gray-400 overflow-hidden z-40 rounded-xl right-1/2 translate-x-1/2 translate-y-36 text-nowrap text-sm ${
            isClicked ? "h-fit" : "h-0 overflow-hidden"
          }`}
        >
          {modes.map((m) => (
            <li
              onClick={() => {
                setTheme(m.text);
              }}
              className={`flex items-center gap-3 cursor-pointer pl-5 pr-8 py-2 w-full hover:bg-slate-200`}
            >
              <m.icon
                className={`w-6 h-6 text-txt-clr ${
                  m.text === theme && "text-blue-500"
                }`}
              />
              <p
                className={`text-txt-clr font-medium ${
                  m.text === theme && "text-blue-500"
                }`}
              >
                {m.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThemeSwitch;
