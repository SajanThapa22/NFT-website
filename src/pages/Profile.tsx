import WelomeTitle from "../components/WelomeTitle";
import avatar from "../assets/images/avatar.png";
import Tick from "../assets/svgs/tick.svg?react";
import Lock from "../assets/svgs/lock.svg?react";

const Profile = () => {
  return (
    <div>
      <WelomeTitle pageTitle="collection" titleBelow="collection" />

      <div>
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

          <div className="flex gap-[10px]">
            <div className="rounded-full bg-hariyo flex items-center justify-center">
              <Tick className="text-txt-clr w-[14px] h-[16px]" />
            </div>
            <p className="text-purp text-sm">Verify account</p>
          </div>

          <div className=""></div>

          <div className="flex gap-[10px]">
            <div className="rounded-full bg-hariyo flex items-center justify-center">
              <Lock className="text-txt-clr" />
            </div>
            <p className="text-purp text-sm">
              Two-factor Authentication ( 2FA )
            </p>
          </div>
        </div>

        <div id="following"></div>
      </div>
    </div>
  );
};

export default Profile;
