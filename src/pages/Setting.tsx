import Button from "../components/Button";
import User from "../components/User";
import WelomeTitle from "../components/WelomeTitle";

const Setting = () => {
  return (
    <div className="text-txt-clr">
      <WelomeTitle pageTitle="setting" titleBelow="setting" />

      <div className="flex text-sm text-txt-clr gap-x-5 gap-y-2 flex-wrap">
        <p>Profile</p>
        <p>Application</p>
        <p>Security</p>
        <p>Activity</p>
        <p>Payment Method</p>
        <p>API</p>
      </div>

      <div
        id="user-profile-grid"
        className="mt-[50px] grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-11"
      >
        <div>
          <p className="mb-2">User profile</p>
          <div className="bg-bg-comp rounded-[9px] p-5 grid gap-5">
            <div className="grid gap-[10px]">
              <p className="capitalize">full name</p>
              <div className="w-full h-10 rounded-[8px] flex items-center bg-white dark:bg-[#131129] border border=[#65646a] dark:border-none px-[10px]">
                <input
                  type="text"
                  className="w-full outline-none border-none bg-transparent dark:text-[#fff]"
                />
              </div>
            </div>

            <User
              text="Welcome setting page"
              username="John Smith"
              imgSize="w-[55px]"
            />

            <Button styles="bg-purp px-[24px] py-[11px] w-fit" text="Save" />
          </div>
        </div>

        <div>
          <p className="mb-2">User profile</p>
          <div className="bg-bg-comp rounded-[9px] p-5">
            <div className="grid gap-[10px]">
              <p className="capitalize">email</p>
              <div className="w-full h-10 rounded-[8px] flex items-center bg-white dark:bg-[#131129] border border=[#65646a] dark:border-none px-[10px]">
                <input
                  type="text"
                  className="w-full outline-none border-none bg-transparent dark:text-[#fff]"
                />
              </div>
            </div>

            <div className="grid gap-[10px] mt-[10px]">
              <p className="capitalize">password</p>
              <div className="w-full h-10 rounded-[8px] flex items-center bg-white dark:bg-[#131129] border border=[#65646a] dark:border-none px-[10px]">
                <input
                  type="password"
                  className="w-full outline-none border-none bg-transparent dark:text-[#fff]"
                />
              </div>
            </div>

            <Button
              styles="bg-purp px-[24px] py-[10px] mt-[15px] w-fit"
              text="Save"
            />
          </div>
        </div>
      </div>

      <div id="personal=information" className="mt-[50px] grid gap-7">
        <p className="capitalize font-semibold text-txt-clr">
          personal information
        </p>

        <div className="bg-bg-comp rounded-[12px] p-5">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-[15px]">
            <div className="grid gap-[10px]">
              <p className="capitalize">email</p>
              <div className="w-full h-10 rounded-[8px] flex items-center bg-white dark:bg-[#131129] border border=[#65646a] dark:border-none px-[10px]">
                <input
                  type="text"
                  className="w-full outline-none border-none bg-transparent dark:text-[#fff]"
                />
              </div>
            </div>

            <div className="grid gap-[10px]">
              <p className="capitalize">user name</p>
              <div className="w-full h-10 rounded-[8px] flex items-center bg-white dark:bg-[#131129] border border=[#65646a] dark:border-none px-[10px]">
                <input
                  type="text"
                  className="w-full outline-none border-none bg-transparent dark:text-[#fff]"
                />
              </div>
            </div>

            <div className="grid gap-[10px]">
              <p className="capitalize">address</p>
              <div className="w-full h-10 rounded-[8px] flex items-center bg-white dark:bg-[#131129] border border=[#65646a] dark:border-none px-[10px]">
                <input
                  type="text"
                  className="w-full outline-none border-none bg-transparent dark:text-[#fff]"
                />
              </div>
            </div>

            <div className="grid gap-[10px]">
              <p className="capitalize">country</p>
              <div className="w-full h-10 rounded-[8px] flex items-center bg-white dark:bg-[#131129] border border=[#65646a] dark:border-none px-[10px]">
                <input
                  type="text"
                  className="w-full outline-none border-none bg-transparent dark:text-[#fff]"
                />
              </div>
            </div>

            <div className="grid gap-[10px]">
              <p className="capitalize">birth date</p>
              <div className="w-full h-10 rounded-[8px] flex items-center bg-white dark:bg-[#131129] border border=[#65646a] dark:border-none px-[10px]">
                <input
                  type="text"
                  className="w-full outline-none border-none bg-transparent dark:text-[#fff]"
                />
              </div>
            </div>

            <div className="grid gap-[10px]">
              <p className="capitalize">occupation</p>
              <div className="w-full h-10 rounded-[8px] flex items-center bg-white dark:bg-[#131129] border border=[#65646a] dark:border-none px-[10px]">
                <input
                  type="text"
                  className="w-full outline-none border-none bg-transparent dark:text-[#fff]"
                />
              </div>
            </div>
          </div>

          <Button
            styles="bg-purp px-[24px] py-[10px] mt-[15px] w-fit"
            text="Save"
          />
        </div>
      </div>
    </div>
  );
};

export default Setting;
