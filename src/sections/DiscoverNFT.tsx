import bg from "../assets/images/discover.png";
import nft from "../assets/images/NFT.png";
import avatar from "../assets/images/avatar2.png";
import Button from "../components/Button";

const DiscoverNFT = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row justify-between flex-wrap gap-4 min-h-fit">
      {/* first part */}
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="w-full flex flex-col justify-between p-6 bg-no-repeat bg-center bg-cover bg-origin-padding bg-clip-padding rounded-2xl overflow-hidden flex-1 relative z-30"
      >
        <div className="h-full w-full bg-purp absolute opacity-50 top-0 left-0 z-0"></div>
        <div className="z-10">
          <h1 className="text-2xl font-semibold text-white">
            Discover, Collect, Sell
          </h1>
          <h1 className="text-2xl font-semibold text-white">
            and Create your NFT
          </h1>
        </div>

        <p className="text-sm text-white mt-3 mb-5 ">
          Digital marketplace for crypto collectibles and non fungable tokens
        </p>

        <div className="flex gap-5 flex-wrap">
          <Button text="Explore" styles="bg-purp z-30" />
          <Button text="Create" styles="bg-laal z-30" />
        </div>
      </div>

      {/* second part  */}
      <div className="w-full flex-1 h-fit grid grid-rows-[1sfr,auto] md:grid-cols-2 md:grid-rows-1 lg:grid-cols-[2fr,3fr] lg:grid-rows-1 p-5 bg-bg-comp rounded-3xl gap-4">
        <div className="flex-1 w-full h-full rounded-3xl overflow-hidden bg-no-repeat bg-center bg-cover">
          <img className="object-cover w-full h-full" src={nft} alt="" />
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <div className="flex gap-3 items-center">
            <img src={avatar} alt="" />
            <p className="text-sm font-semibold text-txt-clr">John Abraham</p>
            <div className="self-start pt-5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 self-start"></div>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:justify-between h-full">
            <div>
              <p className="text-lg text-txt-clr font-semibold">Birghten LQ</p>
            </div>
            <div className="flex gap-2 md:justify-between items-center">
              <p className="text-txt-clr text-sm">Auction time</p>
              <div className="flex gap-2 items center">
                <p className="text-txt-clr text-sm">Current Bid :</p>
                <p className="text-purp text-sm">0.05 ETH</p>
              </div>
            </div>
            <div className="flex md:justify-between gap-5">
              <p className="text-f-16px text-light">3h 1m 50s</p>
              <p className="text-f-16px text-light">0.15 ETH</p>
            </div>

            <div className="flex gap-4 flex-wrap lg:flex-nowrap">
              <Button text="Place a Bid" styles="bg-purp flex-1" />
              <Button text="Details" styles="bg-laal flex-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverNFT;
