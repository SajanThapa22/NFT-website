import { useState } from "react";
import DiscoverNFT from "../sections/DiscoverNFT";
import SearchSmall from "../sections/SearchSmall";
import SearchandNotification from "../sections/SearchandNotification";
import TrendingBids from "../sections/TrendingBids";
import TrendingMetrics from "../sections/TrendingMetrics";
import RAandTC from "../components/RAandTC";
import ActiveBids from "../sections/ActiveBids";
import Bids from "./Bids";
import SavedItems from "./SavedItems";
import Profile from "./Profile";

const MainSection = () => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <div className="w-full min-h-fit flex flex-col gap-12 px-5 py-6 xl:px-12 xl:py-7">
      {width > 840 ? <SearchandNotification /> : <SearchSmall />}

      <DiscoverNFT />
      <TrendingBids />
      <TrendingMetrics />
      <RAandTC />
      <ActiveBids />
      <Bids />
      <SavedItems />
      <Profile />

      <div className="h-6"></div>
    </div>
  );
};

export default MainSection;
