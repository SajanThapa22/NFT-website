import Search from "../assets/svgs/search.svg?react";
import Sun from "../assets/svgs/sun.svg?react";
import Moon from "../assets/svgs/moon.svg?react";
import Notification from "../assets/svgs/notification.svg?react";

import avatar from "../assets/images/avatar.png";
import { useState } from "react";

const SearchandNotification = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [mode, setMode] = useState<string>();

  const handleClick = () => setIsClicked(!isClicked);
  const makeDark = () => setMode("dark");
  const makeLight = () => setMode("light");

  return (
    <div className="flex w-full justify-between">
      <div className="py-3 px-4 w-80 items-center flex gap-3 bg-bg-comp rounded-xl">
        <Search className="w-6 h-6 text-txt-gray dark:text-white" />
        <input
          placeholder="Search here"
          className="focus:outline-none w-full bg-transparent text-lg h-fit text-txt-clr"
        />
      </div>

      <div className="flex gap-7 items-center">
        <div className="flex gap-5 items-center">
          <div
            onClick={handleClick}
            onBlur={() => setIsClicked(false)}
            className="relative"
          >
            <div>
              {mode === "dark" ? (
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
              <div className="text-txt-clr cursor-pointer">System</div>
            </div>
          </div>
          <Notification className="w-6 h-6 text-txt-clr" />
        </div>
        <div>
          <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SearchandNotification;
