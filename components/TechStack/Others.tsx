"use client"
import { ArrowRight } from "lucide-react";
import technologies from "@/techstack.json";
import { motion, useAnimate, useAnimation, useInView } from 'framer-motion';
import {  useEffect, useRef } from "react";

export default function Others() {
  const ref = useRef(null)
  const inView = useInView(ref)
  const animate = useAnimation()
  useEffect(() => {
    if(inView){
      animate.start({opacity : 1 , y : 0})
    }else{
      animate.set({opacity : 0 , y : 70 })
    }
  }, [inView])
  
  return (
    <div
      className={` h-fit pb-10 px-6  w-[95%] border-2 pt-6 text-[#aeb8d3] border-white mt-8 rounded-md`}
    >
      <motion.p
      ref={ref} 
      initial ={{opacity : 0 , y : 70}}
      transition={{duration : 0.55}}
      animate={animate}
      className="flex font-light">
        {" "}
        <ArrowRight className="pt-2 mr-1" />
        Other things I am currently exploring, planning to delve into further,
        or have on my radar for future learning:
      </motion.p>
      <div className=" grid lg:grid-cols-4 grid-cols-2 mt-5 gap-y-5 gap-x-7 w-[95%]">
        {technologies.learning.map((tech) => (
          <div
            key={tech.name}
            className="grayscale-[50%] hover:grayscale-0 hover:text-gray-200 hover:cursor-pointer font-light flex gap-2 text-[#aeb8d3]"
          >
            <img
              className="aspect-square"
              src={tech.icon}
              alt={tech.name}
              height="22"
              width="22"
            />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
