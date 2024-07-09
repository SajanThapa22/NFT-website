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
    <div className="flex">
      {width > 840 ? <NavBar /> : <NavBarSmall />}
      {width > 840 ? <SearchandNotification /> : <SearchSmall />}
      <Outlet />
    </div>
  );
};

export default Layout;
