import {React,useState} from 'react'

import Background from '../assets/password-reset-icon-flat-vector-design_116137-4571.webp'
import axios from 'axios'






export default function ForgPassword() {


  const [email , setEmail] = useState("")

  const [msg , setMsg] = useState(false)




  const handleEmail = (e) => {
    return setEmail(e.target.value)
  }



  

  const API_URL = "http://localhost:4000/api/user/forgetpassword"



  const frogetpassword = async () => {
    const user = {

      email,

  
    }
    const result = await axios.post(API_URL,user)
    .then((res) =>{
  
      console.log(res);
      setMsg(res.data);


    }) 
    .catch ((res)=>{
      console.log(res.data.message);
      // setSucces(error.data)
      // error(true)
      setMsg(res.data.message);

    })
  }

  return (

<div className="w-9/12" >
       <div 
        className='flex w-full justify-center items-center justify-center rounded-full' >
          <img className="h-48  rounded-full h-28" src={Background} alt="" />
        </div>
  <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 shadow-xl">

     
{msg &&   <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
  <div className="flex">
    <div className="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p className="text-sm">{msg}</p>
    </div>
  </div>
</div>
}
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" name="email"  value={email} onChange={handleEmail}/>
    </div>





    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6 w-9/12 " type="button" onClick={frogetpassword} >
      reset password
      </button>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    ©2020 Acme Corp. All rights reserved.
  </p>
</div>



  )
}


