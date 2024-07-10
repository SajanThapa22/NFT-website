import Button from "./Button";

interface Props {
  img: string;
}

const BidCards = ({ img }: Props) => {
  return (
    <div className="flex flex-col p-5 gap-5 bg-bg-comp rounded-3xl">
      <div className="w-full aspect-[5/4] rounded-2xl overflow-hidden">
        <img
          className="size-full object-cover hover:scale-110 transition-all duration-300"
          src={img}
          alt=""
        />
      </div>

      <div className="grid gap-y-3">
        <p className="text-lg font-semibold text-txt-clr capitalize">
          liquid wave
        </p>
        <div className="grid gap-y-2">
          <div className="text-sm text-txt-clr flex justify-between items-start">
            <p>Auction time</p>
            <div className="grid gap-3 text-end">
              <p className="capitalize">current bid</p>
              <p className="self-end text-purp uppercase">0.05 eth</p>
            </div>
          </div>
          <div className="text-[16px] flex text-purp justify-between items-center">
            <p>3h 1m 50s</p>
            <p className="uppercase">0.15 eth</p>
          </div>
        </div>
      </div>
      <Button
        text="Place a Bid"
        styles="bg-purp py-[10px] hover:bg-[#3f2996]"
      />
    </div>
  );
};

export default BidCards;
