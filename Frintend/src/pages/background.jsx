import '../index.css'
import React from 'react'
import image from '../assets/background.jpg'



export default function background(){
    return(
        <div 
        className=' lg:flex  h-full w-1/2 items-center justify-center relative' style={{backgroundImage: `url(${image})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} >
        </div>
    )
    
}