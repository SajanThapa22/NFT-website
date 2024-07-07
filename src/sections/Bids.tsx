import MetricsCard from "../components/MetricsCard";
import WelomeTitle from "../components/WelomeTitle";
import Artwork from "../assets/svgs/Artwork.svg?react";

const Bids = () => {
  return (
    <div>
      <WelomeTitle pageTitle="Bids" titleBelow="Bids" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <MetricsCard styles="bg-purp" text="ArtWorks" amount="19K">
          <Artwork />
        </MetricsCard>

        <MetricsCard styles="bg-hariyo" text="Auction" amount="82K">
          <Artwork />
        </MetricsCard>
        <MetricsCard styles="bg-[#F9D62C]" text="Creators" amount="200">
          <Artwork />
        </MetricsCard>
        <MetricsCard styles="bg-[#DC3546]" text="ArtWorks" amount="25K">
          <Artwork />
        </MetricsCard>
      </div>
    </div>
  );
};

export default Bids;
