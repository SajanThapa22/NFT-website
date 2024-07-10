import React from "react";
import WelomeTitle from "../components/WelomeTitle";
import BidCards from "../components/BidsCards";
import monke from "../assets/images/monke.jpeg";
import nft from "../assets/images/NFT.png";

const SavedItems = () => {
  return (
    <div>
      <WelomeTitle pageTitle="saved items" titleBelow="saved" />

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <BidCards img={monke} />
        <BidCards img={monke} />
        <BidCards img={monke} />
        <BidCards img={monke} />
        <BidCards img={monke} />
        <BidCards img={monke} />
        <BidCards img={monke} />
        <BidCards img={monke} />
      </div>
    </div>
  );
};

export default SavedItems;
