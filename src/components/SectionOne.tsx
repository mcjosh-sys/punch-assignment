import SectionWrapper from "./SectionWrapper";
import iconOne from "@assets/section_1_icon.svg";
import iconTwo from "@assets/img2.svg";
import iconThree from "@assets/img3.svg";
import zwiltIcon from "@assets/zwilt_icon.svg";
import { Input } from "./ui/input";
import Tab from "./Tab";

const SectionOne = () => {
  return (
    <SectionWrapper>
      <div className="mt-[144px] flex flex-col items-center overflow-hidden">
        <h1 className="text-heading leading-tight text-center font-bold md:max-w-[44rem] mx-1">
          Finding the right fit
          <span className="relative inline-flex justify-center items-center px-8">
            <img
              src={iconThree}
              className="absolute size-10 inline -top-7  md:-top-10 animate-image-right"
              loading="lazy"
              decoding="async"
              alt="icon"
            />
            <img
              src={iconTwo}
              className="absolute size-10 inline -top-7  md:-top-10"
              loading="lazy"
              decoding="async"
              alt="icon"
            />
            <img
              src={iconOne}
              className="absolute  inline -top-7  md:-top-10 animate-image-left"
              loading="lazy"
              decoding="async"
              alt="icon"
            />
          </span>
          has
          <br /> never been easier.
        </h1>

        <p className="text-center md:text-xl text-balance max-w-[582px] mt-2">
          With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again.
        </p>
        {/* Search Box */}
        <div className="border flex items-center h-[74px] md:w-[570px] rounded-lg mt-[30px] mx-4">
          <span className="font-semibold ml-6">Looking for</span>
          <Input
            type="text"
            className="text-gray-400 text-[0.94rem] pl-1 ring-0 ring-offset-transparent flex-1 h-full focus-visible:ring-0 focus-visible:ring-offset-0 border-none"
          />
          <div className="bg-secondary h-full w-[74px] flex items-center justify-center rounded-lg cursor-pointer">
            <img
              src={zwiltIcon}
              className="size-6"
              loading="lazy"
              decoding="async"
              alt="icon"
            />
          </div>
        </div>

        <Tab />
      </div>
    </SectionWrapper>
  );
};

export default SectionOne;
