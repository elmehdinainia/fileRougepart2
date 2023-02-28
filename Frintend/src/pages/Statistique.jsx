import React from 'react'
import {Link} from 'react-router-dom'

export default function Statistique() {
  return (
    <div className="w-full h-screen ml-3 flex ">
               <div className=" ml-3 mt-25 ">
             <Link to="#" className=" block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">client</h5>
                   <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </Link>
                </div>

                <div className=" ml-3 mt-25 ">
               <Link to="#" className=" block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">livreur</h5>
                   <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </Link>
                </div>

                <div className=" ml-3 mt-25 ">                 <Link to="#" className=" block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">produit</h5>
                   <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </Link>
               </div>

               <div className=" ml-3  ">
               <Link to="#" className=" block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About</h5>
                   <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>               </Link>
                </div>
           
       </div> 

  )
}
