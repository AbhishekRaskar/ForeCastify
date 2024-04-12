import React, { useState, useEffect } from "react";
import axios from "axios";

const Today = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100"
        );
        setCities(response.data.results);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredCities(
      cities.filter((city) =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, cities]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleForecastClick = (city) => {
    const { name, coordinates } = city;
    const { lon, lat } = coordinates;
    console.log("Coordinates:", lon, lat);

    localStorage.setItem(
      "forecastCity",
      JSON.stringify({ cityName: name, lon, lat })
    );

    window.location.href = "/forecast";
  };

  const renderTableData = () => {
    return filteredCities.map((city) => (
      <tr key={city.geoname_id}>
        <td className="px-4 py-2">{city.name}</td>
        <td className="px-4 py-2 text-center">{city.cou_name_en}</td>
        <td className="px-4 py-2 text-center">{city.timezone}</td>
        <td className="px-4 py-2 text-center">{city.population}</td>
        <td className="px-4 py-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-thin py-2 px-4 rounded"
            onClick={() => handleForecastClick(city)}
          >
            Get Forecast
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="w-50 mx-auto">
      <input
        type="text"
        placeholder="Search City"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded px-4 py-2 mx-auto block"
        style={{ width: "30%" }}
      />
      <br />
      {loading ? (
        <div className="text-center">
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <table className="w-95 mx-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left bg-gray-200">City Name</th>
              <th className="px-4 py-2 text-center bg-gray-200">Country</th>
              <th className="px-4 py-2 text-center bg-gray-200">Timezone</th>
              <th className="px-4 py-2 text-center bg-gray-200">Population</th>
              <th className="px-4 py-2 text-center bg-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      )}
      <style>{`
        .loader {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-left-color: #333;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
          margin: 20px auto;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Today;
