import ZwiltLightIcon from "@assets/zwilt_light.svg";
import ZwiltIcon from "@assets/zwilt_icon.svg";
import ZwiltPurpleIcon from "@assets/zwilt_light.svg";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "purple" | "dark" | "light";
  flip?: "180" | "90" | "0";
  className?: string;
  size?: number;
  text?: string;
};

const Button = ({
  variant = "dark",
  flip = "0",
  className,
  size,
  text,
}: Props) => {
  const variants = {
    purple: {
      color: "#FFFFFF",
      icon: ZwiltPurpleIcon,
    },
    dark: {
      color: "#000000",
      icon: ZwiltLightIcon,
    },
    light: {
      color: "#FFFFFF",
      icon: ZwiltIcon,
    },
  };
  return (
    <a
      href="#"
      style={{
        backgroundColor: variants[variant].color,
      }}
      className={cn(
        "relative flex items-center rounded-[1.8rem] gap-x-2 group w-fit  p-6",
        className
      )}>
      <span
        style={{
          rotate: `${flip}deg`,
        }}
        className={cn("flex items-center justify-between z-10")}>
        <p className="py-2 font-medium text-white  group-hover:mr-4 overflow-hidden w-0 whitespace-nowrap group-hover:animate-button-expand">
          {text}
        </p>
        <img
          style={{ height: `${size}px`, width: `${size}px` }}
          src={variants[variant].icon}
          alt="icon"
        />
      </span>
      <p className="absolute left-[120%] font-medium whitespace-nowrap  group-hover:animate-button-shrink overflow-hidden -z-1">
        {text}
      </p>
    </a>
  );
};

export default Button;
