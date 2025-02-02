"use client";
import { motion, useInView } from "framer-motion";
import { Inter } from "next/font/google";
import TopArrow from "../TopArrow/TopArrow";
import { useSectionsContext } from "@/context/sectionsContext";
import { useEffect, useRef } from "react";

const inter = Inter({ weight: ["700", "500"], subsets: ["latin"] });

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref);
    const { updateSection } = useSectionsContext();
    useEffect(() => {
        inView && updateSection("ABOUT");
    }, [inView]);

    return (
        <section id="ABOUT">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                transition={{ delay: 0, duration: 0.4 }}
                animate={{ opacity: 1, y: 1 }}
                className={`lg:text-3xl  md:w-[110%] lg:font-bold text-xl mt-2 lg:-mt-5 text-[#cad6f6]  ${inter.className}`}
                ref={ref}>
                Hey there, I&apos;m Yassine Ben Azouz👋
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                transition={{ delay: 0, duration: 0.5 }}
                animate={{ opacity: 1, y: 1 }}
                className={` mt-5 lg:mt-10 text-lg text-left text-slate-300 md:text-slate-300/80 font-light`}>
                I'm a{" "}
                <span className="font-medium  text-[#57debe] hover:underline hover:cursor-pointer underline-offset-4 decoration-0  ">
                    full-stack web developer
                </span>{" "}
                from Tunisia with passion for computers and technology that
                began at a young age
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 md:w-[110%] 2xl:w-[100%]  text-lg  text-slate-300 md:text-slate-300/80 font-normal ">
                I primarily use{" "}
                <span className="font-medium text-[#57debe] hover:underline hover:cursor-pointer underline-offset-4 decoration-0  ">
                    React and Next.js
                </span>{" "}
                for frontend development, while for the backend, I often use{" "}
                <span className="font-medium text-[#57debe] hover:underline hover:cursor-pointer underline-offset-4 decoration-0  ">
                    Supabase or Node.js
                </span>{" "}
            </motion.p>

            <TopArrow />
        </section>
    );
}
