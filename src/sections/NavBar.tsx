import Dashboard from "../assets/svgs/dashboard.svg?react";
import Heart from "../assets/svgs/heart.svg?react";
import Bid from "../assets/svgs/bid.svg?react";
import Collection from "../assets/svgs/collection.svg?react";
import Profile from "../assets/svgs/profile.svg?react";
import Setting from "../assets/svgs/setting.svg?react";
import Signout from "../assets/svgs/setting.svg?react";

import logo from "../assets/images/Logo.png";
import Icon from "../components/Icon";

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
    <div className="flex flex-col fixed left-0 gap-14 w-fit items-center bg-bg-comp h-dvh px-6 py-5">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col items-center w-fit gap-12">
        {icons.map((i) => (
          <i.icon
            key={i.id}
            className="text-gray-400 hover:text-purple-600 w-6 aspect-square"
          />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
