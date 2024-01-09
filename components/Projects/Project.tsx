"use client"

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  img: string;
  name: string;
  description: string;
  link: string;
  videoLink: string;
  index: number;
};
export default function Project(props: Props) {
  const animate = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { margin: "-200px" })
  const even = props.index % 2 === 0
  const translateX = even ? -100 : 100
  useEffect(() => {
    if (inView) {
      animate.start({ opacity: 1, x: 0 })
    }
  }, [inView])
  return (<>
      <div className="h-2 w-2 " ref={ref}></div >
        <motion.div animate={animate} transition={{ duration: 0.8 }} initial={{ opacity: 0, x: translateX }} className="text-[#aeb8d3] lg:w-auto w-[80vw] ">
          <a href={props.link} target="_blank">
            <Image
              quality={100}
              width={750}
              height={700}
              className="aspect-[16/9] hover:rotate-1 hover:scale-[102%] rounded-md hover:cursor-pointer transition-transform  "
              src={props.img}
              alt={props.description}
              loading="lazy"
            />
          </a>
          <p className="lg:text-xl text-base mt-3 font-medium">{props.name}</p>
          <p className="font-normal mt-1 lg:block hidden w-[95%]">{props.description}</p>
        </motion.div>
      </>
  );
}
