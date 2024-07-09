import React from "react";
import User from "./User";

const RecentActivityCard = () => {
  return (
    <div className="flex justify-between bg-bg-comp items-center rounded-[18px] p-5">
      <User username="papaya" text="Purchase by you for 0.05 ETH" />
      <div className="capitalize text-[#68676E] text-sm">12 mins ago</div>
    </div>
  );
};

export default RecentActivityCard;
