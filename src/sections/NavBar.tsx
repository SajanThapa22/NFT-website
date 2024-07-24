import Signout from "../assets/svgs/signout.svg?react";

import logo from "../assets/images/Logo.png";
import { NavLink } from "react-router-dom";
import {
  BidsIcon,
  CollectionIcon,
  HeartIcon,
  HomeIcon,
  profileIcon,
  SettingIcon,
} from "../assets/svgs/NavIcons";

const routes = [
  { id: 1, icon: HomeIcon, path: "/" },
  { id: 2, icon: BidsIcon, path: "/bids" },
  { id: 3, icon: HeartIcon, path: "/saved" },
  { id: 4, icon: CollectionIcon, path: "/collection" },
  { id: 5, icon: profileIcon, path: "/profile" },
  { id: 6, icon: SettingIcon, path: "/setting" },
];

const NavBar = () => {
  return (
    <div className="flex flex-col sticky top-0 gap-14 w-fit h-screen items-center pt-8 pb-20 bg-bg-comp px-6 py-5">
      <div>
        <NavLink to="/">
          <img className="w-8 aspect-square" src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="flex flex-col items-center w-fit gap-12">
        {routes.map((route, index) => {
          const Icon = route.icon;
          return (
            <NavLink
              key={index}
              to={route.path}
              className={({ isActive }) =>
                `nav-icon ${isActive ? "text-purp" : "text-gray-500"}`
              }
            >
              <Icon className="w-6 h-6 hover:text-purp" />
            </NavLink>
          );
        })}
      </div>
      <div className="w-6 h-6">
        <Signout className="text-gray-400 justify-self-end hover:text-purp w-full h-full mt-[50px]" />
      </div>
    </div>
  );
};

export default NavBar;
