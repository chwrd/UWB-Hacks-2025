"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { Julius_Sans_One, Istok_Web } from "next/font/google";

// Logo font
const juliusSansOne = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400",
});

// Text font
const istokWeb = Istok_Web({
  subsets: ["latin"],
  weight: "400",
});

export default function LoginPage() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/woman.jpg')" }}
    >
      <div className="flex  bg-[#F9D5D3] justify-center shadow-md rounded-xl p-15">
        <form className="max-w-s px-12 pt-15 pb-15 mb-4">
          <h1
            className={`${juliusSansOne.className} text-black text-4xl text-center`}
          >
            soloGO
          </h1>
          <h2 className={`${istokWeb.className}, text-center mt-4 mb-4`}>
            Welcome back traveller
          </h2>

          {/* Login */}
          <div>
            <div className="mb-4">
              <input
                className="bg-white shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <input
                className="bg-white shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
              <p className="text-red-500 text-xs italic float-right">
                Forget password?
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="bg-[#C14455] hover:bg-[#962a39] w-full text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline text-content"
                type="button"
              >
                Log In
              </button>
            </div>

            {/* Divider */}
            <div className="inline-flex items-center justify-center w-full relative">
              <hr className="w-64 h-px my-8 border-0 bg-black"></hr>
              <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 bg-[#F9D5D3] dark:text-black ">
                or
              </span>
            </div>

            {/* Login with Google */}
            <div className="flex justify-center items-center ">
              <a
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className={`${istokWeb.className} text-center align`}
              >
                <button class="bg-white px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                  <Image class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"></Image>
                  <span className="text-black">Login with Google</span>
                </button>
              </a>
            </div>
          </div>
        </form>

        {/* Card image */}
        <Image
          src="/woman.jpg"
          alt="Background image of a woman"
          width={300}
          height={300}
          className="p-3 rounded-xl object-cover"
        />
      </div>
    </div>
  );
}
