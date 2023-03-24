import React from "react";
import { Link } from "react-router-dom";
const imagePath = 'http://localhost:5500/images'


const HomeCard = ({ name, images, category, price }) => {
  return (
    <div className="bg-white shadow-md p-2 rounded min-w-[150px]">
      {name ? (
        <>
        <Link to="" onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})} >
          <div className="w-40 min-h-[150px]">
            <img src={`${imagePath}/${images}`} className="h-full w-full" />
          </div>
          <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
            name : {name}
          </h3>
          <p className="text-center text-slate-500  font-medium">category :{category.name}</p>
          <p className="text-center font-bold">
            <span className="text-red-500">₹</span>
            <span>{price}</span>
          </p>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>ff</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
