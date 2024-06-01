import React from 'react';
import RestaurantSectionStyles from '../Components/RestaurantSectionStyles.css'
import {swiggy_API} from './Utilis/constants';
const RestaurantSection = () =>{
  const [allRestaurants, setAllRestaurants] = useState([]);
  return (
    <div className='rest-container'>
        <h1 className='food-title'>Foods</h1>
        <hr className='horizontal-line'/>
        
    </div>
  );
}

export default RestaurantSection;