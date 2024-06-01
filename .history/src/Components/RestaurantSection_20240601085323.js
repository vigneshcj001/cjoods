import React, { useState, useEffect } from 'react';
import RestaurantCard from '../Components/RestaurantCard';
import { swiggyAPI } from '../utils/constants';

const RestaurantSection = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(swiggyAPI);
      const json = await data.json();
      const restaurants = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      setListOfRestaurants(restaurants || []); // Update state with the fetched data
    } catch (error) {
      console.error("Error fetching restaurant data: ", error);
    }
  };

  const filterTopRated = () => {
    const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4);
    setListOfRestaurants(filteredList);
  };

  const handleSearch = () => {
    console.log(searchText);
    const filteredList = listOfRestaurants.filter(res => 
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurants(filteredList);
  };

  return (
    <div className='RestaurantSection'>
      <h1 className="food-title">Foods</h1>
      <hr className="horizontal-line" />
      <div className='filter'>
        <div className='search'>
          <input 
            type='text' 
            className='search-box' 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>
            Search
          </button>
        </div>
        <button 
          className='filter-btn'
          onClick={filterTopRated}
        >
          Top Rated
        </button>
      </div>
      <div className='rest-container'>
        {listOfRestaurants.map(restaurant => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantSection;
