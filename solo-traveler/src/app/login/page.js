"use client";

import { signIn } from "next-auth/react";
import { Julius_Sans_One } from "next/font/google";

// Logo font
const juliusSansOne = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400",
});

export default function LoginPage() {
  return (
    <div className="md:flex md:items-center md:gap-12">
      <a className="flex">
        <span className="sr-only">Home</span>
        <h1 className={`${juliusSansOne.className} text-black text-4xl `}>
          soloGO
        </h1>
        <h2 className="text-black text-2xl">Welcome back, traveller</h2>
      </a>
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        style={{ backgroundColor: "#C14455" }}
        className="text-white px-4 py-2 rounded"
      >
        Log In
      </button>
    </div>
  );
}
