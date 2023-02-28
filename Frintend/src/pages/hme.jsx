import React from 'react'
import images from '../assets/background.jpg'
import images2 from '../assets/morad.png'
import 'animate.css';

export default function home() {

  return (
    <div className="w-9/12" >

<form className="bg-white rounded px-8 pt-6 pb-8 mb-4 shadow-xl animate__animated animate__bounce">
    <a href="#">
      <img className="w-48 h-48 rounded-full mx-auto" src={images2} alt="Jese Leos" />
    </a><div className="p-3">
  <div className="flex justify-between items-center mb-2">



  </div>
  <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
welcome to website Marhaba
  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
    <span className="relative text-white">Foode</span>
  </span>
  La plus grande partie des biens de consommation sont transportés depuis leur lieu de production (ferme ou usine) vers un ou plusieurs lieux de stockage à livrer entrepôts), puis jusqu'à un point de vente (commerce de détail), où les consommateurs achètent les biens et se chargent de les transporter jusqu'au lieu de consommation. À partir de ce modèle général, on peut distinguer plusieurs variations selon les biens et les modes de vente.
</blockquote>


<a href="/login" className="relative inline-flex items-center justify-center p-0.5 mt-10 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
   Login
  </span>
</a>
<a href="/register" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Register
  </span>
</a>
<a href="/" className="relative inline-flex items-center justify-center p-0.5 mt-10 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
   visited
  </span>
</a>
</div>

</form>

</div>



)
  
}
