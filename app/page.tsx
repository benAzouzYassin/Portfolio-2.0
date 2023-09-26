import About from "@/components/About/About";
import FixedInfo from "@/components/FixedInfo/FixedInfo";
import TechStack from "@/components/TechStack/TechStack";

export default function Home() {
  return (<main className="pt-24 px-20 flex overflow-x-hidden flex-row w-[98vw]">

    <FixedInfo />
    <div className="w-1/2 ml-auto  mt-2 pl-10 h-fit pb-20 ">
      <About />
      <TechStack />
    </div>

  </main>
  )
}
