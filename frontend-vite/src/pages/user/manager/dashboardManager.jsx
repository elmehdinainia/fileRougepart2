import { React, useState, useEffect } from 'react'
import axios from "axios";

const baseURL = 'http://localhost:5500/api/user/manager'

function Client() {

  const [stati, Setstatiq] = useState([])
  
  const statistic = async () => {
    await axios.get(`${baseURL}/statistique`)
    
      .then((response) => {
        Setstatiq(response.data)
        // console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

        useEffect(() => {
          statistic()
        }, [])

  return (
    <div>
      <div className={`${open ? 'ml-72' : 'ml-20'} mb-4 duration-300 flex flex-wrap justify-center`}>
      {/* {stati.map((staticate, index) => {
        return( */}
        <div  className="w-1/4 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">staticate</h5>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">staticat</h5>
        </div>
        {/* )})} */}

      </div>

    </div>
  )
}


export default Client
