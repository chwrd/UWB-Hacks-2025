"use client";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

// Sologan Font
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "400", // Add weights as needed
});

export default function Page() {
  return (
    <>
      {/* Introduction */}

      <div className="my-30 flex-col">
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

      {/* Site Summary */}
      <section className="bg-gray-100">
        <div className="py-40 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-7">Explore the World with SoloGo</h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
          SoloGo is your passport to bold adventures around the world. Stay informed with real-time safety updates, uncover AI-powered cultural insights personalized to your journey, and forge connections with fellow travelers as you chart your own path across the globe.
          </p>
        </div>
      </section>

      {/* GlobeGuard Content */}
      <section>
        <div className="mx-auto my-20 max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  GlobeGuard
                </h2>

                <p className="mt-4 text-gray-700">
                  GlobeGuard keeps you informed with real-time safety updates from trusted government sources, helping you travel smart and confident
                </p>
              </div>
            </div>

            <div>
              <Image
                src={"/globeGuardHome.webp"}
                className="rounded"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* CultureCompass Content */}
      <section>
        <div className="mx-auto mb-20 max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  CultureCompass
                </h2>

                <p className="mt-4 text-gray-700">
                  Culture Compass helps you navigate key cultural and infrastructure differences across countries. Whether it’s which side of the road people drive on, the type of electrical outlets you’ll need, or local customs you should know, we make it easy to prepare for your journey. Explore the world with confidence
                </p>
              </div>
            </div>

            <div className="order-first">
              <Image
                src="/cultureCompassHome.webp"
                className="rounded"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SoloNet Content */}
      <section>
        <div className="mx-auto mb-20 max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  SoloNet
                </h2>

                <p className="mt-4 text-gray-700">
                  Traveling alone doesn’t mean you’re on your own. SoloNet helps you connect, share, and support each other on your journeys
                </p>
              </div>
            </div>

            <div>
              <Image
                src="/soloNetHome.webp"
                className="rounded"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
