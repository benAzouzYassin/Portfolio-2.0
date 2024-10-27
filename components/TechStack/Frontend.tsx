"use client";
import technologies from "@/techstack.json";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
const space_Grotesk = Space_Grotesk({
    weight: ["400", "500"],
    subsets: ["latin"],
});

export default function Frontend() {
    return (
        <div className={`${space_Grotesk.className}`}>
            <h3
                className={`  text-[#cfd7ec] mt-5 text-xl font-medium  underline underline-offset-4  tracking-wide`}>
                FRONTEND
            </h3>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 70 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true }}
                className=" grid lg:grid-cols-4 mt-5 grid-cols-2 gap-5 w-[95%]">
                {technologies.frontend.map((tech) => (
                    <div
                        key={tech.name}
                        className="grayscale-[50%] hover:grayscale-0 hover:text-gray-200 hover:cursor-pointer font-light flex gap-2 text-[#aeb8d3]">
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            height="22"
                            width="22"
                        />
                        <p>{tech.name}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
