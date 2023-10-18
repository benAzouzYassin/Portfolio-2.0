import About from "@/components/About/About";
import Experiences from "@/components/Experience/Experiences";
import FixedInfo from "@/components/FixedInfo/FixedInfo";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";

export default function Home() {


  return (
    <main className="lg:pt-24 pt-16 lg:px-20 px-4 lg:justify-start justify-center flex overflow-x-hidden flex-col lg:flex-row relative w-[98vw] ">
      <FixedInfo />
      <div
        className="lg:w-1/2 ml-auto  mt-2 
      lg:pl-10 pl-5 h-fit lg:pb-56 pb-32 "
      >
        <About />
        <TechStack />
        <Projects />
        <Experiences />
        <Footer />
      </div>
    </main>
  );
}
