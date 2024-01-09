"use client"
import { Inter } from "next/font/google";
import experinces from "@/experiences.json";
import Exp from "./Exp";
import { ArrowRight } from "lucide-react";
import { useSectionsContext } from "@/context/sectionsContext";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion"

const inter = Inter({ weight: "700", subsets: ["latin"] });

export default function Experiences() {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: "-100px" });
  const { updateSection } = useSectionsContext()
  const animate = useAnimation()
  useEffect(() => {
    if (inView) {
      updateSection("EXPERIENCES")
      animate.start({ opacity: 1, rotateX: 0, scale: 1 })
    } else {
      animate.start({ opacity: 0, rotateX: -80, scale: 0.9 })
    }
  }, [animate, inView, updateSection])
  return (
    <section id="EXPERIENCES" className="mt-10  text-[#cad6f6]">
      <h2
        className={`flex gap-1 mt-12 font-bold text-4xl text-[#cad6f6]  ${inter.className}`}
      >
        Experiences
      </h2>
      <div className="mt-10" ref={ref}>
        {experinces.map((exp) => (
          <motion.div animate={animate} initial={{ opacity: 0, rotateX: -80, scale: 0.9 }} transition={{ duration: 0.8 }} key={exp.name}><Exp  {...exp} /></motion.div>
        ))}
      </div>
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1pk0GUwhBXiZ1KNxPMRFAVcSTMSncvPyO/view"
        className="flex lg:text-lg text-sm ml-2  mt-10 font-normal lg:no-underline underline gap-1 underline-offset-[6px] hover:underline hover:gap-3 transition-all  hover:text-[#59e5c4] "
      >
        Feel free to review my professional Resume.{" "}
          <ArrowRight className=" lg:block hidden  self-end scale-105 my-auto "/>{" "}
      </a>
    </section>
  );
}
