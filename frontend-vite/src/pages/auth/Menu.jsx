
import React,{useEffect,useState} from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
import Header from "../../components/Header"
import AllProduct from '../../components/Allproduct'
import {useDispatch} from "react-redux"
import { addCartItem } from "../../../redux/productsSlice";




const baseURL = 'http://localhost:5500/api/user/manager/OneProduct'
const imagePath = 'http://localhost:5500/images'




function Menu() {
  const dispatch = useDispatch()
  const params = useParams()

    const id = params.filterby
    const [details,SetdetailProduct] = useState([]);
    // const images = details.images

const  getOneProduct = async() =>{
      const datarepas = await axios.get(`${baseURL}/${id}`)
      if (datarepas) {
        SetdetailProduct(datarepas.data)
      } else {
        console.log("error", err)
      }
}
const handleAddCartProduct = (e) =>{
  dispatch(addCartItem(details))
}


    useEffect(() => {

      getOneProduct()
      console.log(details);


    }, [id])
  return(
    <>
    <Header/>
 <div className="p-2 md:p-4 ">
      <div className="w-full max-w-4xl m-auto md:flex bg-white mt-20">
        <div className="max-w-sm  overflow-hidden w-full p-5">
          <img
            src={`${imagePath}/${details?.images}`}
            className="hover:scale-105 transition-all h-full"
          />
        </div>
        <div className="flex flex-col gap-1 my-6">
          <h3 className="font-semibold text-slate-600  capitalize text-2xl md:text-4xl">
            {details.name}
          </h3>
          <p className=" text-slate-500  text-2xl"></p>
          <p className=" md:text-2xl">
            <span className="font-bold"  ><span className="font-medium text-dark-700 "> price :</span> {details.price}</span>
            <span className="text-red-500">DH</span>
          </p>
          <div className="flex">
            <p className="text-slate-600 font-medium">Description : </p>
            <p className="text-dark-700">{details.description}</p>
          </div>
          <div className="flex">
            <p className="text-slate-600 font-medium">category : </p>
            <p className="text-dark-700"
            >
             {details.category?.name}
            </p>
          </div>
          <div className="flex gap-3">
          <button className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">Buy</button>
          <button  className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]" onClick={handleAddCartProduct}>Add Cart</button>
          </div>
   
        </div>
      </div>
      <AllProduct heading={"ALL Product"}/>

    
    </div>
    </>
    
  )
}

export default Menu