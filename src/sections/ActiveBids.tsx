import Button from "../components/Button";
import ActiveBidCard from "../components/ActiveBidCard";
import Cross from "../assets/svgs/cross.svg?react";

const ActiveBids = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between">
        <p className="font-semibold text-[24px] capitalize text-txt-clr">
          Active Bids
        </p>
        <Button text="Place a Bid" styles="bg-purp text-white" />
      </div>

      <div className="grid grid-cols-[auto,auto,auto,auto,auto,auto,auto] justify-between items-center border-b border-purp py-3 px-7">
        <div className="rounded-[2px] w-3 h-3 border border-[#A5A5A5]"></div>

        <div>
          <p className="capitalize text-txt-clr text-sm font-semibold">
            item list
          </p>
        </div>
        <div>
          <p className="capitalize text-txt-clr text-sm font-semibold">
            open price
          </p>
        </div>
        <div>
          <p className="capitalize text-txt-clr text-sm font-semibold">
            your offer
          </p>
        </div>
        <div>
          <p className="capitalize text-txt-clr text-sm font-semibold">
            recent offer
          </p>
        </div>
        <div>
          <p className="capitalize text-txt-clr text-sm font-semibold">
            time left
          </p>
        </div>
        <div>
          <p className="capitalize text-txt-clr text-sm font-semibold">
            Action
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        <ActiveBidCard />
        <ActiveBidCard />
        <ActiveBidCard />
        <ActiveBidCard />
        <ActiveBidCard />
        <ActiveBidCard />
      </div>

      {/* <table className="text-txt-clr">
        <tr className="text-left">
          <th className="pl-2">
            <div className="rounded-[2px] w-3 h-3 border border-[#A5A5A5]"></div>
          </th>
          <th>item list</th>
          <th>item list</th>
          <th>item list</th>
          <th>item list</th>
          <th>item list</th>
          <th className="flex justify-center">Action</th>
        </tr>

        <tr className="bg-bg-comp p-10">
          <td className="bg-bg-comp py-2 pl-2 rounded-l-[18px]">
            <div className="rounded-[2px] w-3 h-3 border border-[#A5A5A5]"></div>
          </td>
          <td className="bg-bg-comp py-2">sajan thapa</td>
          <td className="bg-bg-comp py-2">sajan thapa</td>
          <td className="bg-bg-comp py-2">sajan thapa</td>
          <td className="bg-bg-comp py-2">sajan thapa</td>
          <td className="bg-bg-comp py-2">sajan thapa</td>
          <td className="bg-bg-comp py-2 rounded-r-[18px]">
            <div className="flex justify-center">
              <Cross className="text-txt-clr w-[16px] h-[16px]" />
            </div>
          </td>
        </tr>
      </table> */}
    </div>
  );
};

export default ActiveBids;
