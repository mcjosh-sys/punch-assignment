type Props = {
  heading: string;
  links: {
    text: string;
    href: string;
  }[];
};

const Links = ({ heading, links }: Props) => {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <span className="uppercase text-md text-muted-foreground">{heading}</span>
      <ul className="footer__links flex flex-col gap-4">
        {links.map((link, id)=>(
            <li key={id} className="capitalize  block">
                <a href={link.href}>{link.text}</a>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
