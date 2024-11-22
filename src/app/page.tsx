"use client";

import Image from "next/image";
import { useDvdScreensaver } from "./useDvdScreensaver";

export default function Home() {
  const { elementRef } = useDvdScreensaver<HTMLDivElement>({ speed: 2 });
  return (
    <main className="relative h-screen w-screen bg-[#F0F0F0]">
      <div className="w-full h-full">
        <div className="relative w-[250px] h-[200px]" ref={elementRef}>
          <Image src="/lego.png" alt="lego" fill />
        </div>
      </div>
    </main>
  );
}
