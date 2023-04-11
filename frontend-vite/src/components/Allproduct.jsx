import { React, useState, useEffect } from 'react'
import axios from "axios";

import CardFeature from './CardFeature'
import FilterProduct from './FilterProduct'
const baseURL = 'http://localhost:5500/api/user/manager'


const Allproduct = ({heading}) => {


  const [repas, setrepas] = useState([])
  const affichagrep = async () => {
    const datarepas = await axios.get(`${baseURL}/GetAllProduct`)
    if (datarepas) {
      setrepas(datarepas.data)
      // console.log(datarepas.data)
    } else {
      console.log("error", err)
    }
  }
        const categoryList = [...new Set(repas.map(el=>el.category.name))]
        // console.log(categoryList)

  const [dataFilter,SetdataFilet] = useState([])
  const handleFilterProduct = (category) =>{
    const filter = repas.filter(el => el.category.name === category)
         

    SetdataFilet(()=>{
      return[     
      ...filter
      ]
    })
  }
        useEffect(() => {
          affichagrep()
         }, [])
            useEffect(() => {

    SetdataFilet(repas)
  }, [repas])
     
  return (
    <div className='my-5'>
<h2 className='font-bold text-2xl text-slate-800 mb-2 ml-3'>
 {heading}
    </h2>

    <div className='flex gap-4 justify-center overflow-scroll scrollbar'>
      {
      categoryList[0] && categoryList.map(el=>{
        return(
          <FilterProduct category={el} onClick={()=>handleFilterProduct(el)}/>
        )
      })
      }

    </div>

    <div className='flex flex-wrap justify-center gap-3'>
    {
     dataFilter.map(el=>{
    return(
      <CardFeature
      key={el._id}
      id={el._id}
      images={el.images[0]}
      name={el.name}
      price={el.price}
      category={el.category}
      description={el.description}
      />

    )
  })
}

    </div>



</div>
  )
}

export default Allproduct