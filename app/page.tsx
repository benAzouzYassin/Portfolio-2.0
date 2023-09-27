import About from "@/components/About/About";
import Experiences from "@/components/Experience/Experiences";
import FixedInfo from "@/components/FixedInfo/FixedInfo";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";

export default function Home() {
  //TODO MAKE IT RESPONSIVE
  //TODO MAKE THE SCROLL TO TOP BUTTON
  return (
    <main className="pt-24 px-20 flex overflow-x-hidden flex-row w-[98vw]">
      <FixedInfo />
      <div className="w-1/2 ml-auto  mt-2 pl-10 h-fit pb-56 ">
        <About />
        <TechStack />
        <Projects />
        <Experiences />
        <Footer />
      </div>
    </main>
  );
}
