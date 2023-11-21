import { Roboto, Space_Grotesk } from "next/font/google";
import style from "./styles.module.css";
import Timer from "./Timer";
import Nav from "./Nav";
import Image from "next/image";
const roboto = Roboto({
  subsets: ["cyrillic-ext"],
  weight: ["500", "400", "300"],
});
const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700", "500"],
});
export default function FixedInfo() {
  const currentDate = new Date();
  return (
    <div className="lg:w-1/2 lg:fixed  ">
      <svg
        className=" text-white overflow-visible"
        viewBox="0 0 634 97"
        width="300"
        height="100"
      >
        <text
          id="animated-text"
          className={`${style["animated-text"]} text-[200px]  ${roboto.className} font-medium`}
          x="0%"
          y="80%"
          textAnchor="left"
          fill="none"
        >
          Yassine
        </text>
        <use
          xlinkHref="#animated-text"
          className={style["animated-text-copy"]}
        ></use>
        <use
          xlinkHref="#animated-text"
          className={style["animated-text-copy"]}
        ></use>
        <use
          xlinkHref="#animated-text"
          className={style["animated-text-copy"]}
        ></use>
      </svg>
      <h1
        className={` pl-4 text-lg  uppercase tracking-[0.4rem] text-slate-400 sm:text-xl ${space_Grotesk.className}`}
      >
        Software Developer
      </h1>
      <div className="mt-4 flex gap-4 pl-4">
        <a
          href="https://github.com/benAzouzYassin"
          target="_blank"
          className="hover:scale-110 text-md font-medium"
        >
          <Image
            alt="GitHub"
            height="20"
            width="20"
            src="https://cdn.simpleicons.org/GitHub/white"
          />
        </a>
        <a
          href="https://www.facebook.com/yassine.benazouz.18/"
          target="_blank"
          className=" hover:scale-110 text-md font-medium"
        >
          <Image
            alt="Facebook"
            height="20"
            width="20"
            src="https://cdn.simpleicons.org/Facebook/white"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/yassine-ben-azouz-724782242/"
          target="_blank"
          className="hover:scale-110 text-md font-medium"
        >
          <Image
            alt="LinkedIn"
            height="20"
            width="20"
            src="https://cdn.simpleicons.org/LinkedIn/white"
          />
        </a>
        <a
          href="mailto:yassinebenazouz123@gmail.com"
          target="_blank"
          className="hover:scale-110 text-md font-medium"
        >
          <Image
            alt="Gmail"
            height="20"
            width="20"
            src="https://cdn.simpleicons.org/Gmail/white"
          />
        </a>
      </div>
      <a target="_blank" href="/resume.pdf" className="mt-8 ml-4  flex w-[300px] items-center gap-3 rounded-full bg-gradient-to-r from-[#122D22] via-[#265842] to-[#122D22] p-2 lg:px-4">
        <div className="flex h-5  w-5 items-center justify-center rounded-full bg-[#3ECF8E26]">
          <div className="m-auto h-3 w-3 animate-ping rounded-full bg-[rgb(62,207,142)]"></div>
        </div>
        <span className="text-[#3ECF8E]">Available for projects</span>
      </a>
      <Timer currentDate={currentDate} />
      <div className="mt-6 ml-4  h-[2px] w-3/4 rounded-full bg-gradient-to-r from-[#3ECF8E]  to-[#0C1311] "></div>
      <Nav />
    </div>
  );
}
