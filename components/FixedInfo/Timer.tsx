"use client"

import { Space_Grotesk } from "next/font/google";
import { useEffect, useState } from "react"

type Props = { currentDate: Date }

const space_Grotesk = Space_Grotesk({ subsets: ["latin"], weight: "500" });

function getFormattedTime(date: Date) {
    let hours = date.getHours();
    let minutes: number | string = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const seconds = date.getSeconds()
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ':' + seconds + " " + ampm;
    return strTime;
}


export default function Timer(props: Props) {


    const [currentTime, setCurrentTime] = useState(getFormattedTime(props.currentDate))
    useEffect(() => {
        const date = new Date()
        setCurrentTime(getFormattedTime(date))
        setInterval(() => {
            const date = new Date()
            setCurrentTime(getFormattedTime(date))
        }, 1000)
    }, [])
    return <p className={` transition-all ml-4 my-5 text-lg text-green-400 ${space_Grotesk.className}`}>Current time: {currentTime}</p>

}