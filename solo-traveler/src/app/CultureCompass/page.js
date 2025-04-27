// export default function CultureCompass() {


//     return (



//     );
// }

'use client';

import { useEffect } from 'react';

export default function CultureCompass() {
    useEffect(() => {
        const button = document.getElementById('button');
        const form = document.getElementById('form');

        function handleSubmit(event) {
            event.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log('Form submitted:', data);
        }

        form?.addEventListener('submit', handleSubmit);

        return () => {
            form?.removeEventListener('submit', handleSubmit);
        };
    }, []);

    return (
        <>
            {/* Introductionn */}
            <div className="flex flex-col items-center mt-20">
                <h1 className="text-4xl font-bold">Culture Compass</h1>
                <p className="text-lg mt-4"> Discover key differences laws, culture, with personalized tips powered by AI!</p>
            </div>

            {/* Form */}
            <div className="min-h-screen  p-0 sm:p-12">
                <style jsx>{`
        .-z-1 {
          z-index: -1;
        }
        .origin-0 {
          transform-origin: 0%;
        }
        input:focus ~ label,
        input:not(:placeholder-shown) ~ label,
        textarea:focus ~ label,
        textarea:not(:placeholder-shown) ~ label,
        select:focus ~ label,
        select:not([value='']):valid ~ label {
          --tw-translate-x: 0;
          --tw-translate-y: -1.5rem;
          --tw-rotate: 0;
          --tw-skew-x: 0;
          --tw-skew-y: 0;
          --tw-scale-x: 0.75;
          --tw-scale-y: 0.75;
          transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        }
        input:focus ~ label,
        select:focus ~ label {
          --tw-text-opacity: 1;
          color: rgba(0, 0, 0, var(--tw-text-opacity));
          left: 0px;
        }
      `}</style>
                <div className="mx-auto max-w-md p-7 bg-white border-0 shadow-lg sm:rounded-3xl">

                    <form id="form" noValidate>
                        {/* Country 1 and Country 2 */}
                        <div className="flex flex-row space-x-4">
                            <div className="relative z-0 w-full mb-5">
                                <input
                                    type="text"
                                    name="country1"
                                    placeholder=" "
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label htmlFor="country1" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
                                    Country 1
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5">
                                <input
                                    type="text"
                                    name="country2"
                                    placeholder=" "
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label htmlFor="country2" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
                                    Country 2
                                </label>
                            </div>
                        </div>

                        {/* Age */}
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="number"
                                name="age"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label htmlFor="age" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
                                Age
                            </label>
                        </div>

                        {/* Date 1 and Date 2 */}
                        <div className="flex flex-row space-x-4">
                            <div className="relative z-0 w-full mb-5">
                                <input
                                    type="date"
                                    name="date1"
                                    placeholder=" "
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label htmlFor="date1" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
                                    Date 1
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5">
                                <input
                                    type="date"
                                    name="date2"
                                    placeholder=" "
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label htmlFor="date2" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
                                    Date 2
                                </label>
                            </div>
                        </div>

                        {/* Nationality */}
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                name="nationality"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label htmlFor="nationality" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
                                Nationality
                            </label>
                        </div>

                        {/* Ethnicity */}
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                name="ethnicity"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label htmlFor="ethnicity" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
                                Ethnicity
                            </label>
                        </div>

                        {/* Party Members */}
                        <div className="relative z-0 w-full mb-5">
                            <select
                                name="travelingParty"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                onChange={(e) => {
                                    const partyMessage = document.getElementById('partyMessage');
                                    if (e.target.value >= '1') {
                                        partyMessage.classList.remove('hidden');
                                    } else {
                                        partyMessage.classList.add('hidden');
                                    }
                                }}
                            >
                                <option value=""></option>
                                <option value="1">Solo</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <label htmlFor="travelingParty" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
                            Traveling Party
                                </label>

                        </div>

                        {/* Solo Message */}
                        <div id="partyMessage" className="hidden text-gray-700 text-sm">
                            <input
                                type="text"
                                name="hi"
                                placeholder="Add additional information - disability, etc."
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                        </div>

                        {/* Button */}
                        <button
                            id="button"
                            type="submit"
                            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
