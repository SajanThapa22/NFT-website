import cool from "../assets/images/cool.png";
import avatar from "../assets/images/avatar2.png";

const BoughtCard = () => {
  return (
    <div className="p-5 bg-bg-comp grid gap-[10px] rounded-[20px]">
      <div className="relative w-full">
        <img src={cool} className="w-full aspect-[4/3] rounded-[20px]" alt="" />
        <img
          src={avatar}
          className="size-[70px] lg:size-[47px] rounded-full border-[3px] border-[#fff] absolute bottom-0 translate-y-1/2 right-[50px] md:right-[40px]"
          alt=""
        />
      </div>
      <p className="text-[18px] text-txt-clr font-semibold capitalize">
        liquid wave
      </p>
    </div>
  );
};

export default BoughtCard;
