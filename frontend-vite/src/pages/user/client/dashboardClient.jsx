import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectIsOpen } from '../../../store/slices/cart.sclice';
import Shoppingcart from './shoppingCart';

const baseURL = 'http://localhost:5500/api/user/manager'
const imagePath = 'http://localhost:5500/images'

function Client() {
  const [repas, setrepas] = useState([])
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen)
  const affichagrep = async () => {
    const datarepas = await axios.get(`${baseURL}/GetAllProduct`)
    if (datarepas) {
      setrepas(datarepas.data)
      console.log(datarepas.data)
    } else {
      console.log("error", err)
    }
  }
  useEffect(() => {
    affichagrep()
  }, [])

  return (
    <div>
      <div className={`${open ? 'ml-72' : 'ml-20'} mb-4 duration-300 flex flex-wrap justify-center`}>
        {isOpen ? <Shoppingcart /> : null}
        {repas.map((reppa, index) => (
          <div key={index} className="w-72  max-w-sm mb-4 bg-white rounded-lg shadow-md mt-4 drop-shadow-2xl mr-6">  
          <img className='w-72 h-72 mb-5 p-5' src={`${imagePath}/${reppa.images}`} alt="" />
            <div className="px-5 pb-5 items-end ">
              <h1 className="font-semibold tracking-tight text-black text-4xl">{reppa.name}</h1>
              <p className="text-sm font-normal">{reppa.description} </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-black"><span className='text-green'>$</span>{reppa.price}</span>
                <Link to='#' onClick={() => dispatch(addItem({...reppa,quantity: 1}))} className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Client