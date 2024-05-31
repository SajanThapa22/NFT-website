import { useState } from "react";
import DiscoverNFT from "./DiscoverNFT";
import SearchSmall from "./SearchSmall";
import SearchandNotification from "./SearchandNotification";

const MainSection = () => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <div className="w-full min-h-fit flex flex-col gap-12 px-5 py-6 xl:px-16 xl:py-7">
      {width > 840 ? <SearchandNotification /> : <SearchSmall />}

      <DiscoverNFT />
    </div>
  );
};

export default MainSection;
