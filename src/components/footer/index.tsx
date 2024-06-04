import SectionWrapper from "@components/SectionWrapper";
import Trapzoid from "@components/Trapzoid";
import Button from "@components/Button";
import Logo from "@assets/logo.svg";
import Links from "./Links";

const Footer = () => {
  return (
    <>
      <Trapzoid className="bg-[#0C0C0C] py-32 -z-10" />
      <div className="bg-[#0C0C0C] -mt-12 text-white">
        <SectionWrapper className="relative mb-36 -mt-48">
          <Trapzoid className=" bg-primary pt-24 pb-12">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-heading font-semibold text-center leading-tight">
                Need a job done, and done <br /> well? Get started
              </h2>
              <Button
                size={25}
                className="py-6 rounded-[1.8rem] my-4"
                flip="90"
              />
            </div>
          </Trapzoid>
          <div className="grid md:grid-cols-2 mt-36 mx-8">
            {/* Left */}
            <div className="flex flex-col w-fit gap-8 mb-8">
              <img src={Logo} className="w-32" alt="logo" />
              <p className="text-md max-w-[17.75rem]">
                We take complex hiring processes - and simplify them. C
                onnecting you to the world&apos;s highly qualified talent pool.
              </p>
              <p className="text-md text-muted-foreground">
                LINKS AND REDIRECTS
              </p>
              <div className="flex gap-2 text-md -mt-3">
                <button className="w-[10rem] bg-[#292B34] py-3 rounded-lg hover:scale-105">
                  Hire now
                </button>
                <button className="w-[10rem] bg-[#292B34] py-3 rounded-lg hover:scale-105">
                  Apply now
                </button>
              </div>
            </div>
            {/* Right */}
            <div>
              <h2 className="text-heading font-semibold leading-tight">
                Connecting the right people to the right businesses.
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 mt-14 ">
                <Links
                  heading="platform"
                  links={[
                    { text: "find work", href: "#" },
                    { text: "find talent", href: "#" },
                    { text: "categories", href: "#" },
                    { text: "about us", href: "#" },
                  ]}
                />
                <Links
                  heading="categories"
                  links={[
                    { text: "data science", href: "#" },
                    { text: "IT & networking", href: "#" },
                    { text: "web & mobile", href: "#" },
                  ]}
                />
                <Links
                  heading="help"
                  links={[
                    { text: "FAQ'S", href: "#" },
                    { text: "contact us", href: "#" },
                  ]}
                />
                <Links
                  heading="get in touch @"
                  links={[
                    { text: "instagram", href: "#" },
                    { text: "LinkedIn", href: "#" },
                    { text: "Twitter", href: "#" },
                  ]}
                />
              </div>
            </div>
          </div>
        </SectionWrapper>
        <div className="border-t border-muted-foreground py-2">
          <SectionWrapper>
            <div className="flex justify-between mx-8">
              <p>All rights reserved by Zwilt</p>
              <span className="flex gap-8 text-muted-foreground underline items-center">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Condition</a>
              </span>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </>
  );
};

export default Footer;
