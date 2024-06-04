import SkillIcon from "@assets/award.svg";
import CategoryIcon from "@assets/category.svg";
import Cinema4dIcon from "@assets/cinema4d.svg";
import DotnetIcon from "@assets/dontnet.svg";
import DataScienceIcon from "@assets/ds.svg";
import IllustratorIcon from "@assets/illustrator.svg";
import MagentoIcon from "@assets/magento.svg";
import PhotoshopIcon from "@assets/photoshop.svg";
import ProfileIcon from "@assets/profile.svg";
import ShopifyIcon from "@assets/shopify.svg";
import UnrealEngineIcon from "@assets/unrealengine.svg";
import UxIcon from "@assets/ux.svg";
import WebflowIcon from "@assets/webflow.svg";
import ZwiltIcon from "@assets/zwilt_icon.svg";
import SectionWrapper from "@components/SectionWrapper";
import Button from "../Button";
import Trapzoid from "../Trapzoid";
import Details from "./Details";
import Features from "./Features";

const SectionTwo = () => {
  return (
    <Trapzoid deg={3} className="bg-[#EDEFFF] py-32 -mt-8">
      <SectionWrapper>
        <div className="w-full flex justify-center text-center mt-20">
          <p className="text-heading leading-tight font-bold max-w-[65rem] text-balance">
            Your one-stop marketplace for finding the talent your business
            needs.
          </p>
        </div>
        <div className="w-full flex flex-col gap-y-4 md:grid md:grid-cols-2 px-16 mt-8">
          <Features
            title="Find Dev and IT professionals to scale your business."
            content={[
              { icon: SkillIcon, text: "989 Skills" },
              { icon: CategoryIcon, text: "45 Sub-Categories" },
              { icon: ProfileIcon, text: "1011 Profiles" },
            ]}
          />

          <Details
            title="IT & Development"
            content={[
              { icon: ShopifyIcon, text: "Shopify, Developer" },
              { icon: MagentoIcon, text: "Magento, Developer" },
              { icon: DataScienceIcon, text: "Data, Scientist" },
              { icon: WebflowIcon, text: "Webflow, Developer" },
              { icon: DotnetIcon, text: "Dot Net, Developer" },
              { icon: ZwiltIcon },
            ]}
          />

          <Features
            title="Explore Creative individuals with a keen eye for detail.  "
            content={[
              { icon: SkillIcon, text: "989 Skills" },
              { icon: CategoryIcon, text: "45 Sub-Categories" },
              { icon: ProfileIcon, text: "1011 Profiles" },
            ]}
          />

          <Details
            title="Design & Creative"
            content={[
              { icon: ZwiltIcon, flip: true },
              { icon: UxIcon, text: "Ux, Designer" },
              { icon: PhotoshopIcon, text: "Graphics, Designer" },
              { icon: IllustratorIcon, text: "Illustrator, Artist" },
              { icon: UnrealEngineIcon, text: "Unreal, Engine" },
              { icon: Cinema4dIcon, text: "Cinema, 4D" },
            ]}
          />

          <span className="justify-self-start">
            <Button size={25} text="Explore More" className="py-3 rounded-[1.8rem] text-xl" />
          </span>

          <p className="md:self-center font-semibold texl-xl">30 more <span className="font-normal">to explore</span></p>
        </div>
      </SectionWrapper>
    </Trapzoid>
  );
};

export default SectionTwo;
