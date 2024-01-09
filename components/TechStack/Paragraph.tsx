"use client"
import { useSectionsContext } from "@/context/sectionsContext";
import { motion, useAnimation , useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Paragraph() {
  const ref = useRef(null)
  const inView= useInView(ref );
  const { updateSection } = useSectionsContext()
  const animate = useAnimation()
  useEffect(() => {
    if(inView){
      updateSection("TECH STACK")
      animate.start({opacity : 1 , y : 0})
    }else{
      animate.start({opacity : 0 , y : 70 })
    }
  }, [inView, updateSection , animate])
  
  return (
    <>
      <motion.p
        initial ={{opacity : 0 , y : 70}}
        transition={{duration : 0.55}}
        animate={animate}
        className={`  text-lg w-[95%] mt-5 text-slate-400 font-normal lg:text-left text-center  `}
      >
        In the realm of code, my primary stack encompasses{" "}
        <span className="text-yellow-200 font-medium  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          Javascript
        </span>{" "}
        and{" "}
        <span className="font-medium text-blue-400  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          TypeScript
        </span>
        , harmoniously weaving their magic in web development. From{" "}
        <span className="font-medium text-[#49a15f]  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          Node
        </span>{" "}
        to{" "}
        <span className="font-medium text-blue-400  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          React
        </span>
        ,{" "}
        <span className="font-medium text-gray-300  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          Next.js
        </span>{" "}
        to{" "}
        <span className="font-medium text-gray-300  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          Express
        </span>
        , and exploring the promising realms of{" "}
        <span className="font-medium text-gray-300  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          Deno
        </span>{" "}
        and{" "}
        <span
          ref={ref}
          className="font-medium text-gray-300  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          Bun
        </span>
        .
      </motion.p>
    </>
  );
}
