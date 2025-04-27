import https from "https";
import axios from "axios";


async function fetchData() {
  const agent = new https.Agent({
    rejectUnauthorized: false, // Bypass SSL verification
  });

  try {
    const response = await axios.get(
      "https://dev.cadataapi.state.gov/api/TravelAdvisories",
      { httpsAgent: agent }
    );

    return {
      props: {
        data: response.data, // Pass data to the page
      },
    };

  } catch (error) {
    console.error(error);
    return {
      props: {
        data: null,
      },
    };
  }
}

export default async function GlobeGuard() {
  let data = await fetchData();
  data = data.props.data;
  return (
    <div>
      <div className="flex justify-center items-center flex-col">

        {/* Introduction */}
        <div className="flex flex-col items-center mt-15">
          <h1 className="text-4xl font-bold">Travel Advisories</h1>
          <p className="text-lg mb-5">
            Stay informed about the latest travel advisories and safety tips for your next adventure.
           </p>
        </div>

        {/* Search Bar */}
        <div className="w-screen flex justify-center items-center">
          <form action="/search" className="max-w-[480px] w-full px-4">
            <div className="relative">
              <input type="text" name="q" className="w-full border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-100" placeholder="Search Country"></input>
              <button type="submit">
                <svg
                  className=" h-5 w-5 absolute top-3.5 right-3 fill-current dark:text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 56.966 56.966"
                >
                  <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>


        {/* US Gov Advisory Data */}
        <div className="">
          {data ? (
            data.map((item) => (

              <div key={item.Title} className="m-20 pb-10 border-b border-gray-700">
                <h2 className="m-10 text-lg font-bold">{item.Title}</h2>
                <div className="m-5" dangerouslySetInnerHTML={{ __html: item.Summary }} />
              </div>
            ))
          ) : (
            <div>Error fetching data</div>
          )}
        </div>
      </div>
    </div>
  );
}