"use client";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

// Sologan Font
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "400", // Add weights as needed
});

export default function Home() {
  return (
    <div className="">
      <div className="mt-[20vh] flex-col">
        <div className={`${playfairDisplay.className} text-6xl text-center`}>
          <p>
            Books teach you, <br></br> but roads show you
          </p>
        </div>
        <Image
          src={"/airplane.png"}
          alt="airplane"
          width={1000}
          height={1000}
          className="mx-auto mt-15"
        />
      </div>
    </div>
  );
}
