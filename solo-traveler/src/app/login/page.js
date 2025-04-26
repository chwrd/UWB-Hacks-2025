"use client";

import { signIn } from "next-auth/react";
// import { img } from "next/image";
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
      <div className="flex w-full bg-[#F9D5D3] justify-between shadow-md rounded-xl mt-15 mb-15 ml-50 mr-50">
        <form className="max-w-s px-12 pt-15 pb-15 mb-4">
          <h1
            className={`${juliusSansOne.className} text-black text-4xl text-center`}
          >
            soloGO
          </h1>
          <h2 className={`${istokWeb.className}, text-center mt-4 mb-4`}>
            Welcome back traveller
          </h2>
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
            <div className="inline-flex items-center justify-center w-full relative">
              <hr className="w-64 h-px my-8 border-0 bg-black"></hr>
              <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 bg-[#F9D5D3] dark:text-black ">
                or
              </span>
            </div>
            <a
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className={`${istokWeb.className} text-blue-700 text-center underline`}
            >
              Log in with Google
            </a>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-[#C14455] hover:bg-[#962a39] w-full text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline text-content"
              type="button"
            >
              Log In
            </button>
          </div>
        </form>
        <img
          src="/woman.jpg"
          alt="Background image of a woman"
          width={300}
          height={300}
          className="p-3 rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
