import { Space_Grotesk } from "next/font/google";
import technologies from "@/techstack.json"
const space_Grotesk = Space_Grotesk({
    weight: ["400", "500"],
    subsets: ["latin"],
});


export default function Tooling() {
    return <div className={`${space_Grotesk.className}`} >
        <h3 className={`  text-[#cfd7ec] mt-5 text-xl font-medium  tracking-wide underline underline-offset-4 `}>DEV OPS AND TOOLING</h3>
        <div className=" grid grid-cols-4 mt-5 gap-5 w-[95%]">
            {technologies.tools.map(tech => <div key={tech.name} className="grayscale-[50%] hover:grayscale-0 hover:text-gray-200 hover:cursor-pointer font-light flex gap-2 text-[#aeb8d3]">
                <img src={tech.icon} alt="" width="25" />
                <p>{tech.name}</p>
            </div>)}

        </div>


    </div>
}