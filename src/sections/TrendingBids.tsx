import BidCards from "../components/BidsCards";
import shady from "../assets/images/M&M.jpg";

const TrendingBids = () => {
  return (
    <div className="grid gap-[30px]">
      <div className="flex justify-between w-full">
        <h1 className="text-xl text-txt-clr capitalize font-semibold">
          trending bids
        </h1>
        <div className="flex gap-[10px] items-center">
          <div className="capitalize bg-purp px-4 py-1 text-sm rounded-2xl text-white">
            all
          </div>
          <p className="capitalize text-txt-clr text-sm">artwork</p>
          <p className="capitalize text-txt-clr text-sm">book</p>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <BidCards img={shady} />
        <BidCards img={shady} />
        <BidCards img={shady} />
        <BidCards img={shady} />
        <BidCards img={shady} />
        <BidCards img={shady} />
        <BidCards img={shady} />
        <BidCards img={shady} />
      </div>
    </div>
  );
};

export default TrendingBids;
