import RecentActivity from "./RecentActivity";
import TopCreators from "./TopCreators";

const RAandTC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr,3fr] gap-[30px]">
      <RecentActivity />
      <TopCreators />
    </div>
  );
};

export default RAandTC;
