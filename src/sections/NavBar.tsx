import Dashboard from "../assets/svgs/dashboard.svg?react";
import Heart from "../assets/svgs/heart.svg?react";
import Bid from "../assets/svgs/bid.svg?react";
import Collection from "../assets/svgs/collection.svg?react";
import Profile from "../assets/svgs/profile.svg?react";
import Setting from "../assets/svgs/setting.svg?react";
import Signout from "../assets/svgs/signout.svg?react";

import logo from "../assets/images/Logo.png";
import { NavLink } from "react-router-dom";

const icons = [
  { id: 1, icon: Dashboard, route: "/" },
  { id: 2, icon: Bid, route: "bids" },
  { id: 3, icon: Heart, route: "saved" },
  { id: 4, icon: Collection, route: "collection" },
  { id: 5, icon: Profile, route: "profile" },
  { id: 6, icon: Setting, route: "setting" },
];

const NavBar = () => {
  return (
    <div className="flex flex-col sticky top-0 gap-14 w-fit h-dvh items-center pt-8 pb-20 bg-bg-comp px-6 py-5">
      <div>
        <img className="w-8 aspect-square" src={logo} alt="logo" />
      </div>
      <div className="flex flex-col items-center w-fit gap-12">
        {icons.map((i) => (
          <NavLink to={i.route}>
            <i.icon
              key={i.id}
              className="text-gray-500 hover:text-purp w-6 aspect-square cursor-pointer"
            />
          </NavLink>
        ))}
      </div>
      <Signout className="text-gray-400 justify-self-end hover:text-purp w-6 aspect-square mt-[50px]" />
    </div>
  );
};

export default NavBar;
