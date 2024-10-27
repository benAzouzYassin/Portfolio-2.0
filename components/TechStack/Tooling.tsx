"use client";
import { Space_Grotesk } from "next/font/google";
import technologies from "@/techstack.json";
import { motion } from "framer-motion";
const space_Grotesk = Space_Grotesk({
    weight: ["400", "500"],
    subsets: ["latin"],
});

export default function Tooling() {
    return (
        <div className={`${space_Grotesk.className}`}>
            <h3
                className={`  text-[#cfd7ec] mt-5 text-xl font-medium  tracking-wide underline underline-offset-4 `}>
                DEV OPS AND TOOLING
            </h3>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 70 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                viewport={{ once: true }}
                className=" grid lg:grid-cols-4 grid-cols-2 mt-5 gap-5 w-[95%]">
                {technologies.tools.map((tech) => (
                    <div
                        key={tech.name}
                        className="grayscale-[50%] hover:grayscale-0 hover:text-gray-200 hover:cursor-pointer font-light flex gap-2 text-[#aeb8d3]">
                        <img
                            className="aspect-square	"
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
