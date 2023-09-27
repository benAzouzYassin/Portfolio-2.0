"use client"
import { useInView } from "react-intersection-observer";
import { Space_Grotesk } from "next/font/google";
import styles from "./style.module.css"
import { useEffect } from "react";
const space_Grotesk = Space_Grotesk({
    weight: ["400", "500"],
    subsets: ["latin"],
})
type Props = {
    img: string;
    name: string;
    description: string;
    link: string;
    videoLink: string;
    index: number
}
export default function Project(props: Props) {

    const { ref, inView, entry } = useInView();
    const animationClass = props.index % 2 ? styles["project-right-animate"] : styles["project-left-animate"]
    useEffect(() => {

        inView
            ? entry?.target.classList.add(animationClass)
            : entry?.target.classList.remove(animationClass);
    }, [inView]);

    console.log(props.index)

    return <div ref={ref} className={`opacity-0 text-[#aeb8d3] ${space_Grotesk.className}`}>
        <img className=" rounded-md hover:cursor-pointer hover:scale-105 transition-transform  " src={props.img} alt={props.description} height="auto" width="auto" />
        <h4 className="text-xl mt-3 font-medium">{props.name}</h4>
        <p className="font-normal mt-1" >{props.description}</p>
    </div>
}