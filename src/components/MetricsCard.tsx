import { ReactNode } from "react";

interface Props {
  styles: string;
  amount: string;
  text: string;
  percent?: string;
  children: ReactNode;
}

const MetricsCard = ({ styles, children, amount, text, percent }: Props) => {
  return (
    <div className="bg-bg-comp flex rounded-[18px] gap-[25px] p-5 relative">
      <p className="text-green-500 absolute top-5 right-5">{percent}</p>

      <div
        className={`h-[55px] aspect-square rounded-full flex items-center justify-center ${styles}`}
      >
        {children}
      </div>

      <div className="flex flex-col justify-between">
        <p className="text-txt-clr text-[24px] font-semibold">{amount}</p>
        <p className="text-[#68676E]">{text}</p>
      </div>
    </div>
  );
};

export default MetricsCard;
