
import { ArrowRight } from "lucide-react";
import technologies from "@/techstack.json";
import Image from "next/image";

export default function Others() {


  return (
    <div
      className={` h-fit pb-10 px-6  w-[95%] border-2 pt-6 text-[#aeb8d3] border-white mt-8 rounded-md`}
    >
      <p className="flex  font-light">
        {" "}
        <ArrowRight />
        Other things I am currently exploring, planning to delve into further,
        or have on my radar for future learning:
      </p>
      <div className=" grid lg:grid-cols-4 grid-cols-2 mt-5 gap-y-5 gap-x-7 w-[95%]">
        {technologies.learning.map((tech) => (
          <div
            key={tech.name}
            className="grayscale-[50%] hover:grayscale-0 hover:text-gray-200 hover:cursor-pointer font-light flex gap-2 text-[#aeb8d3]"
          >
            <Image
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
