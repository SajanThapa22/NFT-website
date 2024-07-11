import { useState, useEffect } from "react";
import {
  BidsIcon,
  CollectionIcon,
  HeartIcon,
  HomeIcon,
  profileIcon,
  SettingIcon,
} from "../assets/svgs/NavIcons";
import Signout from "../assets/svgs/signout.svg?react";

import { NavLink } from "react-router-dom";

const routes = [
  { id: 1, icon: HomeIcon, path: "/" },
  { id: 2, icon: BidsIcon, path: "/bids" },
  { id: 3, icon: HeartIcon, path: "/saved" },
  { id: 4, icon: CollectionIcon, path: "/collection" },
  { id: 5, icon: profileIcon, path: "/profile" },
  { id: 6, icon: SettingIcon, path: "/setting" },
];

const NavBarSmall = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <>
      <div className="flex fixed bottom-0 z-10 w-full items-center justify-evenly bg-bg-comp py-5">
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
              <Icon
                className={`hover:text-purp ${
                  width < 350 ? "w-5 h-5" : "w-6 h-6"
                }`}
              />
            </NavLink>
          );
        })}
        <div className={` ${width < 350 ? "w-5 h-5" : "w-6 h-6"}`}>
          <Signout className="text-gray-400 hover:text-purp w-full h-full" />
        </div>
      </div>
    </>
  );
};

export default NavBarSmall;
