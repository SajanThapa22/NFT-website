import WelomeTitle from "../components/WelomeTitle";
import avatar from "../assets/images/avatar.png";
import Tick from "../assets/svgs/tick.svg?react";
import Lock from "../assets/svgs/lock.svg?react";
import Seperator from "../components/Seperator";
import CreatorCard from "../components/CreatorCard";

const Profile = () => {
  return (
    <div>
      <WelomeTitle pageTitle="collection" titleBelow="collection" />

      <div className="grid grid-cols-[1fr,2fr] gap-[30px]">
        <div id="profile-detail" className="p-5 rounded-[12px]">
          <img
            src={avatar}
            className="w-42 aspect-square rounded-full"
            alt="profile picture"
          />
          <p className="capitalize font-semibold text-[18px] text-txt-clr">
            welcome, john smith
          </p>

          <p className="text-[14px] text-txt-clr mt-[10px] mb-[50px]">
            Looks like you are not verified yet. Verify yourself to use the full
            potential of Xtrader.
          </p>

          <div className="flex gap-[10px] items-center">
            <div className="rounded-full bg-hariyo flex items-center justify-center size-[30px]">
              <Tick className="text-txt-clr w-[14px] h-[16px]" />
            </div>
            <p className="text-purp text-sm">Verify account</p>
          </div>

          <Seperator top="15px" bottom="15px" />

          <div className="flex gap-[10px] items-center">
            <div className="rounded-full bg-purp flex items-center justify-center size-[30px] p-2">
              <Lock className="text-txt-clr" />
            </div>
            <p className="text-purp text-sm">
              Two-factor Authentication ( 2FA )
            </p>
          </div>
        </div>

        <div id="following">
          <p className="text-[18px] font-semibold text-txt-clr mb-5">
            Following
          </p>

          <div className="grid grid-cols-2 gap-y-5 gap-x-[30px]">
            <CreatorCard
              styles="border-none bg-[#dc2626] text-[#fff] font-semibold"
              text="unfollow"
            />
            <CreatorCard
              styles="border-none bg-[#dc2626] text-[#fff] font-semibold"
              text="unfollow"
            />
            <CreatorCard
              styles="border-none bg-[#dc2626] text-[#fff] font-semibold"
              text="unfollow"
            />
            <CreatorCard
              styles="border-none bg-[#dc2626] text-[#fff] font-semibold"
              text="unfollow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
