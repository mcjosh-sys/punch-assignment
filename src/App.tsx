import Footer from "@components/footer";
import GradientStroke from "@components/GradientStroke";
import Navbar from "@components/Navbar";
import SectionFive from "@components/SectionFive";
import SectionFour from "@components/SectionFour";
import SectionOne from "@components/SectionOne";
import SectionThree from "@components/SectionThree";
import SectionSix from "@components/sectionsix";
import SectionTwo from "@components/sectiontwo";

function App() {
  return (
    <>
      <header className="w-full flex justify-center">
        <Navbar />
      </header>
      <main>
        <SectionOne />

        
        <div className="mt-24">
          <div className="w-full skew-y-[-3deg]">
            <GradientStroke height={14} mb={5} />
            <GradientStroke height={10} mb={6} />
            <GradientStroke height={8} mb={8} />
            <GradientStroke height={6} mb={10} />
            <GradientStroke height={4} mb={40} />
          </div>
        </div>


        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <Footer />
      </main>
    </>
  );
}

export default App;
