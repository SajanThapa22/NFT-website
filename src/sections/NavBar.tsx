import Dashboard from "../assets/svgs/dashboard.svg?react";
import Heart from "../assets/svgs/heart.svg?react";
import Bid from "../assets/svgs/bid.svg?react";
import Collection from "../assets/svgs/collection.svg?react";
import Profile from "../assets/svgs/profile.svg?react";
import Setting from "../assets/svgs/setting.svg?react";
import Signout from "../assets/svgs/signout.svg?react";

import logo from "../assets/images/Logo.png";

const icons = [
  { id: 1, icon: Dashboard },
  { id: 2, icon: Bid },
  { id: 3, icon: Heart },
  { id: 4, icon: Collection },
  { id: 5, icon: Profile },
  { id: 6, icon: Setting },
];

const NavBar = () => {
  return (
    <div className="flex flex-col sticky left-0 gap-14 w-fit items-center pt-8 pb-20 bg-bg-comp h-dvh px-6 py-5">
      <div>
        <img className="w-8 aspect-square" src={logo} alt="logo" />
      </div>
      <div className="flex flex-col items-center w-fit gap-12">
        {icons.map((i) => (
          <i.icon
            key={i.id}
            className="text-gray-400 hover:text-purp w-6 aspect-square"
          />
        ))}
      </div>
      <Signout className="text-gray-400 justify-self-end hover:text-purp w-6 aspect-square mt-auto" />
    </div>
  );
};

export default NavBar;
