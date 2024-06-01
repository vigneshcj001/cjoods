import React, { useEffect } from 'react';
import RestaurantSectionStyles from '../Components/RestaurantSectionStyles.css'
import {swiggy_API} from './Utilis/constants';
const RestaurantSection = () =>{
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(()=>{
    getRestaurants();
  },
  [])

  async function getRestaurants(){
    // Handle the error using try... catch
    function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
  }


  return (
    <div className='rest-container'>
        <h1 className='food-title'>Foods</h1>
        <hr className='horizontal-line'/>
        
    </div>
  );
}

export default RestaurantSection;