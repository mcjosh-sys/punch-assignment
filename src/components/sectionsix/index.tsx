import Trapzoid from "../Trapzoid";
import Card from "./card";
import OnboardImg from '@assets/onboard.svg'
import ChatBoxImg from '@assets/chatbox.svg'
import ActivityImg from '@assets/activity.svg'

const SectionSix = () => {
  return (
    <Trapzoid
      deg={3}
      className=" bg-gradient-to-b from-background  to-[#EDEFFF] py-32 overflow-hidden mt-16">
      <div className="ml-4 2xl:ml-[calc((100%-1400px)/2)] flex  items-center gap-4 flex-nowrap overflow-x-auto scroll-hidden w-full">
        <div className="max-w-sm mr-28 shrink-0 basis-auto grow-0">
          <h3 className="text-heading font-bold leading-tight mb-6">
            Why choose Zwilt?
          </h3>
          <p className="text-xl text-balance">
            We take complex hiring process - and simplify them. Connecting you
            to the world&apos;s highly qualified talent pool.
          </p>
        </div>
        <Card
          title="Onboard without, the risk."
          btnText="Learn More"
          accent="purple"
          list={[
            "We pick the best for you to select.",
            "Thousands of vetted candidates in dozens of categories.",
            "Risk-free resource swapping for the best fit.",
          ]}>
            <img src={OnboardImg} className="max-w-md -ml-20" alt=""  />
          </Card>
        <Card
          title="Onboard without, the risk."
          btnText="Learn More"
          accent="orange"
          list={[
            "We pick the best for you to select.",
            "Thousands of vetted candidates in dozens of categories.",
            "Risk-free resource swapping for the best fit.",
          ]}>
            <img src={ChatBoxImg} className="max-w-md -ml-20" alt=""  />
          </Card>
        <Card
          title="Onboard without, the risk."
          btnText="Learn More"
          accent="purple"
          list={[
            "We pick the best for you to select.",
            "Thousands of vetted candidates in dozens of categories.",
            "Risk-free resource swapping for the best fit.",
          ]}>
            <img src={ActivityImg} className="max-w-md -ml-20" alt=""  />
          </Card>
          <div className="ml-10 p-10 shrink-0 basis-auto grow-0 w-32 2xl:w-[900px]" />
      </div>
    </Trapzoid>
  );
};

export default SectionSix;
