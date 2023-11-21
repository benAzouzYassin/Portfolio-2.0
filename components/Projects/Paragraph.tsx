"use client";
import styles from "./style.module.css";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Paragraph() {
  const { ref, inView, entry } = useInView({ threshold: 0.2 });
  useEffect(() => {
    inView
      ? entry?.target.classList.add(styles["paragraph-animation"])
      : entry?.target.classList.remove(styles["paragraph-animation"]);
  }, [inView]);
  return (
    <p
      ref={ref}
      className={` opacity-0 text-lg w-[90%] mt-5 text-slate-400 font-normal  `}
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
