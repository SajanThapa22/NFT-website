import MetricsCard from "./MetricsCard";
import Artwork from "../assets/svgs/Artwork.svg?react";

const MetricsCardsContainer = () => {
  return (
    <div>
      <MetricsCard styles="bg-purp" text="ArtWorks" amount="25K" percent="86%">
        <Artwork />
      </MetricsCard>
    </div>
  );
};

export default MetricsCardsContainer;
