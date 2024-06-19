import Artwork from "../assets/svgs/Artwork.svg?react";

import MetricsCard from "../components/MetricsCard";
import piechart from "../assets/images/piechart.png";
import graph from "../assets/images/graph.png";

const TrendingMetrics = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl text-txt-clr capitalize font-semibold">
        trending bids
      </h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-[2fr,3fr,2fr]">
        <div className="flex flex-col gap-4 2xl:gap-8">
          <MetricsCard
            styles="bg-purp"
            text="ArtWorks"
            amount="25K"
            percent="86%"
          >
            <Artwork />
          </MetricsCard>
          <MetricsCard
            styles="bg-[#DC3546]"
            text="ArtWorks"
            amount="89"
            percent="86%"
          >
            <Artwork />
          </MetricsCard>
          <MetricsCard
            styles="bg-purp"
            text="ArtWorks"
            amount="25K"
            percent="87%"
          >
            <Artwork />
          </MetricsCard>
        </div>

        <div className="px-3 py-5 w-full rounded-[18px] bg-white">
          <img className="w-full" src={graph} alt="" />
        </div>
        <div className="px-4 py-6 w-full rounded-[18px] bg-white">
          <img className="w-full" src={piechart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TrendingMetrics;
