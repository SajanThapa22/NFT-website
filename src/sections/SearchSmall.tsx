import Search from "../assets/svgs/search.svg?react";
import Sun from "../assets/svgs/sun.svg?react";
import Notification from "../assets/svgs/notification.svg?react";

import avatar from "../assets/images/avatar.png";
import logo from "../assets/images/Logo.png";
import ThemeSwitch from "../components/ThemeSwitch";

const SearchSmall = () => {
  return (
    <div className="flex w-full justify-between gap-5">
      <div className="flex items-center gap-5">
        <div>
          <img
            className="w-12 aspect-square rounded-xl"
            src={logo}
            alt="logo"
          />
        </div>

        <div className="py-2 px-4 w-full items-center flex gap-3 bg-bg-comp rounded-xl">
          <Search className="w-6 h-6 text-txt-clr" />
          <input
            placeholder="Search here"
            className="focus:outline-none w-full bg-transparent text-sm md:text-lg h-fit text-txt-clr"
          />
        </div>
      </div>

      <div className="flex gap-7 items-center">
        <div className="flex gap-5 items-center">
          <ThemeSwitch />
          <Notification className="w-6 h-6 text-txt-clr" />
        </div>
        <div className="min-h-6 min-w-6">
          <img className="min-h-6 min-w-6" src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SearchSmall;
