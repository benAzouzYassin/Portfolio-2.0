import { Inter, Space_Grotesk } from "next/font/google";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tooling from "./Tooling";
import Others from "./Others";

const inter = Inter({ weight: "700", subsets: ["latin"] });
const space_Grotesk = Space_Grotesk({
    weight: ["400", "500"],
    subsets: ["latin"],
});
export default function TechStack() {
    return (
        <section id="TECH STACK">
            <h2
                className={`flex gap-1 mt-16 lg:mt-32 font-bold text-4xl text-[#cad6f6]  ${inter.className}`}>
                TECH STACK{" "}
                <img
                    className="self-end aspect-square"
                    src="/tech-stack-icon.svg"
                    width="40"
                    height="40"
                    alt=""
                />
            </h2>
            <div className={space_Grotesk.className}>
                <Frontend />
                <Backend />
                <Tooling />
                {/* <Others /> */}
            </div>
        </section>
    );
}
