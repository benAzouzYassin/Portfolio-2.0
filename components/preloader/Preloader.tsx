"use client"

import useLoader from "./useLoader"

export default function Preloader() {
    const loading = useLoader()
    return <>
        {loading && <main className=" flex items-center justify-center overflow-hidden absolute z-[999] w-[99.5vw] bg-black h-[100vh]">
        <img className="w-32 animate-spin -mt-20" src="/loader.svg" alt="Loading icon"/>
        </main>}
    </>
}