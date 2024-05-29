import React from "react";

import Dashboard from "../assets/svgs/dashboard.svg?react";
import Heart from "../assets/svgs/heart.svg?react";
import Bid from "../assets/svgs/bid.svg?react";
import Collection from "../assets/svgs/collection.svg?react";
import Profile from "../assets/svgs/profile.svg?react";
import Setting from "../assets/svgs/setting.svg?react";
import Signout from "../assets/svgs/setting.svg?react";

const icons = [
  { id: 1, icon: Dashboard },
  { id: 2, icon: Bid },
  { id: 3, icon: Heart },
  { id: 4, icon: Collection },
  { id: 5, icon: Profile },
  { id: 6, icon: Setting },
];

const NavBarSmall = () => {
  return (
    <div className="flex fixed bottom-0  w-full items-center justify-evenly bg-bg-comp px-6 py-5">
      {icons.map((i) => (
        <i.icon
          key={i.id}
          className="text-gray-400 hover:text-purp w-6 aspect-square"
        />
      ))}
    </div>
  );
};

export default NavBarSmall;
