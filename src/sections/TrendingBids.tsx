import BidCards from "../components/BidsCards";

const TrendingBids = () => {
  return (
    <div className="grid gap-[30px]">
      <h1 className="text-xl text-txt-clr capitalize font-semibold">
        trending bids
      </h1>
      <div className="grid gap-7 md:gap-8 lg:gap-10 xl:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <BidCards />
        <BidCards />
        <BidCards />
        <BidCards />
        <BidCards />
        <BidCards />
        <BidCards />
        <BidCards />
      </div>
    </div>
  );
};

export default TrendingBids;
