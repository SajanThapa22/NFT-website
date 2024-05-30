import DiscoverNFT from "./DiscoverNFT";
import SearchSmall from "./SearchSmall";
import SearchandNotification from "./SearchandNotification";

const MainSection = () => {
  return (
    <div className="w-full flex flex-col gap-12 px-5 py-6 xl:px-16 xl:py-7">
      <SearchandNotification />
      <DiscoverNFT />
    </div>
  );
};

export default MainSection;
