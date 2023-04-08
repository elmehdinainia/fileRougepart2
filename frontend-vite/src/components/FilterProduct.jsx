import React from 'react'
import {CiForkAndKnife} from "react-icons/ci"

const FilterProduct = ({category ,onClick}) => {
  return (
    <div onClick={onClick}>
        <div className='text-3xl p-3 bg-yellow-500 p-5 rounded-full'>
        <CiForkAndKnife/>
        </div>
        <p className='text-center font-medium my-1 capitalize'>{category}</p>
   </div>
  )
}

export default FilterProduct