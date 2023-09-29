"use client";

import { HashLoader } from "react-spinners";

export default function Loading() {
  return (
    <main className="text-white flex items-center justify-center h-[100vh] w-[100vw] bg-black">
      <HashLoader color="#f1f1f1" size={120} speedMultiplier={1.4} />
    </main>
  );
}
