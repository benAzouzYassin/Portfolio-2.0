"use client"
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.css";

import { ArrowRight } from 'lucide-react';
import { Space_Grotesk } from "next/font/google";
import technologies from "@/techstack.json"
import { useEffect } from "react";
const space_Grotesk = Space_Grotesk({
    weight: ["400", "500"],
    subsets: ["latin"],
});

export default function Others() {
    const { ref, inView, entry } = useInView({ threshold: 0.2 });
    useEffect(() => {
        inView
            ? entry?.target.classList.add(styles["paragraph-animation"])
            : entry?.target.classList.remove(styles["paragraph-animation"]);
    }, [inView]);



    return <div className={`${space_Grotesk.className} h-fit pb-10 px-6  w-[95%] border-2 pt-6 text-[#aeb8d3] border-white mt-8 rounded-md`}>

        <p ref={ref} className='flex font-light'> <ArrowRight />Other things I am currently exploring, planning to delve into further, or have on my radar for future learning:</p>
        <div className=" grid grid-cols-4 mt-5 gap-y-5 gap-x-7 w-[95%]">
            {technologies.learning.map(tech => <div key={tech.name} className="grayscale-[50%] hover:grayscale-0 hover:text-gray-200 hover:cursor-pointer font-light flex gap-2 text-[#aeb8d3]">
                <img src={tech.icon} alt="" width="25" />
                <p>{tech.name}</p>
            </div>)}
        </div>
    </div>
}