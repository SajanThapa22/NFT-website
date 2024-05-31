import Search from "../assets/svgs/search.svg?react";

import Notification from "../assets/svgs/notification.svg?react";

import avatar from "../assets/images/avatar.png";
import ThemeSwitch from "../components/ThemeSwitch";

const SearchandNotification = () => {
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
          <ThemeSwitch />
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
