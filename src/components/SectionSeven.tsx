import SectionWrapper from "./SectionWrapper";
import Trapzoid from "./Trapzoid";

const SectionSeven = () => {
  return (
    <Trapzoid className="py-20 bg-muted">
      <SectionWrapper>
        <h2 className="text-heading font-bold text-center">
          Freequenty asked questions
        </h2>
        <div className="flex flex-col divide-y border-t border-b mt-12">
            <div className="grid grid-cols-8 divide-x w-full hover:bg-[#E8E8E8] hover:font-semibold transition-all duration-300 ease-in-out">
                <span className="font-semibold text-center px-12 py-6">General</span>
                <span className="col-start-4 col-span-7 py-6">I want to work part-time, is that possible?</span>
            </div>
            <div className="grid grid-cols-8 divide-x w-full hover:bg-[#E8E8E8] hover:font-semibold transition-all duration-300 ease-in-out">
                <span className=" col-start-4 col-span-7 py-6">How long are the average projects?</span>
            </div>
            <div className="grid grid-cols-8 divide-x w-full hover:bg-[#E8E8E8] hover:font-semibold transition-all duration-300 ease-in-out">
                <span className=" col-start-4 col-span-7 py-6">How does the payment works?</span>
            </div>
            <div className="grid grid-cols-8 divide-x w-full hover:bg-[#E8E8E8] hover:font-semibold transition-all duration-300 ease-in-out">
                <span className=" col-start-4 col-span-7 py-6">How much can I earn?</span>
            </div>
            <div className="grid grid-cols-8 divide-x w-full hover:bg-[#E8E8E8] hover:font-semibold transition-all duration-300 ease-in-out">
                <span className="font-semibold text-center px-12 py-6">General</span>
                <span className="font-semibold text-center px-12 py-6 whitespace-nowrap">Joining Process</span>
                <span className="col-start-4 col-span-5 py-6">I want to work part-time, is that possible?</span>
            </div>
            <div className="grid grid-cols-8 divide-x w-full hover:bg-[#E8E8E8] hover:font-semibold transition-all duration-300 ease-in-out">
                <span className=" col-start-4 col-span-7 py-6">How long are the average projects?</span>
            </div>
            <div className="grid grid-cols-8 divide-x w-full hover:bg-[#E8E8E8] hover:font-semibold transition-all duration-300 ease-in-out">
                <span className=" col-start-4 col-span-7 py-6">How does the payment works?</span>
            </div>
            <div className="grid grid-cols-8 divide-x w-full hover:bg-[#E8E8E8] hover:font-semibold transition-all duration-300 ease-in-out">
                <span className=" col-start-4 col-span-7 py-6">How much can I earn?</span>
            </div>
        </div>
      </SectionWrapper>
    </Trapzoid>
  );
};

export default SectionSeven;
