import React from "react";
import RecentActivityCard from "./RecentActivityCard";

const RecentActivity = () => {
  return (
    <div className="mt-10">
      <p className="mb-5 text-[18px] text-txt-clr font-semibold">
        Recent Activities
      </p>

      <div className="flex flex-col gap-4">
        <RecentActivityCard />
        <RecentActivityCard />
        <RecentActivityCard />
        <RecentActivityCard />
      </div>
    </div>
  );
};

export default RecentActivity;
