import React from "react";
import Button from "../components/Button";
import ActiveBidCard from "../components/ActiveBidCard";

const ActiveBids = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between">
        <p className="font-semibold text-[24px] capitalize text-txt-clr">
          Active Bids
        </p>
        <Button text="Place a Bid" styles="bg-purp text-white" />
      </div>

      <div className="grid grid-cols-7 justify-between items-center border-b border-purp py-3 pr-7 pl-3">
        <div className="rounded-[2px] w-3 h-3 border border-[#A5A5A5]"></div>

        <div>
          <p className="capitalize text-txt-clr text-sm font-semibold">
            item list
          </p>
        </div>
        <div>
          <p className="capitalize text-txt-clr text-sm font-semibold">
            open price
          </p>
        </div>
        <div>
          <p className="capitalize text-txt-clr text-sm font-semibold">
            your offer
          </p>
        </div>
        <div>
          <p className="capitalize text-txt-clr text-sm font-semibold">
            recent offer
          </p>
        </div>
        <div>
          <p className="capitalize text-txt-clr text-sm font-semibold">
            time left
          </p>
        </div>
        <div>
          <p className="capitalize text-txt-clr text-sm font-semibold">
            Action
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        <ActiveBidCard />
        <ActiveBidCard />
        <ActiveBidCard />
        <ActiveBidCard />
        <ActiveBidCard />
        <ActiveBidCard />
      </div>
    </div>
  );
};

export default ActiveBids;
