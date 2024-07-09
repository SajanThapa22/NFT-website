import { useState } from "react";
import NavBar from "../sections/NavBar";
import NavBarSmall from "../sections/NavBarSmall";
import SearchandNotification from "../sections/SearchandNotification";
import SearchSmall from "../sections/SearchSmall";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <div className="flex w-full z-100 relative">
      {width > 1024 ? <NavBar /> : <NavBarSmall />}
      <div className="px-5 pt-[20px] xl:px-12 pb-8 bg-bg-clr w-full">
        <div className="sticky lg:static top-0 z-[40] pt-[10px] pb-[10px] bg-bg-clr lg:pb-0">
          {width > 1024 ? <SearchandNotification /> : <SearchSmall />}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
