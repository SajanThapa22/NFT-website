import WelomeTitle from "../components/WelomeTitle";
import avatar from "../assets/images/avatar.png";
import Tick from "../assets/svgs/tick.svg?react";
import Lock from "../assets/svgs/lock.svg?react";
import Seperator from "../components/Seperator";
import CreatorCard from "../components/CreatorCard";
import BoughtCard from "../components/BoughtCard";

const Profile = () => {
  return (
    <div>
      <WelomeTitle pageTitle="profile" titleBelow="profile" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-[30px]">
        <div id="profile-detail" className="p-5 rounded-[12px] bg-bg-comp">
          <img
            src={avatar}
            className="w-42 aspect-square rounded-full"
            alt="profile picture"
          />
          <p className="capitalize font-semibold text-[18px] text-txt-clr mt-3">
            welcome, john smith
          </p>

          <p className="text-[14px] text-txt-clr mt-[10px] mb-[50px]">
            Looks like you are not verified yet. Verify yourself to use the full
            potential of Xtrader.
          </p>

          <div className="flex gap-[10px] items-center">
            <div className="rounded-full bg-hariyo flex items-center justify-center size-[30px]">
              <Tick className="text-white w-[14px] h-[16px]" />
            </div>
            <p className="text-purp text-sm">Verify account</p>
          </div>

          <Seperator />

          <div className="flex gap-[10px] items-center">
            <div className="rounded-full bg-purp flex items-center justify-center size-[30px]">
              <Lock className="text-white" />
            </div>
            <p className="text-purp text-sm">
              Two-factor Authentication ( 2FA )
            </p>
          </div>
        </div>

        <div id="following" className="self-end">
          <p className="text-[18px] font-semibold text-txt-clr mb-5">
            Following
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-[30px]">
            <CreatorCard
              styles="border-none bg-[#dc2626] text-white font-semibold"
              text="unfollow"
            />
            <CreatorCard
              styles="border-none bg-[#dc2626] text-white font-semibold"
              text="unfollow"
            />
            <CreatorCard
              styles="border-none bg-[#dc2626] text-white font-semibold"
              text="unfollow"
            />
            <CreatorCard
              styles="border-none bg-[#dc2626] text-white font-semibold"
              text="unfollow"
            />
          </div>
        </div>
      </div>

      <div id="my-bought" className="mt-[50px]">
        <p className="text-[18px] text-txt-clr font-semibold capitalize mb-[30px]">
          my bought
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
          <BoughtCard />
          <BoughtCard />
          <BoughtCard />
          <BoughtCard />
          <BoughtCard />
          <BoughtCard />
          <BoughtCard />
          <BoughtCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
