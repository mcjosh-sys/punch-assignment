import Button from "./Button";
import SectionWrapper from "./SectionWrapper";
import Trapzoid from "./Trapzoid";

const SectionFive = () => {
  return (
    <SectionWrapper>
      <div className="mt-44 mx-8">
        <h2 className=" text-heading font-bold text-center mb-16">
          Start your journey today.
        </h2>
        <div className="flex flex-col gap-4">
          <Trapzoid
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "right",
              backgroundPositionY: "50%",
              backgroundSize: "40% 160%",
            }}
            deg={3}
            className="bg-[#EDEFFF] sl:bg-[url(/src/assets/no_1.svg)] py-10 grid items-center">
            <div className="flex justify-between">
              <div className="flex gap-x-4 mt-6 mx-8">
                <div className="relative flex items-start">
                  <span className="font-semibold text-[3.8rem] [transform:scale(1.3,1.7)] leading-[5rem] bg-gradient-to-b from-[#A387D1] bg-clip-text text-transparent">
                    1
                  </span>
                </div>
                <div className="flex flex-col max-w-[25.4rem] gap-4">
                  <h3 className="font-semibold text-3xl leading-tight">
                    Find your next star performer.
                  </h3>
                  <p className="">
                    Explore the vast Zwilt marketplace to find the candidate
                    that meets your needs.
                  </p>
                  <Button
                    text="Join Now"
                    className="py-[0.5rem] px-[1.2rem] rounded-[1.4rem]"
                    size={16.82}
                  />
                </div>
              </div>
              {/* <div className="relative">
                <img src={OneImg} className="" alt="" />
              </div> */}
            </div>
          </Trapzoid>
          <Trapzoid
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "right",
              backgroundPositionY: "70%",
              backgroundSize: "40% 120%",
            }}
            deg={3}
            className="bg-[#FFF7E1] sl:bg-[url(/src/assets/no_2.png)] trapzoid py-10 flex items-center">
            <div className="flex gap-x-4 mt-6 mx-8">
              <div className="relative flex items-start">
                <span className="font-semibold  text-[3.8rem] [transform:scale(1.3,1.7)] leading-[5rem] bg-gradient-to-b from-[#FFBE2E] bg-clip-text text-transparent">
                  2
                </span>
              </div>
              <div className="flex flex-col max-w-[25.4rem] gap-4">
                <h3 className="font-semibold text-3xl leading-tight">
                  Find your next star performer.
                </h3>
                <p className="">
                  Explore the vast Zwilt marketplace to find the candidate that
                  meets your needs.
                </p>
                <Button
                  text="Join Now"
                  className="py-[0.5rem] px-[1.2rem] rounded-[1.4rem]"
                  size={16.82}
                />
              </div>
            </div>
          </Trapzoid>
          <Trapzoid
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "right",
              backgroundPositionY: "70%",
              backgroundSize: "40% 120%",
            }}
            deg={3}
            className="bg-[#F3F3F3] sl:bg-[url(/src/assets/no_3.svg)] py-10 flex items-center relative">
            <div className="flex">
              <div className="flex gap-x-4 mt-6 mx-8">
                <div className="relative flex items-start">
                  <span className="font-semibold  text-[3.8rem] [transform:scale(1.3,1.7)] leading-[5rem] bg-gradient-to-b from-[#000000] bg-clip-text text-transparent">
                    3
                  </span>
                </div>
                <div className="flex flex-col max-w-[25.4rem] gap-4">
                  <h3 className="font-semibold text-3xl leading-tight">
                    Find your next star performer.
                  </h3>
                  <p className="">
                    Explore the vast Zwilt marketplace to find the candidate
                    that meets your needs.
                  </p>
                  <Button
                    text="Join Now"
                    className="py-[0.5rem] px-[1.2rem] rounded-[1.4rem]"
                    size={16.82}
                  />
                </div>
              </div>
            </div>
          </Trapzoid>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionFive;
