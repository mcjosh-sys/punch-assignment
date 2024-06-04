type Props = {
  heading: string;
  links: {
    text: string;
    href: string;
  }[];
};

const Links = ({ heading, links }: Props) => {
  return (
    <div className="">
      <span className="uppercase text-md text-muted-foreground">{heading}</span>
      <ul className="">
        {links.map((link, id)=>(
            <li key={id} className="capitalize">
                <a href={link.href}>{link.text}</a>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
