import RecentActivityCard from "./RecentActivityCard";

const RecentActivity = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <p className="mb-5 text-[18px] text-txt-clr font-semibold">
          Recent Activity
        </p>
        <p className="mb-5 text-[14px] text-purp">See more</p>
      </div>
      <div className="flex flex-col gap-4">
        <RecentActivityCard />
        <RecentActivityCard />
        <RecentActivityCard />
      </div>
    </div>
  );
};

export default RecentActivity;
