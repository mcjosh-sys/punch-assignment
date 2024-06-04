import Button from "@components/Button";
import PurpleBullet from "@assets/bullet_purple.svg";
import OrangeBullet from "@assets/bullet_orange.svg";
import GreenBullet from "@assets/bullet_green.svg";

type Props = {
  title: string;
  list: string[];
  accent: "purple" | "orange" | "green";
  btnText: string;
  children?: React.ReactNode;
};

const Card = ({ title, list, btnText, accent, children }: Props) => {
  const bulletColor = {
    purple: PurpleBullet,
    green: GreenBullet,
    orange: OrangeBullet,
  };
  return (
    <div className=" h-[35rem] max-w-7xl bg-background shadow-3xl rounded-lg p-[3.625rem] shrink-0 basis-auto grow-0 flex items-center">
      <div className="relative flex flex-col">
        <h1 className="text-heading font-bold leading-tight">
          {title.split(",")[0]} <br /> {title.split(",")[1]}
        </h1>
        <ul
          style={{
            listStyleImage: `url(${bulletColor[accent]})`,
          }}
          className="md:text-xl my-4 pl-7">
          {list.map((item, id) => (
            <li key={id} className=" whitespace-nowrap">
              <span className="ml-2">{item}</span>
            </li>
          ))}
        </ul>
        <Button
          size={25}
          text={btnText}
          className="py-2 rounded-[1.8rem] text-xl mt-6"
        />
      </div>
      <div className="hidden md:block">{children}</div>
    </div>
  );
};

export default Card;
