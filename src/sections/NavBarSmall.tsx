import Dashboard from "../assets/svgs/dashboard.svg?react";
import Heart from "../assets/svgs/heart.svg?react";
import Bid from "../assets/svgs/bid.svg?react";
import Collection from "../assets/svgs/collection.svg?react";
import Profile from "../assets/svgs/profile.svg?react";
import Setting from "../assets/svgs/setting.svg?react";
import { NavLink } from "react-router-dom";

const icons = [
  { id: 1, icon: Dashboard, route: "/" },
  { id: 2, icon: Bid, route: "bids" },
  { id: 3, icon: Heart, route: "saved" },
  { id: 4, icon: Collection, route: "collection" },
  { id: 5, icon: Profile, route: "profile" },
  { id: 6, icon: Setting, route: "setting" },
];

const NavBarSmall = () => {
  return (
    <div className="flex fixed bottom-0 z-10 w-full items-center justify-evenly bg-bg-comp px-6 py-5">
      {icons.map((i) => (
        <NavLink to={i.route}>
          <i.icon
            key={i.id}
            className="text-gray-500 hover:text-purp w-6 aspect-square cursor-pointer"
          />
        </NavLink>
      ))}
    </div>
  );
};

export default NavBarSmall;
