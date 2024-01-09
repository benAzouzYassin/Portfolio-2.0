"use client"

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
  return (
        <div  className="text-[#aeb8d3] lg:w-auto w-[80vw] ">
          <a href={props.link} target="_blank">
            <Image
              width={750}
              height={700}
              className="aspect-[16/9] hover:rotate-1 hover:scale-[102%] rounded-md hover:cursor-pointer transition-transform  "
              src={props.img}
              alt={props.description}
            />
          </a>
          <p className="lg:text-xl text-base mt-3 font-medium">{props.name}</p>
          <p className="font-normal mt-1 lg:block hidden w-[95%]">{props.description}</p>
        </div>
  );
}
