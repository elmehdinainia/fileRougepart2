import React from 'react'
import "../index.css";
import {Link} from "react-router-dom"
import image from "../assets/validate.png";



export default function validemail() {
  return (
    <div>
      <div style={{ width: '100%', textAlign: 'center', marginTop: '2rem' }}>
      <div 
     id="alert-additional-content-3" className=" alet  p-4 mb-4 border border-green-300 rounded-lg bg-green-50 dark:bg-green-200 m" role="alert">
    <div className="flex items-center">
      <svg aria-hidden="true" className="w-5 h-5 mr-2 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
      <span className="sr-only">Info</span>
      <h3 className="text-lg font-medium text-green-700 dark:text-green-800">This is a success alert</h3>
    </div>
    <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
      More info about this info success goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
    </div>
    <div className="flex">

    <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                 >
                  Go back home
                </Link>
    </div>
            
      </div>


      <img className="valid animate__animated animate__bounce" src={image} alt="logoMarhaba" />

    </div>
    <div>
          

    </div>



 

    </div>

   
  )
}
