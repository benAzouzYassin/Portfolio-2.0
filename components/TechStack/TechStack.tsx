import { Inter } from "next/font/google";
import Paragraph from "./Paragraph";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tooling from "./Tooling";
import Others from "./Others";

const inter = Inter({ weight: "700", subsets: ["latin"] });

export default function TechStack() {

    return (
        <section>
            <h2
                className={`flex gap-1 mt-48 font-bold text-4xl text-[#cad6f6]  ${inter.className}`}
            >
                TECH STACK{" "}
                <img
                    className="self-end"
                    src="/tech-stack-icon.svg"
                    width="40"
                    height="40"
                    alt=""
                />
            </h2>
            <Paragraph />
            <Frontend />
            <Backend />
            <Tooling />
            <Others />
        </section>
    );
}
