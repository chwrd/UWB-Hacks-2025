import Image from "next/image";
import { Julius_Sans_One } from "next/font/google";
import Link from "next/link";

// Logo font
const juliusSansOne = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400",
});

export default function navbar() {
  return (
    <header className="bg-gray-100 shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <h1 className={`${juliusSansOne.className} text-black text-4xl `}>
                soloGO
              </h1>
            </Link>
          </div>

          <div className="hidden md:block ">
            <nav aria-label="Global" className="flex">
              <ul className=" flex gap-6 text-sm ">
                <li>
                  <Link
                    className="text-lg text-gray-700 transition hover:text-gray-700/75"
                    href="CultureCompass"
                  >
                    {" "}
                    CultureCompass{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-lg text-gray-700 transition hover:text-gray-700/75"
                    href="GlobeGuard"
                  >
                    {" "}
                    GlobeGuard{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-lg text-gray-700 transition hover:text-gray-700/75"
                    href="SoloNet"
                  >
                    {" "}
                    SoloNet{" "}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-teal-600 hover:bg-gray-700/75 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                href="/login"
              >
                Login
              </Link>

              <div className="hidden sm:flex">
                <Link
                  className="rounded-md bg-gray-100 hover:bg-teal-600/75 hover:text-white px-5 py-2.5 text-sm font-medium text-teal-600"
                  href="#"
                >
                  Register
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
