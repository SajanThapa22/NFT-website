interface Props {
  text: string;
  styles: string;
}

const Button = ({ text, styles }: Props) => {
  return (
    <div
      className={`flex items-center justify-center px-10 py-3 text-sm text-white font-semibold rounded-lg ${styles}`}
    >
      {text}
    </div>
  );
};

export default Button;
