import { useEffect, useState } from "react"; // Named export
import Shimmer from "./Shimmer"; // Default export
import RestaurantCard from "./RestaurantCard"; // Assuming RestaurantCard component is imported here
import { swiggy_API } from "../src/Components/Utilis";

// Filter the restaurant data according to the input type
function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

// Body Component for body section: It contains all restaurant cards
const Body = () => {
  // State variables
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect for one-time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants();
  }, []);

  // async function to fetch Swiggy API data
  async function getRestaurants() {
    try {
      const response = await fetch(swiggy_API); // Assuming swiggy_API is the correct URL
      const json = await response.json();

      // Function to extract restaurant data from the JSON response
      function extractRestaurants(jsonData) {
        for (const card of jsonData?.data?.cards || []) {
          const restaurants =
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (restaurants) {
            return restaurants;
          }
        }
        return [];
      }

      const resData = extractRestaurants(json);

      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  }

  // Function to handle search
  const searchData = (searchText, restaurants) => {
    if (searchText) {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage(filteredData.length === 0 ? "No matching restaurants found" : "");
    } else {
      setFilteredRestaurants(restaurants);
      setErrorMessage("");
    }
  };

  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => searchData(searchText, allRestaurants)}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
