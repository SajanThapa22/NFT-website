import Dashboard from "../assets/svgs/dashboard.svg?react";
import Heart from "../assets/svgs/heart.svg?react";
import Bid from "../assets/svgs/bid.svg?react";
import Collection from "../assets/svgs/collection.svg?react";
import Profile from "../assets/svgs/profile.svg?react";
import Setting from "../assets/svgs/setting.svg?react";
import Signout from "../assets/svgs/setting.svg?react";

import logo from "../assets/images/Logo.png";

const NavBar = () => {
  return (
    <div className="flex flex-col gap-14 w-fit items-center bg-bg-comp h-dvh px-6 py-5">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col justify-evenly w-fit gap-12">
        <Dashboard className="hover:text-purple-700" />

        <Bid className="hover:text-purple-700" />
        <Heart className="hover:text-purple-700" />

        <Collection className="hover:text-purple-700" />
        <Profile className="hover:text-purple-700" />
        <Setting className="hover:text-purple-700" />
      </div>
    </div>
  );
};

export default NavBar;
