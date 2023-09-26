import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ weight: "700", subsets: ["latin"] });
const space_Grotesk = Space_Grotesk({ weight: ["400", "500"], subsets: ["latin"] });
export default function About() {
    //TODO MAKE THE 3 paragraphs animate

    return (
        <div>
            <p className={`text-4xl text-[#cad6f6] ${inter.className}`}>
                Hey there, I'm Yassine Azouz 👋
            </p>
            <p
                className={` mt-8 text-lg italic text-slate-400 font-normal ${space_Grotesk.className}`}
            >
                I'm a passionate self-taught developer and a {" "}
                <a
                    href="https://en.wikipedia.org/wiki/Computer_science"
                    target="_blank"
                    className="font-medium text-[#57debe]  hover:underline hover:cursor-pointer underline-offset-4 decoration-0"
                >

                    Computer Science
                </a>{" "}
                student from Tunisia. Building things that run on computers is not only
                my area of study but also my{" "}
                <span className="font-medium text-[#57debe]  hover:underline hover:cursor-pointer underline-offset-4 decoration-0 ">biggest passion.</span> I
                love diving into various tools,{"   "}
                <a
                    href="https://en.wikipedia.org/wiki/Programming_language"
                    target="_blank"
                    className="font-medium text-[#57debe]  hover:underline hover:cursor-pointer underline-offset-4 decoration-0"
                >
                    programming languages
                </a>{" "}
                and <span className="font-medium text-[#57debe] hover:underline hover:cursor-pointer underline-offset-4 decoration-0 ">frameworks</span> to
                expand my knowledge and skills.
            </p>
            <p
                className={`mt-8 text-lg italic text-slate-400 font-normal ${space_Grotesk.className}`}
            >
                Being a{" "}
                <a
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/Software_engineering"
                    className="font-medium text-[#57debe] hover:underline hover:cursor-pointer underline-offset-4 decoration-0  "
                >
                    developer
                </a>{" "}
                is not just a job for me; it's a way of life. I'm always exploring new
                ideas and experimenting with different technologies. I always strive to
                push the boundaries and improve my craft. I aim for{" "}
                <span className="font-medium text-[#57debe] hover:underline hover:cursor-pointer underline-offset-4 decoration-0">greatness</span> in
                everything I create.
            </p>
            <p className={`mt-8 text-lg italic text-slate-400 font-normal ${space_Grotesk.className}`}>
                When the night comes, you'll often find me enthusiastically <span className="font-medium text-[#57debe] hover:underline hover:cursor-pointer underline-offset-4 decoration-0">learning</span> how
                to write the best software possible and optimizing it to run even
                better. The thrill of <span className="font-medium text-[#57debe] hover:underline hover:cursor-pointer underline-offset-4 decoration-0">making software</span> more efficient and effective keeps
                me going.
            </p>
        </div>
    );
}
