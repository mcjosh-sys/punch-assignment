import { cn } from "@/lib/utils";
import Icon from "../Icon";

type Props = {
  title: string;
  content: {
    icon?: string;
    text?: string;
    flip?: boolean;
  }[];
};

const Details = ({ title, content }: Props) => {
  return (
    <div className="bg-white rounded p-4 w-full ">
      {title}
      <div className="flex flex-wrap justify-center text-center mt-2 gap-x-3">
        {content.map((item, id) => (
          <span key={id} className="flex flex-col items-center">
            
              {item.text ? (
                <Icon icon={item.icon} />
              ) : (
                <span className="flex items-center justify-center bg-[#f6f6f6] rounded-lg w-fit p-6">
                <img
                  src={item.icon}
                  alt="icon"
                  className={cn("size-5", {
                    "rotate-[180deg]": item.flip,
                  })}
                />
                </span>
              )}
            {item.text && (
              <p className="text-sm">
                {item.text.split(",")[0]}
                <br />
                {item.text.split(",")[1]}
              </p>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Details;
