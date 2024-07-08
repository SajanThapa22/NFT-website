import CreatorCard from "./CreatorCard";

const TopCreators = () => {
  return (
    <div className="mt-10">
      <p className="mb-5 text-[18px] text-txt-clr font-semibold capitalize">
        top creators
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CreatorCard text="follow" />
        <CreatorCard text="follow" />
        <CreatorCard text="follow" />
        <CreatorCard text="follow" />
        <CreatorCard text="follow" />
        <CreatorCard text="follow" />
      </div>
    </div>
  );
};

export default TopCreators;
