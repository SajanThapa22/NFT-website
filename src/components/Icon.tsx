import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Icon = ({ children }: Props) => {
  return <div className="w-6 aspect-square">{children}</div>;
};

export default Icon;
