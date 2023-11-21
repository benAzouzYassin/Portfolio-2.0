"use client";

import { ArrowUpIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
export default function TopArrow() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(false);
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    if (ref.current) {
      if (isVisible) {
        ref.current.classList.remove("opacity-0");
        ref.current.classList.add("opacity-[0.7]");
      } else {
        ref.current.classList.add("opacity-0");
        ref.current.classList.remove("opacity-[0.7]");
      }
    }
  }, [isVisible]);
  return (
    <>
      {isVisible && (
        <div
          ref={ref}
          onClick={handleClick}
          className={` w-10 h-10 right-5 bg-white  hover:cursor-pointer hover:scale-110  top-[93vh] flex items-center justify-center fixed transition-all  rounded-full ${styles["btn-animation"]}`}
        >
          <ArrowUpIcon className="scale-105 " />
        </div>
      )}
    </>
  );
}
