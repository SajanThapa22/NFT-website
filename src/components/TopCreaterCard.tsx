import User from "./User";

const TopCreaterCard = () => {
  return (
    <div className="flex justify-between bg-bg-comp rounded-[18px]">
      <User />
      <div className="border rounded-[9px] border-purp capitalize">follow</div>
    </div>
  );
};

export default TopCreaterCard;
