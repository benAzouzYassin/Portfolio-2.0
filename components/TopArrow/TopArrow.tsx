"use client"
import { ArrowUpIcon } from "lucide-react";
export default function TopArrow() {
 
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      
        <div
          
          onClick={handleClick}
          className={` z-50 w-10 h-10 right-5 bg-white  hover:cursor-pointer hover:scale-110  top-[93vh] flex items-center justify-center fixed transition-all  rounded-full`}
        >
          <ArrowUpIcon className="scale-105 " />
        </div>
  
    </>
  );
}
