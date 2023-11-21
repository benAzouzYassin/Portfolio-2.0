"use client";
import { useInView } from "react-intersection-observer";
import styles from "./style.module.css";
import { useEffect } from "react";
import Image from "next/image";

type Props = {
  img: string;
  name: string;
  description: string;
  link: string;
  videoLink: string;
  index: number;
};
export default function Project(props: Props) {
  const { ref, inView, entry } = useInView();
  const animationClass =
    props.index % 2
      ? styles["project-right-animate"]
      : styles["project-left-animate"];
  useEffect(() => {
    inView
      ? entry?.target.classList.add(animationClass)
      : entry?.target.classList.remove(animationClass);
  }, [inView]);

  return (
    <div ref={ref} className={`opacity-0 text-[#aeb8d3] `}>
      <a href={props.link} target="_blank">
        <img


          className=" aspect-[16/9]   rounded-md hover:cursor-pointer hover:scale-105 transition-transform  "
          src={props.img}
          alt={props.description}
          loading="lazy"
        />
      </a>
      <h4 className="lg:text-xl text-base mt-3 font-medium">{props.name}</h4>
      <p className="font-normal mt-1 lg:block hidden">{props.description}</p>
    </div>
  );
}
