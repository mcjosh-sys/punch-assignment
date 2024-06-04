import { useRef } from "react";
import { RiVideoFill } from "react-icons/ri";

type Props = {
  items: {
    step: string;
    content: string;
  }[];
};

const Accordion = ({ items }: Props) => {
  const ref = useRef<(HTMLDivElement | null)[]>([]);
  const handleClick = (id: number) => {
    if (ref.current[id]?.classList.contains("active")) {
      ref.current[id]?.classList.remove("active");
      return;
    }
    ref.current.forEach((el) => {
      el?.classList.remove("active");
    });
    ref.current[id]?.classList.add("active");
  };
  return (
    <div className="h-full mt-8 accordion">
      {items.map((item, id) => (
        <div
          key={id}
          ref={(el) => ref.current.push(el)}
          onClick={() => handleClick(id)}
          className="border p-4 mb-1 accordion-item cursor-pointer max-h-[163px]">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-full bg-[#f6f6f6] flex items-center justify-center w-fit accordion-icon">
              <RiVideoFill size={24} />
            </div>
            <p className="font-semibold">
              Step {id + 1}:<span className="font-normal">{item.step}</span>
            </p>
          </div>
          <div className="h-0 max-h-40 overflow-hidden accordion-content">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
