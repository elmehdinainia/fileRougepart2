import {React, useState, useEffect} from 'react'
import axios from 'axios'

export default function() {
    const  [array,setarrray] = useState([])
    const findless = async () =>{
        const url = "http://localhost:4000/api/user/findall"
       const find =await axios.get(url)
       setarrray(find.data.user)
       console.log(find.data)
       
    }

    useEffect(()=>{
        findless();
    },[])
  return (
    <div>
        <div className="overflow-x-auto relative table shadow-xl">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-xl">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-5 px-7 p-25 ">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Email
                </th>
                <th scope="col" className="py-3 px-6">
                Role
                </th>
                <th scope="col" className="py-3 px-6">
                    verification
                </th>
                <th scope="col" className="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                array.map((data)=>(
                    <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" id={data._id}>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {data.name}
                </th>
                <td className="py-4 px-6">
                {data.email}
                </td>
                <td className="py-4 px-6">
                {data.role}
                </td>
                <td className="py-4 px-6">
                {data.verify ? "confirmed 📗":"non verified 🅱️"}
                </td>
                <td className="py-4 px-6">
                <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
                </td>
            </tr>
            </>))}
        </tbody>
    </table>
</div>
    </div>
  )
}
