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

export default async function API() {
  let data = await fetchData();
  data = data.props.data;
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1>Travel Advisories</h1>
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