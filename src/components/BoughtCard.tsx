import cosmics from "../assets/images/cosmics.webp";
import avatar from "../assets/images/avatar2.png";

const BoughtCard = () => {
  return (
    <div className="p-5 bg-bg-comp grid gap-[10px] rounded-[20px]">
      <div className="relative">
        <div className="rounded-[19px] relative w-full overflow-hidden aspect-[5/4] ">
          <img
            src={cosmics}
            className="size-full object-cover hover:scale-110 transition-all duration-300"
            alt=""
          />
        </div>
        <img
          src={avatar}
          className="z-50 size-[70px] lg:size-[47px] rounded-full border-[3px] border-[#fff] absolute bottom-0 translate-y-1/2 right-[50px] md:right-[40px]"
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
