"use client"

import { Space_Grotesk } from "next/font/google";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.css";

const space_Grotesk = Space_Grotesk({
    weight: ["400", "500"],
    subsets: ["latin"],
});

export default function Paragraph() {
    const { ref, inView, entry } = useInView({ threshold: 0.2 });
    useEffect(() => {
        inView
            ? entry?.target.classList.add(styles["paragraph-animation"])
            : entry?.target.classList.remove(styles["paragraph-animation"]);
    }, [inView]);

    return <p
        ref={ref}
        className={` opacity-0 text-lg w-[90%] mt-5 text-slate-400 font-normal  ${space_Grotesk.className}`}
    >
        In the realm of code, my primary stack encompasses{" "}
        <span className="text-yellow-200 font-medium  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
            Javascript
        </span>{" "}
        and <span className="font-medium text-blue-400  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">TypeScript</span>, harmoniously weaving their magic in web development.
        From <span className="font-medium text-[#49a15f]  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">Node</span> to <span className="font-medium text-blue-400  hover:underline hover:cursor-pointer underline-offset-4 decoration-0" >React</span>, <span className="font-medium text-gray-300  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">Next.js</span> to <span className="font-medium text-gray-300  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">Express</span>, and exploring the promising
        realms of <span className="font-medium text-gray-300  hover:underline hover:cursor-pointer underline-offset-4 decoration-0" >Deno</span> and <span className="font-medium text-gray-300  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">Bun</span>.
    </p>
}