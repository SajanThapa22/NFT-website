interface Props {
  pageTitle: string;
  titleBelow: string;
}

const WelomeTitle = ({ pageTitle, titleBelow }: Props) => {
  return (
    <div className="capitalize text-txt-clr mb-10">
      <p className="text-[24px] font-semibold mb-[5px] 2xl:mb-[10px]">
        {pageTitle}
      </p>
      <div className="text-sm 2xl:text-[22px] w-full flex justify-between">
        <p>{`Welcome ${titleBelow} Page`}</p>
        <p>Home Bids</p>
      </div>
    </div>
  );
};

export default WelomeTitle;
