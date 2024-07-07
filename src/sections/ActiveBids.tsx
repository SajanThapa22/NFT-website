import Button from "../components/Button";
import ActiveBidCard from "../components/ActiveBidCard";
import "../css/scrollbar.css";

const ActiveBids = () => {
  return (
    <div className="w-full flex flex-col gap-[50px] text-nowrap">
      <div className="flex justify-between overflow-hidden">
        <p className="font-semibold text-[24px] capitalize text-txt-clr">
          Active Bids
        </p>
        <Button text="Place a Bid" styles="bg-purp text-white" />
      </div>

      <div id="active-bids-list">
        <div className="grid gap-[30px] min-w-[1120px]">
          <div className="grid grid-cols-[1fr,4fr,2fr,2fr,3fr,2fr,1fr] gap-10 justify-between border-b border-[#6C7AA0] py-3 px-3">
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
            <div className="justify-self-center">
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
        </div>
      </div>
    </div>
  );
};

export default ActiveBids;
