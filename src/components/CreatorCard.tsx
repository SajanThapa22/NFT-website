import User from "./User";

interface Props {
  styles?: string;
  text?: string;
}

const CreatorCard = ({ styles, text }: Props) => {
  return (
    <div className="flex justify-between bg-bg-comp items-center rounded-[18px] p-5">
      <User username="papaya" text="60 items" />
      <div
        className={`border rounded-[9px] text-sm text-txt-clr border-purp capitalize px-4 py-1 ${styles}`}
      >
        {text}
      </div>
    </div>
  );
};

export default CreatorCard;
