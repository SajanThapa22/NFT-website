import DiscoverNFT from "../sections/DiscoverNFT";
import TrendingBids from "../sections/TrendingBids";
import TrendingMetrics from "../sections/TrendingMetrics";
import RAandTC from "../components/RAandTC";
import ActiveBids from "../sections/ActiveBids";

const Home = () => {
  return (
    <div className="w-full min-h-fit flex flex-col gap-12 mt-[40px] lg:mt-[50px]">
      <DiscoverNFT />
      <TrendingBids />
      <TrendingMetrics />
      <RAandTC />
      <ActiveBids />
    </div>
  );
};

export default Home;
