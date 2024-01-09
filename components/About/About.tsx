"use client"
import { motion , useInView } from "framer-motion"
import { Inter } from "next/font/google";
import TopArrow from "../TopArrow/TopArrow";
import { useSectionsContext } from "@/context/sectionsContext";
import { useEffect, useRef } from "react";

const inter = Inter({ weight: ["700", "500"], subsets: ["latin"] });

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref);
  const { updateSection } = useSectionsContext()
  useEffect(() => {
    inView && updateSection("ABOUT")
  }, [inView])

  return (
    <section id="ABOUT">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        transition={{ delay: 0, duration: 0.4 }}
        animate={{ opacity: 1, y: 1 }}
        className={`lg:text-4xl lg:font-bold text-xl mt-2 text-[#cad6f6]  ${inter.className}`}
        ref={ref}

      >
        Hey there, I&apos;m Yassine Ben Azouz👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        transition={{ delay: 0, duration: 0.5 }}
        animate={{ opacity: 1, y: 1 }}
        className={` mt-5 lg:mt-8 text-lg lg:text-left text-center w-[95%] text-slate-400 font-light`}
      >
        I&apos;m a passionate self-taught developer and a{" "}
        <a
          href="https://en.wikipedia.org/wiki/Computer_science"
          target="_blank"
          className="font-medium text-[#57debe]  hover:underline hover:cursor-pointer underline-offset-4 decoration-0"
        >
          Computer Science
        </a>{" "}
        student from Tunisia. Building things that run on computers is not only
        my area of study but also my{" "}
        <span className="font-medium text-[#57debe]  hover:underline hover:cursor-pointer underline-offset-4 decoration-0 ">
          biggest passion.
        </span>{" "}
        I love diving into various tools,{"   "}
        <a
          href="https://en.wikipedia.org/wiki/Programming_language"
          target="_blank"
          className="font-medium text-[#57debe]  hover:underline hover:cursor-pointer underline-offset-4 decoration-0"
        >
          programming languages
        </a>{" "}
        and{" "}
        <span className="font-medium text-[#57debe] hover:underline hover:cursor-pointer underline-offset-4 decoration-0 ">
          frameworks
        </span>{" "}
        to expand my knowledge and skills 🔨
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 w-[90%] text-lg  text-slate-400 font-normal  hidden lg:block"
      >
        Being a{" "}
        <a

          target="_blank"
          href="https://en.wikipedia.org/wiki/Software_engineering"
          className="font-medium text-[#57debe] hover:underline hover:cursor-pointer underline-offset-4 decoration-0  "
        >
          developer
        </a>{" "}
        is not just a job for me; it&apos;s a way of life. I&apos;m always
        exploring new ideas and experimenting with different technologies. I
        always strive to push the boundaries and improve my craft. I aim for{" "}
        <span className="font-medium text-[#57debe]  hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          greatness
        </span>{" "}
        in everything I create ✨
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.7 }}
        animate={{ opacity: 1, y: 1 }}
        className={`mt-8 w-[90%] text-lg hidden lg:block  text-slate-400 font-normal`}
      >
        When the night comes, you&apos;ll often find me enthusiastically{" "}
        <span className="font-medium text-[#57debe] hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          learning
        </span>{" "}
        how to write the best software possible and optimizing it to run even
        better. The thrill of{" "}
        <span
          className="font-medium text-[#57debe] hover:underline hover:cursor-pointer underline-offset-4 decoration-0">
          making software
        </span>{" "}
        more efficient and effective keeps me going ⚡
      </motion.p>
      <TopArrow />

    </section>
  );
}
