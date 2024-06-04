import User from "./User";

const TopCreaterCard = () => {
  return (
    <div className="flex justify-between bg-bg-comp items-center rounded-[18px] p-5">
      <User text="60 items" />
      <div className="border rounded-[9px] text-sm text-txt-clr border-purp capitalize px-4 py-1">
        follow
      </div>
    </div>
  );
};

export default TopCreaterCard;
