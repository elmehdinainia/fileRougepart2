import { React, useState, useEffect } from 'react'
import axios from "axios";
import Header from '../../components/Header'
import HomeCard from '../../components/HomeCard'
import CardFeature from '../../components/CardFeature';

const baseURL = 'http://localhost:5500/api/user/manager'



function Home() {
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
  const data = repas.slice(0,4) 
  const homeProductVegitable = repas.filter(el=>el.category.name ==="vegitable",[])
  console.log(homeProductVegitable)
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
                 images={el.images[0]}
                 name={el.name}
                 price={el.price}
                 category={el.category}

              />
            )
            
          })}
         
        </div>
     

       
        </div>
        <div>
          <h2 className='font-bold text-2xl text-slate-800 mb-2 ml-3'>Fresh Vegitable</h2>
          <div className='flex'>
            {
              homeProductVegitable.map(el=>{
                return(
                  <CardFeature
                  key={el._id}
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

    </div>
  )
}

export default Home