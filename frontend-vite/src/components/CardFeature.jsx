import React from "react";
import { Link } from "react-router-dom";
const imagePath = 'http://localhost:5500/images'
import { addCartItem } from "../../redux/productsSlice";
import {useDispatch} from "react-redux"



const CardFeature = ({ images, name, price, category,id,description }) => {
const dispatch = useDispatch()
  const handleAddCartProduct = (e) =>{
    dispatch(addCartItem({
      _id : id ,
      name : name,
      price:price,
      category : category,
      description:description,
      images:images
    }))

  }
  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col ">
      {images ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-28 flex flex-col justify-center items-center">
              <img src={`${imagePath}/${images}`} className="h-full" />
            </div>
            <h3 className="font-semibold text-slate-600  capitalize text-lg mt-4 whitespace-nowrap overflow-hidden ">
              {name}
            </h3>
            <p className=" text-slate-500  font-medium">{category.name}</p>
            <p className=" font-bold">
              <span className="text-red-500">₹</span>
              <span>{price}</span>
            </p>
          </Link>
          <button onClick={handleAddCartProduct}
            className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full"
       
          >
            Add Cart
          </button>
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{ description}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
