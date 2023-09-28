"use client";

import { useEffect, useState } from "react";

function getSectionsOffsets() {
  const sectionsOffsets = ["ABOUT", "TECH STACK", "PROJECTS", "EXPERIENCES"]
    .map((s) => {
      const sectionOffset = document.getElementById(s)?.offsetTop;
      return { sectionName: s, sectionOffset: sectionOffset };
    })
    .reverse();
  return sectionsOffsets;
}
function getSectionName(windowOffset: number, sections: any) {
  const firstSection = sections[0];
  const lastSection = sections[sections.length - 1];
  if (windowOffset > firstSection.sectionOffset) {
    return firstSection.sectionName;
  }
  if (windowOffset < lastSection.sectionOffset) {
    return lastSection.sectionName;
  }
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].sectionOffset < windowOffset) {
      return sections[i - 1].sectionName;
    }
  }
}
export default function Nav() {
  const [selectedSection, setSelectedSection] = useState("ABOUT");
  useEffect(() => {
    const sections = getSectionsOffsets();

    window.addEventListener("scroll", () => {
      setSelectedSection(getSectionName(window.scrollY - 250, sections));
    });
  }, []);

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
          className={`hover:text-[#57debe] transition-colors hover:cursor-pointer ${
            selectedSection == "ABOUT" && "text-[#57debe] font-extrabold"
          } `}
        >
          ABOUT
        </li>
        <li
          onClick={handleClick}
          className={`hover:text-[#57debe] transition-colors hover:cursor-pointer ${
            selectedSection == "TECH STACK" && "text-[#57debe] font-extrabold"
          } `}
        >
          TECH STACK
        </li>
        <li
          onClick={handleClick}
          className={`hover:text-[#57debe] transition-colors hover:cursor-pointer ${
            selectedSection == "PROJECTS" && "text-[#57debe] font-extrabold"
          } `}
        >
          PROJECTS
        </li>
        <li
          onClick={handleClick}
          className={`hover:text-[#57debe] transition-colors hover:cursor-pointer ${
            selectedSection == "EXPERIENCES" && "text-[#57debe] font-extrabold"
          } `}
        >
          EXPERIENCES
        </li>
      </ul>
    </>
  );
}
