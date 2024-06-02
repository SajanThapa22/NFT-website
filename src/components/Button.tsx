interface Props {
  text: string;
  styles: string;
}

const Button = ({ text, styles }: Props) => {
  return (
    <div
      className={`flex items-center justify-center px-10 py-3 text-sm text-white text-nowrap font-semibold rounded-lg cursor-pointer transition-all duration-200 ${styles}`}
    >
      {text}
    </div>
  );
};

export default Button;
