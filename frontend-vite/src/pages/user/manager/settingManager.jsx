import { React, useEffect, useState } from "react"
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import axios from "axios";

const baseURL = 'http://localhost:5500/api/user/manager'
const imagePath = 'http://localhost:5500/images'



function SettingManager() {
  const [setting, setSetting] = useState([])

  const getSetting = async () => {
    const dataManager = await axios.get(`${baseURL}/me`)
    if (dataManager) {
      setSetting(dataManager.data)
    } else {
      console.log("error", err)
    }
  }

  useEffect(() => {
    getSetting()
  }, [])

  return (


<section style={{fontFamily: 'Montserrat'}} className="flex font-medium items-center justify-center h-screen">
  <section className="w-100 mx-auto rounded-2xl px-8 py-6 shadow-lg">
    <div className="flex items-center justify-between">
      <span className="text-black-400 text-sm text-bold">2d ago</span>
      <span className="text-emerald-400">
        <img src=""/>
      </span>
    </div>
    <div className="mt-6 w-fit mx-auto">
      <img src={`${imagePath}/1671804990599.png`} className="rounded-full w-28 " alt="profile picture" srcSet />
    </div>
    <div className="mt-8 ">
      <h2 className="text-green  font-bold "><span className=" text-black">First-name : </span>{setting.first_name}<br/> <span className="text-black">Last-name : </span> {setting.last_name}</h2>
    </div>
    <p className="font-semibold text-green">
      <span className="text-black">email : </span>
     {setting.email}
    </p>
    <p className="font-semibold text-green">
      <span className="text-black">Phone : </span>
       {setting.phone}
    </p>
 
    <div className="h-1 w-full bg-black mt-8 rounded-full">
      <div className="h-1 rounded-full w-2/5 bg-yellow-500 " />
    </div>
   
  </section>
</section>



  )
}

export default SettingManager