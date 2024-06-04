type Props = {
  title: string;
  content: {
    icon?: string;
    text: string;
  }[];
};

const Features = ({ title, content }: Props) => {
  return (
    <div className="max-w-[23.75rem] md:self-center">
      <p className="text-2xl font-medium">{title}</p>
      <div className="grid grid-cols-2 mt-4 gap-y-2">
        {content.map((item, id) => (
          <span key={id} className="flex gap-2 items-center">
            <img src={item.icon} alt="skills icon" className="size-5" />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Features;
