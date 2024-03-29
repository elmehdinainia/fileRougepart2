import { React, useState, useEffect, useRef } from 'react'
import axios from "axios";
import Header from '../../components/Header'
import HomeCard from '../../components/HomeCard'
import {GrNext,GrPrevious} from "react-icons/gr" 
import Footer from '../../components/Footer'
import AllProduct from '../../components/Allproduct'

import CardFeature from '../../components/CardFeature';

const baseURL = 'http://localhost:5500/api/user/manager'



function Home() {
  const [repas, setrepas] = useState([])
  const affichagrep = async () => {
    const datarepas = await axios.get(`${baseURL}/GetAllProduct`)
    if (datarepas) {
      setrepas(datarepas.data)
    } else {
      console.log("error", err)
    }
  }

  const data = repas.slice(0,4) 
  const homeProductVegitable = repas.filter(el=>el.category.name ==="vegitable",[])


  
const slidProductRef = useRef()
      const prevpodyct = () =>{
        slidProductRef.current.scrollLeft -= 200
      }
      const nextpodyct = () =>{
        slidProductRef.current.scrollLeft += 200
      }


  useEffect(() => {
    affichagrep()
  }, [])



  return (
    <div>

<Header/>
<div className="md:flex gap-4 py-2 pt-16 ml-3">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full mt-3">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7 mt-3"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            The Fasted Delivery in{" "}
            <span className="text-red-600 text-">Your Home</span>
          </h2>
          <p className="py-3 text-base ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
            Order Now
          </button>
          </div>

   
          <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          { data && data.map(el=>{
            return(
              <HomeCard
                 id={el._id}
                 images={el.images[0]}
                 name={el.name}
                 price={el.price}
                 category={el.category}

              />
            )
            
          })}
         
        </div>
     


        </div>
        <div className=''>
          <div className='flex w-full items-center'>
            <h2 className='font-bold text-2xl text-slate-800 mb-2 ml-3'>
              Fresh Vegitable
            </h2>
            <div className='ml-auto flex gap-4'>
              <button onClick={prevpodyct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 ronded'> <GrPrevious /></button>
              <button onClick={nextpodyct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 ronded'><GrNext/> </button>

             
            </div>
            
          </div>
          <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slidProductRef}>
            {
              homeProductVegitable.map(el=>{
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
        

        {/* <div className='my-5'>
            <h2 className='font-bold text-2xl text-slate-800 mb-2 ml-3'>
              Your Product
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



        </div> */}
        <AllProduct heading={"Your Product"}/>

        
              <Footer/>
    </div>
  )
}

export default Home