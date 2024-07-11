import { useState } from "react";
import Chevron from "../assets/svgs/chevron.svg?react";

interface Props {
  pageTitle: string;
  titleBelow: string;
}

const WelomeTitle = ({ pageTitle, titleBelow }: Props) => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));
  return (
    <div className="capitalize text-txt-clr mt-[50px] mb-10">
      <p className="text-[24px] font-semibold mb-[5px] 2xl:mb-[10px]">
        {pageTitle}
      </p>
      <div
        className={`text-sm 2xl:text-[22px] w-full flex items-center justify-between ${
          width < 340 ? "flex-col items-baseline gap-2" : "flex-row"
        }`}
      >
        <p>{`Welcome ${titleBelow} Page`}</p>
        <div className="flex gap-[10px] items-center">
          <p className="text-[#6C7AA0]">home</p>
          <Chevron className="text-[#65646A] dark:text-white" />
          <p className="text-[#6C7AA0]">{titleBelow}</p>
        </div>
      </div>
    </div>
  );
};

export default WelomeTitle;
