"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Istok_Web } from "next/font/google";
import Image from "next/image";

// Text font
const istokWeb = Istok_Web({
  subsets: ["latin"],
  weight: "400",
});

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     router.push("/login");
  //   }
  // }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="">
      <div className="grid grid-cols-3 m-20 gap-20">
        {/* Profile Card */}
        <div className="bg-[#E3F2FD] rounded-2xl text-center col-span-1 mb-auto ml-auto pt-15 px-30 pb-[50%] flex items-center flex-col">
          <Image
            src="/defaultpfp.png"
            alt="default profile picture"
            width={200}
            height={200}
            className="p-3 rounded-full mb-6"
          />
          <br></br>
          <h1 className={`${istokWeb.className} text-2xl font-bold`}>
            User Profile
          </h1>
          <p>I love travelling!</p>
        </div>

        {/* Buttons and Travel Card */}
        <div className="flex flex-col col-span-2">
          {/* Buttons */}
          <div>
            <button
              className={`${istokWeb.className} bg-[#E3F2FD] hover:bg-[#afcce0] front-bold p-2 pl-4 pr-4 m-4 rounded-2xl`}
              type="button"
            >
              Upcoming
            </button>
            <button
              className={`${istokWeb.className} bg-[#E3F2FD] hover:bg-[#afcce0] front-bold p-2 pl-4 pr-4 m-4 rounded-2xl`}
              type="button"
            >

              Travel History
            </button>
          </div>

          {/* Travel Cards */}
          <div className="grid grid-cols-2 gap-10">
            <div className="bg-[#FDEDEC] front-bold rounded-2xl ">
              <Image
                src="/Japan1.jpg"
                alt="Image of Japan 1"
                className="rounded object-cover"
                width={500}
                height={500}
              />
              <div className="p-4">
                <h1 className="font-bold">Itinerary 1</h1>
                <a>Country: Japan</a>
                <br></br>
                <a>Date: June 6 2025 - June 26 2025</a>
                <br></br>
                <a>Cities: Tokyo, Osaka, Kyoto</a>
                <br></br>
                <a>Transport: Haneda Airport</a>
              </div>
            </div>
            <div className="bg-[#FDEDEC] front-bold rounded-2xl ">
              <Image
                src="/Japan1.jpg"
                alt="Image of Japan 1"
                className="rounded object-cover"
                width={1000}
                height={1000}
              />
              <div className="p-4">
                <h1 className="font-bold">Itinerary 1</h1>
                <a>Country: Japan</a>
                <br></br>
                <a>Date: June 6 2025 - June 26 2025</a>
                <br></br>
                <a>Cities: Tokyo, Osaka, Kyoto</a>
                <br></br>
                <a>Transport: Haneda Airport</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}