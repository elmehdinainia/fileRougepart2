import {React,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function Ressetpassword() {
  
    const {token} = useParams()

    const [password, setPassword] = useState("")
    const [msg,setMsg] = useState(false)
    


    const handlpassword = (e)=>{
       return setPassword(e.target.value) 
    }

    const url = `http://localhost:4000/api/user/update_password/${token}`
    const user = {password}


    const submitaded = () => {
    
    axios.post(url,user)
    .then((res) =>{
   
      console.log(res);
      setMsg(res.data.message);


    }) 
    .catch ((error)=>{
      console.log(error.data);
    
    })
  }
    return (
     
              <div className="w-9/12" >
                <div 
                  className='flex w-full justify-center items-center justify-center rounded-full' >
                    {/* <img className="h-48  rounded-full h-28" src={image} alt="" /> */}
                  </div>
              <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 shadow-xl">


              {msg &&   <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
  <div className="flex">
    <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p className="text-sm">{msg}</p>
    </div>
  </div>
</div>
}

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              update password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" name="password" value={password} onChange={handlpassword} />
              </div>





              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6 w-9/12 " type="button" onClick ={submitaded} >
                reset password
                </button>
              </div>
              </form>

      </div>
    )
}