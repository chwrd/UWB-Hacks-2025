"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Istok_Web } from "next/font/google";

// Text font
const istokWeb = Istok_Web({
  subsets: ["latin"],
  weight: "400",
});

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full h-screen bg-cover bg-center justify-between">
      <div className="flex">
        <div className="bg-[#E3F2FD] rounded-2xl h-screen w-[30%] p-2 m-4 justify-center text-center">
          <img
            src="/defaultpfp.png"
            alt="default profile picture"
            width={300}
            height={300}
            className="p-3 rounded-full mx-auto mb-6 max-w-full h-auto"
          />
          <br></br>
          <h1 className={`${istokWeb.className} text-2xl font-bold`}>
            User Profile
          </h1>
          <p>I love travelling!</p>
        </div>
        <div className="ml-4">
          <button
            className={`${istokWeb.className} bg-[#E3F2FD] hover:bg-[#afcce0] front-bold p-2 pl-4 pr-4 m-4 rounded-2xl`}
            type="button"
          >
            Upcoming
          </button>
          <button
            className={`{istokWeb.className} bg-[#E3F2FD] hover:bg-[#afcce0] front-bold p-2 pl-4 pr-4 m-4 rounded-2xl`}
            type="button"
          >
            Travel History
          </button>
          <div className="bg-[#FDEDEC] w-3/7 front-bold ml-4 rounded-2xl">
            <img
              src="/Japan1.jpg"
              alt="Image of Japan 1"
              className="rounded h-full object-cover"
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
  );
}
