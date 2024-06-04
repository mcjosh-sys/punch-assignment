import Accordion from "./Accordion"
import SectionWrapper from "./SectionWrapper"

const SectionFour = () => {
  return (
    <SectionWrapper>
      <div className="mt-36 mx-8 max-w-[646px]">
        <h3 
        className="font-bold text-heading leading-tight">
            How we ensure you're in good hands.
            </h3>
        <p className="text-xl mt-4">
        With our comprehensive screening process, 
        we hand-pick highly skilled candidates so 
        you can onboard them in a matter of days.
        </p>
          <Accordion items={[
            {step: "Resume Screening",content: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."},
            {step: "Video Interview",content: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."},
            {step: "Techinical Evaluation",content: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."},
            {step: "Application Review",content: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."},
            {step: "Lets get to work",content: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."},
          ]}/>
      </div>
    </SectionWrapper>
  )
}

export default SectionFour
