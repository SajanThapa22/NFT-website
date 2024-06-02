import nft from "../assets/images/NFT.png";

const Card = () => {
  return (
    <div className="p-5 mt-14">
      <div className="w-full rounded-3xl overflow-hidden">
        <img className="w-full" src={nft} alt="" />
      </div>

      <div className="grid gap-3">
        <p className="text-lg text-txt-clr">liquid wave</p>
        <div>
          <div className="text-sm text-txt-clr flex justify-between items-center">
            <p>auction time</p>
            <p>current bid</p>
          </div>
          <div>
            <p className="self-end text-purp">0.05 eth</p>
          </div>
          <div className="flex text-purp justify-between items-center">
            <p>3h 1m 50s</p>
            <p>0.15 eth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
