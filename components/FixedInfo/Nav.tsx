"use client";

import {  useState } from "react";
export default function Nav() {
  const [selectedSection, setSelectedSection] = useState("ABOUT");
  const handleClick = (e: any) => {
    const targerId = e.target.innerText;
    if (targerId != "ABOUT") {
      const targetOffset = document.getElementById(targerId)?.offsetTop;
      window.scrollTo({
        top: targetOffset ? targetOffset - 100 : 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <ul
        className={` hidden lg:flex gap-4 mt-6 text-sm ml-4 text-slate-500 font-medium `}
      >
        <li
          onClick={handleClick}
          className={`hover:text-[#57debe] transition-colors hover:cursor-pointer ${selectedSection == "ABOUT" && "text-[#57debe] font-extrabold"
            } `}
        >
          ABOUT
        </li>
        <li
          onClick={handleClick}
          className={`hover:text-[#57debe] transition-colors hover:cursor-pointer ${selectedSection == "TECH STACK" && "text-[#57debe] font-extrabold"
            } `}
        >
          TECH STACK
        </li>
        <li
          onClick={handleClick}
          className={`hover:text-[#57debe] transition-colors hover:cursor-pointer ${selectedSection == "PROJECTS" && "text-[#57debe] font-extrabold"
            } `}
        >
          PROJECTS
        </li>
        <li
          onClick={handleClick}
          className={`hover:text-[#57debe] transition-colors hover:cursor-pointer ${selectedSection == "EXPERIENCES" && "text-[#57debe] font-extrabold"
            } `}
        >
          EXPERIENCES
        </li>
      </ul>
    </>
  );
}
