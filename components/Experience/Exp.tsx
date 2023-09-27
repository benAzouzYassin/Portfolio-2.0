"use client"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"
import styles from "./styles.module.css"

type Props = {
    name: string;
    company: string;
    companyLogo: string;
    period: string;
}


export default function Exp(props: Props) {
    const { ref, inView, entry } = useInView()

    useEffect(() => {

        inView
            ? entry?.target.classList.add(styles["animation-class"])
            : entry?.target.classList.remove(styles["animation-class"]);
    }, [inView]);


    return <div ref={ref} className="flex opacity-0 items-center gap-10 mt-5">
        <div className="border-[1px] border-white p-1 rounded-md">
            <img src={props.companyLogo} alt="" width="25" />
        </div>
        <div className="flex flex-col">
            <p className="font-medium text-xl">{props.name}</p>
            <p className="font-light mt-[-2px] text-sm">{props.company}</p>
        </div>
        <p className="font-normal  self-center mr-5 ml-auto">{props.period}</p>

    </div>
}