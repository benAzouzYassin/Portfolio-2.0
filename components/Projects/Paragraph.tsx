"use client"
import { useSectionsContext } from "@/context/sectionsContext";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
export default function Paragraph() {
  const ref = useRef(null)
  const inView = useInView(ref , {margin :"-50px"});
  const {updateSection} = useSectionsContext()
  useEffect(()=>{
      inView && updateSection("PROJECTS")
  },[inView , updateSection])
  return (
    <p
      ref={ref}
      className={`  text-lg w-[95%] mt-5 text-slate-400 font-normal lg:text-left text-center  `}
    >
      My main focus these days is dreaming up,{" "}
      <span className="text-white font-medium">creating</span> and working on
      ideas I find interesting, that is what gives me the utmost joy. Despite
      challenges, I persistently{" "}
      <span className="text-white font-medium">learn</span> and{" "}
      <span className="text-white font-medium">explore</span> to bring these
      visions to life. Here are a few{" "}
      <span className="text-white font-medium">projects</span> I&apos;ve
      recently worked on {":)"}
    </p>
  );
}
