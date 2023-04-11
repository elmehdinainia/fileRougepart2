import React from 'react'
import {TbMinus,TbPlus} from "react-icons/tb"
import {AiFillDelete}  from "react-icons/ai"
import { useDispatch } from 'react-redux'
const imagePath = 'http://localhost:5500/images'
import {deletCartItem,increasQty,descreasQty} from "../../redux/productsSlice"



function CardProduct({id,name,images,category,description,qty,total,price}) {
  const dispatch = useDispatch()
  return (
    <div className="bg-red-600 p-2 flex gap-4 mt-2 rounded border-2 border-red-300">
    <div className="p-3 bg-white rounded overflow-hidden">
      <img src={`${imagePath}/${images}`} className="h-27 w-40 object-cover " />
    </div>
    <div className="flex flex-col gap-1 w-full ">
      <div className='flex justify-between'>
          <h3 className="font-semibold text-white  capitalize text-lg md:text-xl">
            {name}
          </h3>
          <div className='cursor-pointer text-slate-700  hover:text-red-700 text-2xl' onClick={()=>dispatch(deletCartItem(id))}>
          <AiFillDelete />
          </div>
          </div>

          
          <p className="">
            <span className="font-bold"  ><span className="font-medium text-white "> Price :</span> {price}</span>
            <span className="text-blue-800 font-medium"> DH</span>
          </p>
       
          <div className="flex">
            <p className="text-white font-medium">Category : </p>
            <p className="text-dark font-medium pl-1"
            >
             {category.name}
            </p>
            </div>

            <div className="flex">
            <p className="text-white font-medium">Description : </p>
            <p className="text-dark font-medium pl-1 "
            >
            {description}
            </p>
          </div>

           <div className='flex justify-between w-full '>
          <div className="flex gap-3 item-center  ">
          <button className="bg-slate-300 py-1 mt-2 rounded hover:bg-yellow-600 p-1 " onClick={()=>dispatch(increasQty(id))}><TbPlus/></button>
            <p className='font-semibold p-1'>{qty}</p>
          <button  className="bg-slate-300 py-1 mt-2 rounded hover:bg-yellow-600 p-1" onClick={()=>dispatch(descreasQty(id))} ><TbMinus/></button>
          </div>
          <div className='flex item-center gap-2 font-bold text-slate-600 '>
            <p>Total : </p>
            <p className=''>{total}</p>


          </div>
          </div>
   
    </div>
    </div>

    )
}

export default CardProduct