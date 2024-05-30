import bg from "..//assets/images/discover.png";
import Button from "../components/Button";

const DiscoverNFT = () => {
  return (
    <div className="p-5 flex">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-no-repeat bg-center bg-cover rounded-"
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
      <div></div>
    </div>
  );
};

export default DiscoverNFT;
