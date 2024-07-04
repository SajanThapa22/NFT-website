import user from "../assets/images/avatar2.png";
import cool from "../assets/images/cool.png";
import Cross from "../assets/svgs/cross.svg?react";

const ActiveBidCard = () => {
  return (
    <div className="grid grid-cols-[1fr,4fr,2fr,2fr,3fr,2fr,1fr] gap-x-10 items-center bg-bg-comp py-2 px-3 rounded-[18px]">
      <div className="rounded-[2px] w-3 h-3 border border-[#A5A5A5]"></div>

      <div className="flex gap-2 items-center">
        <div className="w-[65px] h-[44px] rounded-[19px] overflow-hidden">
          <img src={cool} className="w-full object-cover" alt="" />
        </div>

        <div className="flex flex-col gap-1 leading-none justify-self-start">
          <p className="text-txt-clr text-[16px] font-semibold capitalize">
            cute cube cool
          </p>
          <p className="text-txt-clr text-sm capitalize">John Abhraham</p>
        </div>
      </div>

      <div>
        <p className="uppercase text-txt-clr text-sm">0.0025 eth</p>
      </div>
      <div>
        <p className="uppercase text-txt-clr text-sm">0.0025 eth</p>
      </div>
      <div className="flex items-center gap-[10px]">
        <img className="w-11 aspect-square rounded-full" src={user} alt="" />
        <p className="uppercase text-txt-clr text-sm">0.0025 eth</p>
      </div>

      <div>
        <p className="capitalize text-txt-clr text-sm">2 Hours 1 min 30s</p>
      </div>

      <div className="justify-self-center">
        <Cross className="text-txt-clr w-[16px] h-[16px]" />
      </div>
    </div>
  );
};

export default ActiveBidCard;
