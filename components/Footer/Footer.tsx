"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { useRef, useEffect } from "react";
const space_Grotesk = Space_Grotesk({
    weight: ["400", "500", "300"],
    subsets: ["latin"],
});
export default function Footer() {
    const ref = useRef(null);
    const inView = useInView(ref, { margin: "-70px" });
    const animate = useAnimation();
    useEffect(() => {
        inView ? animate.start({ opacity: 1 }) : animate.start({ opacity: 0 });
    }, [inView]);
    return (
        <motion.footer
            ref={ref}
            transition={{ duration: 1 }}
            animate={animate}
            initial={{ opacity: 0 }}
            id="FOOTER"
            className={`text-[#d1dce6]  mt-20    ${space_Grotesk.className} font-light leading-7 text-md  text-left lg:text-xl `}>
            <p>
                Passionately created by me {":)"}. Constructed using{" "}
                <span className="text-white   font-normal hover:underline hover:cursor-pointer underline-offset-4">
                    NextJS
                </span>{" "}
                and <br />
                <span className="text-sky-400 font-normal hover:underline hover:cursor-pointer underline-offset-4">
                    Tailwind CSS
                </span>
                , and proudly hosted on Vercel. The visual design was
                meticulously crafted, drawing inspiration from my imagination.
            </p>
            <p className="mt-2 font-normal">© 2025 Yassine Ben Azouz</p>
        </motion.footer>
    );
}
