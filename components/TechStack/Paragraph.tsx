"use client";
import { useSectionsContext } from "@/context/sectionsContext";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Paragraph() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const { updateSection } = useSectionsContext();
  const animate = useAnimation();
  useEffect(() => {
    if (inView) {
      updateSection("TECH STACK");
      animate.start({ opacity: 1, y: 0 });
    } else {
      animate.start({ opacity: 0, y: 70 });
    }
  }, [inView, updateSection, animate]);

  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 70 }}
        transition={{ duration: 0.55 }}
        animate={animate}
        className={`  text-lg w-[95%] mt-5 text-slate-400 font-normal   `}
      >
        My primary stack includes{" "}
        <span className="text-blue-400 font-medium  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          React
        </span>{" "}
        and{" "}
        <span className="font-medium text-gray-300  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          NextJs
        </span>
        , which I use extensively in web development alongside{" "}
        <span className="font-medium text-blue-400  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          TailwindCss
        </span>{" "}
        . I also work with technologies like{" "}
        <span className="font-medium text-[#49a15f]  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          Node js
        </span>{" "}
        ,
        <span className="font-medium text-yellow-200  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          {" "}
          Python with Django{" "}
        </span>
        and{" "}
        <span className="font-medium text-purple-500  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          Strapi
        </span>{" "}
        to , and exploring the the newer tools like{" "}
        <span className="font-medium text-gray-300  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          Drizzle orm
        </span>{" "}
        and{" "}
        <span
          ref={ref}
          className="font-medium text-gray-300  hover:underline hover:cursor-pointer underline-offset-4 decoration-0"
        >
          Bun
        </span>
        .
      </motion.p>
    </>
  );
}
