"use client";
import styles from "./styles.module.css";
import { Space_Grotesk } from "next/font/google";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const space_Grotesk = Space_Grotesk({
  weight: ["400", "500", "300"],
  subsets: ["latin"],
});
export default function Footer() {


  return (
    <footer
      id="FOOTER"
      className={`text-[#d1dce6] opacity-0 mt-20 lg:mt-48 ${space_Grotesk.className} font-light leading-7 text-xl `}
    >
      <p>
        Passionately created by me {":)"}. Constructed using{" "}
        <span className="text-white   font-normal hover:underline hover:cursor-pointer underline-offset-4">
          NextJS
        </span>{" "}
        and <br />
        <span className="text-sky-400 font-normal hover:underline hover:cursor-pointer underline-offset-4">
          Tailwind CSS
        </span>
        , and proudly hosted on Vercel. The visual design was meticulously
        crafted, drawing inspiration from my imagination.
      </p>
      <p className="mt-2 font-normal">© 2023 Yassine Ben Azouz</p>
    </footer>
  );
}
