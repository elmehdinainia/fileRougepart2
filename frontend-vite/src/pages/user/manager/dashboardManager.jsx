import { React, useState, useEffect } from 'react'
import axios from "axios";

const baseURL = 'http://localhost:5500/api/user/manager'

function Client() {

  const [stati, Setstatiq] = useState([])
  
  const statistic = async () => {
    await axios.get(`${baseURL}/statistique`)
    
      .then((response) => {
        Setstatiq(response.data)
        

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
     
    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4" >
      <a href="">
  <div
    class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"
  >
    <div class="p-4 flex items-center">
      <div
        class="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4"
      >
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1YcaUsxmosl8KsDk6l7XlAQRjcRkPgI_Q0g&usqp=CAU" className="h-70 w-70 static" />

      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          Total clients
        </p>
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {stati.user}
        </p>
      </div>
    </div>
  </div>
  </a>

  <a href="/dashboard/admin/repas">
  <div
    class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"
  >
    <div class="p-4 flex items-center">
      <div
        class="p-3 rounded-full text-green-500 dark:text-green-100 bg-green-100 dark:bg-green-500 mr-4"
      >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqbePSAjxUlbStsVq0cyW7OzoyQ8CKeVjUHQ&usqp=CAU" className="h-50  static" />
  
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
     Meal
        </p>
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
        {stati.meal}

        </p>
      </div>
    </div>

  </div>
  </a>

  <a href="/dashboard/admin/livreurs">
  <div
    class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"
  >
    <div class="p-4 flex items-center">
      <div
        class="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4"
      >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzEZebOgI9Py-XHoX-L5bvtZ9XydZhdwvmw&usqp=CAU" className="h-70 w-70 static" />

      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
     Livreur
        </p>
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
        {stati.livreur}

        </p>
      </div>
    </div>
  </div>
  </a>

  <a href="/dashboard/admin/category">
  <div
    class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"
  >
    <div class="p-4 flex items-center">
      <div
        class="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-100 dark:bg-teal-500 mr-4"
      >
                        <img src="https://img.freepik.com/vecteurs-libre/fruits-baies-collection-icones-colorees_1284-20043.jpg" className="h-70 w-70 static  " />
                                                                                                                                           

      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
         category exist
        </p>
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">{stati.category}</p>
      </div>
    </div>
  </div>
  </a>
  <a href="/dashboard/admin/clients">
  <div
    class="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800"
  >
    <div class="p-4 flex items-center">
      <div
        class="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-100 dark:bg-teal-500 mr-4"
      >
                        <img src="    https://i.pinimg.com/564x/29/fc/54/29fc543de49f9287dd67405590f2669c.jpg
                                                                                                                                           " className="h-70 w-70 static" />

      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
         client
        </p>
        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">{stati.client}</p>
      </div>
    </div>
  </div>
  </a>
</div>



      </div>

    </div>
  )
}


export default Client
