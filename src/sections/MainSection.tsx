import DiscoverNFT from "./DiscoverNFT";
import SearchSmall from "./SearchSmall";
import SearchandNotification from "./SearchandNotification";

const MainSection = () => {
  return (
    <div className="w-full px-5 py-6 lg:px-16 lg:py-7">
      <SearchandNotification />
      <DiscoverNFT />
    </div>
  );
};

export default MainSection;
