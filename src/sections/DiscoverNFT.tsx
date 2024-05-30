import bg from "../assets/images/discover.png";
import nft from "../assets/images/NFT.png";
import avatar from "../assets/images/avatar2.png";
import Button from "../components/Button";

const DiscoverNFT = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {/* first part */}

      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="p-5 bg-no-repeat bg-center bg-cover bg-origin-padding bg-clip-padding rounded-2xl overflow-hidden flex-1"
      >
        <div>
          <h1 className="text-2xl font-semibold text-white">
            Discover, Collect, Sell
          </h1>
          <h1 className="text-2xl font-semibold text-white">
            and Create your NFT
          </h1>
        </div>

        <p className="text-sm text-white mt-3 mb-5">
          Digital marketplace for crypto collectibles and non fungable tokens
        </p>

        <div className="flex gap-5">
          <Button text="Explore" styles="bg-purp" />
          <Button text="Create" styles="bg-laal" />
        </div>
      </div>

      {/* second part  */}
      <div className="flex-1 flex p-5 bg-bg-comp rounded-3xl gap-4">
        <div
          style={{
            backgroundImage: `url(${nft})`,
          }}
          className="flex-1 rounded-2xl overflow-hidden bg-no-repeat bg-center bg-cover"
        ></div>

        <div className="flex-1 flex flex-col justify-between">
          <div className="flex gap-3 items-center">
            <img src={avatar} alt="" />
            <p className="text-sm font-semibold text-txt-clr">John Abraham</p>
            <div className="self-start pt-5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 self-start"></div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-lg text-txt-clr font-semibold">Birghten LQ</p>
            </div>
            <div className="flex gap-2 justify-between items-center">
              <p className="text-txt-clr text-sm">Auction time</p>
              <div className="flex gap-2 items center">
                <p className="text-txt-clr text-sm">Current Bid :</p>
                <p className="text-purp text-sm">0.05 ETH</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-f-16px text-light">3h 1m 50s</p>
              <p className="text-f-16px text-light">0.15 ETH</p>
            </div>

            <div className="flex gap-4">
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
