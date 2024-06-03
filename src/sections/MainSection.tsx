import { useState } from "react";
import DiscoverNFT from "./DiscoverNFT";
import SearchSmall from "./SearchSmall";
import SearchandNotification from "./SearchandNotification";
import TrendingBids from "./TrendingBids";
import MetricsCard from "../components/MetricsCard";
import Artwork from "../assets/svgs/Artwork.svg?react";

const MainSection = () => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <div className="w-full min-h-fit flex flex-col gap-12 px-5 py-6 xl:px-12 xl:py-7">
      {width > 840 ? <SearchandNotification /> : <SearchSmall />}

      <DiscoverNFT />
      <TrendingBids />
      <MetricsCard styles="bg-purp" text="ArtWorks" amount="25K" percent="86%">
        <Artwork />
      </MetricsCard>
      <div className="h-6"></div>
    </div>
  );
};

export default MainSection;
