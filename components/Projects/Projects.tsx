import { Inter, Space_Grotesk } from "next/font/google";
import { SquareDashedBottomCode } from "lucide-react";
import Paragraph from "./Paragraph";
import projects from "@/projects.json";
import Project from "./Project";
import { cn } from "@/utils";
const space_Grotesk = Space_Grotesk({
  weight: ["400", "500"],
  subsets: ["latin"],
});
const inter = Inter({ weight: "700", subsets: ["latin"] });

export default function Projects() {
  return (
    <section id="PROJECTS">
      <h2
        className={`flex gap-1 mt-16 font-bold text-4xl text-[#cad6f6]  ${inter.className}`}
      >
        WHAT I&apos;VE BUILT{" "}
        <SquareDashedBottomCode className="self-center scale-110" />
      </h2>

      <div className={space_Grotesk.className}>
        <Paragraph />
        <div className="mt-10 grid lg:grid-cols-1 gap-y-10 gap-x-16">
          {projects.map((project, index) => (
            <Project key={project.name} index={index} {...project} />
          // <div key={project.link} className="h-96 w-full flex shadow-md project-box-shadow group rounded-lg  bg-[#101010] border border-[#252525]/70 ">
          //     <img src={project.img} className="w-[70%] border border-[#242424] mt-2 scale-90 aspect-square shadow-md shadow-white/5  bg-cover rounded-xl  h-64   group-even:ml-auto  group-even:mr-5 h-50" alt="website image" />
          // </div>
            ))}
        </div>
      </div>
    </section>
  );
}
