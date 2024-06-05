import React from "react";
import TopCreaterCard from "./TopCreaterCard";

const TopCreators = () => {
  return (
    <div className="mt-10">
      <p className="mb-5 text-[18px] text-txt-clr font-semibold capitalize">
        top creators
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TopCreaterCard />
        <TopCreaterCard />
        <TopCreaterCard />
        <TopCreaterCard />
        <TopCreaterCard />
        <TopCreaterCard />
        <TopCreaterCard />
        <TopCreaterCard />
      </div>
    </div>
  );
};

export default TopCreators;
