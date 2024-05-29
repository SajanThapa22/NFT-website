interface Props {
  text: string;
  styles: string;
}

const Button = ({ text, styles }: Props) => {
  return (
    <div
      className={`flex items-center justify-center px-11 py-3 rounded-lg ${styles}`}
    >
      {text}
    </div>
  );
};

export default Button;
