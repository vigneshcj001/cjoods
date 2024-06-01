import React from "react";
import { IMG_CDN_URL } from '../Utilis/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime, sla } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
