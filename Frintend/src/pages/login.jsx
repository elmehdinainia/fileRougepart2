import {React, useState} from 'react'
import image from '../assets/images.png'
import { useDispatch } from 'react-redux'
import {login} from '../actions/action'

export default function Login(){


  const dispatch = useDispatch()
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [msg, setMsg] = useState("")



  const handleEmail = (e) => {
    return setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    return setPassword(e.target.value)
  }


  

  // const API_URL = "http://localhost:4000/api/user/login"



  const loginHandler = async () => {


    const user = {
    
      email,
      password,
    
    }
    dispatch(login(user))
    // // console.log(user)
    
    //   const result = await axios.post(API_URL,user)
    //   .then((res) => {
    //     console.log(res)
    //     setMsg(res.data.msg)

       
    //     localStorage.setItem('data',res.data.user.name)
    //     localStorage.setItem('role',res.data.user.role)
    //     window.location.replace('/'+ res.data.user.role);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })

  }



  return (
    
   <div className="w-9/12" >
       <div 
        className='flex w-full justify-center items-center justify-center rounded-full' >
          <img className="h-48  rounded-full h-28" src={image} alt="" />
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
     
    {/* <p className="text-green-500 text-center  my-5">{ succes && succes }</p> */}

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" name="email"  value={email} onChange={handleEmail}/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
      password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" name="password"  value={password} onChange={handlePassword}/>
    </div>
    <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                <a href="/register" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">creer a compts?</a>
                </div>

            </div>
            <a href="/forgetpassword" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>



    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6 w-9/12 " type="button" onClick={loginHandler}>
        Sign In
      </button>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    ©2020 Acme Corp. All rights reserved.
  </p>
</div>

  )
}

