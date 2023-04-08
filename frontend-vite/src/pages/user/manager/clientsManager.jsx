import { React, useState, useEffect } from "react";
import Input from "../../../components/Input";
import axios from "axios";

   const baseURL = 'http://localhost:5500/api/user/manager'
   function ClientsManager() {
   
  const [clients, setClients] = useState([])
  const [filterVal,setFilterVal] = useState("")
  const [searchApiData,setsearchApiData] = useState([])
  
  const affichageclient = async () => {
    const dataclient = await axios.get(`${baseURL}/listclient`)
    if (dataclient) {
      setClients(dataclient.data)
      setsearchApiData(dataclient.data)
    } else {
      console.log("error", err)
    }
  }



  const handleFillter = (e) =>{
    if(e.target.value == ''){
      setClients(searchApiData)
    }else{
     const filterResult = searchApiData.filter(item=>item.first_name.toLowerCase().includes(e.target.value.toLowerCase()) || item.email.toLowerCase().includes(e.target.value.toLowerCase()) || item.last_name.toLowerCase().includes(e.target.value.toLowerCase()) || item.address.toLowerCase().includes(e.target.value.toLowerCase()))
     setClients(filterResult)
    }
    setFilterVal(e.target.value)

  }

  const bannclient = async (e) => {
    let id= e.target.value
    await axios.put(`${baseURL}/updateuser/${id}`)
    .then((res)=>{
      console.log(res.data)
      affichageclient()
    })
    .catch((err) => {
      console.log(err)
    })
  }


  useEffect(() => {
    affichageclient()
  }, [])

  return (
    <div>
      <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 p-3 font-bold text-3xl`}>
        <h1>List Clients</h1>
      </div>


      <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg`}>
      <form class="flex items-center">   
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-50">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="text" id="simple-search" value={filterVal} onInput={(e)=>handleFillter(e)} class= "   border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
          </div>
          <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-red-700 rounded-full border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span class="sr-only">Search</span>
          </button>
      </form>


        <table className="mt-12 w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase text-center bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-2 px-4">Name Complete</th>
              <th scope="col" className="py-2 px-4">Phone</th>
              <th scope="col" className="py-2 px-4">Email</th>
              <th scope="col" className="py-2 px-4">address</th>

              <th scope="col" className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => {
              return (
                <tr key={index} className="bg-white border-b text-center dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    {client.first_name} {client.last_name}
                  </td>
                  <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    <span>+</span>{client.phone}
                  </td>
                  <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    {client.email}
                  </td>
                  <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    {client.address}
                  </td>
                  <td className="py-4 px-6 items-center">
                    <button className={client.isBanned ? "px-4 py-1 btn bg-red-600 text-white rounded" :  "px-4 py-1 rounded bg-green text-white"} onClick={bannclient} value={client._id}>
                      {(client.isBanned )? " banne " : "banned " }
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ClientsManager