import React from "react";
import "../index.css";
import {Link} from "react-router-dom"
import image from "../assets/404_error_with_person_looking_for-bro.png";

export default function Error404() {
  return (
    <div>
      <div style={{ width: '100%', textAlign: 'center', marginTop: '2rem' }}>
    
            
      </div>
      <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                 >
                  Go back home
                </Link>

      <img className="notfound  animate__animated animate__bounce" src={image} alt="logoMarhaba" />

    </div>
  );
}
