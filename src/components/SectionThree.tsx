import SectionWrapper from "./SectionWrapper";
import Trapzoid from "./Trapzoid";
import QuoteIcon from "@assets/quote.svg";
import Img from "@assets/img2.svg";
import GroveIcon from "@assets/groove.svg";
import GrooveLight from "@assets/groove_light.svg";
import Button from "./Button";

const SectionThree = () => {
  return (
    <Trapzoid deg={3} className="bg-[#202229] py-32 overflow-hidden relative">
      <div className="absolute right-6 -top-[180px]">
        <img src={QuoteIcon} alt="quote" className="size-44" />
      </div>
      <SectionWrapper>
        <div className="flex flex-col items-center gap-y-10 md:grid md:grid-cols-2 text-white px-8 py-14">
          {/* Left Side*/}
          <div className="max-w-[28.75rem]">
            <h2
              className="inline-block font-bold text-heading leading-[4rem]">
              How it worked <br />
              for Jason
              <img src={Img} className="size-10 inline mx-2" alt="quote icon" />
              at
              <img src={GroveIcon} className="pt-2" alt="quote icon" />
            </h2>
            <p className="text-xl mt-6">
              Zwilt enabled us to deliver on time and they&apos;ve been heavy
              hitters in our corner since.
            </p>
            <div className="flex gap-3 mt-6">
              <Button
                variant="purple"
                flip="180"
                size={17}
                className="p-4 rounded-[20px]"
              />
              <Button
                variant="purple"
                size={17}
                className="p-4 rounded-[20px]"
              />
            </div>
          </div>
          {/* Right Side*/}
          <div className="max-w-[31.25rem] self-center justify-self-end">
            <div className="flex gap-4 items-center">
              <div className="px-2 bg-[#AF7CFF] w-fit  flex rounded-[2.5rem] py-9">
                <img src={GrooveLight} className="w-[4.75rem]" alt="" />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-3xl">Jason Makki</p>
                <span className="text-muted-foreground">Engineer </span>
                <span className="text-muted-foreground">San Francisco</span>
              </div>
            </div>
            <p className="text-xl mt-6">
              Zwilt enabled us to deliver on time and they&apos;ve been heavy
              hitters in our corner since. Zwilt enabled us to deliver on time
              and they&apos;ve been heavy hitters in our corner since. Zwilt
              enabled us to deliver on time and they&apos;ve been heavy hitters.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </Trapzoid>
  );
};

export default SectionThree;
