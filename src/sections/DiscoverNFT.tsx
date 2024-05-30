import bg from "../assets/images/discover.png";
import nft from "../assets/images/NFT.png";
import avatar from "../assets/images/avatar2.png";
import Button from "../components/Button";

const DiscoverNFT = () => {
  return (
    <div className="flex gap-4">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="p-5 bg-no-repeat bg-center bg-cover bg-origin-padding bg-clip-padding rounded-3xl overflow-hidden flex-1"
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
      <div className="flex-1">
        <div
          style={{
            backgroundImage: `url(${nft})`,
          }}
          className="w-full rounded-3xl overflow-hidden bg-no-repeat bg-center bg-cover"
        ></div>

        <div>
          <div>
            <img src={avatar} alt="" />
            <p>John Abraham</p>
            <div className="w-1.5 aspect-square rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverNFT;
