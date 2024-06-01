import RestaurantCard from '../Components/RestaurantCard';
import { useState,useEffect } from 'react';

const RestaurantSection=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState();
    useEffect(()=>{ },[]);
    return (
        <div className='RestaurantSection'>
            <h1 className="food-title">Foods</h1>
            <hr className="horizontal-line" />
            <div className='filter'>
                <button 
                className='filter-btn'
                onClick={()=>{
                    const filteredList=listOfRestaurants.filter(
                        (res)=>res.data.avgRating>4
                    );
                }}
                >Top Rated</button>
            </div>
            <div className='rest-container'>
                {listOfRestaurants.map((restaurant)={
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                })}

            </div>

        </div>

    )
}