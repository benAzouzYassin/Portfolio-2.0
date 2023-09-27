import { Inter, } from "next/font/google";
import { SquareDashedBottomCode } from 'lucide-react';
import Paragraph from "./Paragraph";
import projects from "@/projects.json"
import Project from "./Project";


const inter = Inter({ weight: "700", subsets: ["latin"] });


export default function Projects() {



    return <section>
        <h2 className={`flex gap-1 mt-16 font-bold text-4xl text-[#cad6f6]  ${inter.className}`} >WHAT I'VE BUILT <SquareDashedBottomCode className="self-center scale-110" /></h2>
        <Paragraph />
        <div className="mt-10 grid grid-cols-2 gap-y-10 gap-x-16">{projects.map((project, index) => <Project key={project.name} index={index} {...project} />)}</div>
    </section>
}