interface Props {
  top?: string;
  bottom?: string;
}

const Seperator = ({ top, bottom }: Props) => {
  return (
    <div
      className={`w-full h-[2px] bg-[#d6dbde] mb-[${bottom}] mt-[${top}]`}
    ></div>
  );
};

export default Seperator;
