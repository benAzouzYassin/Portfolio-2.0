"use client";

import { ArrowUpIcon } from "lucide-react";
import { useCallback, } from "react";
import styles from "./styles.module.css";
export default function TopArrow() {


  const handleClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (


    <div
      onClick={handleClick}
      className={` w-10 h-10 right-5 bg-white  hover:cursor-pointer hover:scale-110  top-[93vh] flex items-center justify-center fixed transition-all  rounded-full ${styles["btn-animation"]}`}
    >
      <ArrowUpIcon className="scale-105 " />
    </div>


  );
}
