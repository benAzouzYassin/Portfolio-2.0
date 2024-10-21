"use client";

import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useState } from "react";
type Props = {
    img: string;
    name: string;
    description: string;
    link: string;
    index: number;
    techStack: {
        name: string;
        textColor: string;
        bgColor: string;
    }[];
    images: string[];
};
export default function Project(props: Props) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div
                onClick={() => {
                    if (!props.images.length) {
                        return window.open(props.link);
                    }
                    if (!open && props.images.length) {
                        return setOpen(true);
                    }
                }}
                className="text-[#aeb8d3] w-full md:w-auto  ">
                <Image
                    width={750}
                    height={700}
                    className="aspect-[16/9] hover:rotate-1 hover:scale-[102%] rounded-md hover:cursor-pointer transition-transform  "
                    src={props.img}
                    alt={props.description}
                />

                <p className="lg:text-xl text-base mt-3 font-medium">
                    {props.name}
                </p>
                <p className="font-normal mt-1 lg:block hidden w-[95%]">
                    {props.description}
                </p>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger></DialogTrigger>
                <DialogContent className="bg-neutral-900 flex flex-col text-white min-w-[85vw] md:min-h-[650px] rounded-xl md:rounded-xl border-neutral-700">
                    <DialogTitle className="text-2xl !h-fit font-semibold capitalize">
                        {props.name}
                        {props.link && (
                            <Link
                                target="_blank"
                                href={props.link}
                                className="ml-2 font-sans underline text-xs underline-offset-2 text-green-500 font-medium">
                                View project
                            </Link>
                        )}
                    </DialogTitle>
                    <DialogDescription className="text-xs !h-fit -mt-3 font-medium text-neutral-200/70">
                        {props.description}
                    </DialogDescription>
                    <div className="h-full">
                        <div className="md:h-[400px] w-full  overflow-hidden rounded-lg">
                            <Carousel
                                plugins={[Autoplay()]}
                                opts={{
                                    loop: true,
                                    dragFree: true,
                                }}>
                                <CarouselContent className="">
                                    {props.images.map((img) => (
                                        <CarouselItem
                                            key={img}
                                            className="md:basis-[800px] basis-[85vw]  h-full">
                                            <img
                                                src={img}
                                                className="md:h-[400px] h-[250px] object-contain"
                                            />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselNext className="right-2 bg-neutral-200 w-7 h-7 active:scale-95 transition-all text-black absolute" />
                                <CarouselPrevious className="left-2 bg-neutral-200 text-black w-7 h-7 active:scale-95 transition-all" />
                            </Carousel>
                        </div>
                        <div>
                            <div className="flex flex-wrap items-center mt-4 gap-2">
                                {" "}
                                {props.techStack.map((item, i) => (
                                    <div
                                        key={i}
                                        className="w-fit px-3 text-[12px] rounded-md border-white/30 border font-sans font-medium py-[2px]"
                                        style={{
                                            backgroundColor: item.bgColor,
                                            color: item.textColor,
                                        }}>
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-2 pb-5 text-xs">
                                {props.description}
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
