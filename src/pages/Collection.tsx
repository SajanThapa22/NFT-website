import WelomeTitle from "../components/WelomeTitle";
import BidCards from "../components/BidsCards";

const Collection = () => {
  return (
    <div>
      <WelomeTitle pageTitle="collection" titleBelow="collection" />

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

export default Collection;
