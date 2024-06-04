import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  className?: string;
  deg?: number;
  style?: React.CSSProperties
};

const Trapzoid = ({ children, style, className, deg = 3 }: Props) => {
  return (
    <div
      style={{
        transform: `skewY(-${deg}deg)`,
        ...style
      }}
      className={cn("w-full", className)}>
      <div
        style={{
          transform: `skewY(${deg}deg)`,
        }}
        className="">
        {children}
      </div>
    </div>
  );
};

export default Trapzoid;
