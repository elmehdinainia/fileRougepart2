import { React } from "react"
import { Link } from "react-router-dom";
import { MdDeleteSweep } from 'react-icons/md'
import Input from "../../../components/Input";


function CommandManager() {

  return (
    <div>
      <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 p-3 font-bold text-3xl`}>
        <h1>List Command</h1>
      </div>
      <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg`}>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-2 px-4">Repas</th>
              <th scope="col" className="py-2 px-4">Quantity</th>
              <th scope="col" className="py-2 px-4">Status</th>
              <th scope="col" className="py-2 px-4">Client</th>
              <th scope="col" className="py-2 px-4">Total Price</th>
              <th scope="col" className="py-2 px-4">Livreur</th>
              <th scope="col" className="py-2 px-4">Date De Command</th>
              <th scope="col" className="py-2 px-4">Delevry Date</th>
              <th scope="col" className="py-2 px-4"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                Tacos
              </td>
              <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                2
              </td>
              <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                Done
              </td>
              <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                Mehdi
              </td>
              <td className="py-4 px-6 text-gray-600">
                22<span>DH</span>
              </td>
              <td className="py-4 px-6 text-gray-600">
                Anass
              </td>
              <td className="py-4 px-6 text-gray-600">
                18:00
              </td>
              <td className="py-4 px-6 text-gray-600">
                18:12
              </td>
              <td className="py-4 px-6 flex items-center">
                {/* <Link to="#" className="text-black text-xl mr-3"><FiEdit /></Link> */}
                <Input type="checkbox" id="status" name="status" class="w-5 h-5 mr-3 text-black  bg-gray-100 rounded border-gray-300  dark:focus:bg-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-gray-600" />
                <Link to="#" className="text-black text-3xl"><MdDeleteSweep /></Link>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                Pizza
              </td>
              <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                3
              </td>
              <td className="py-4 px-6  text-gray-600">
                En cours
              </td>
              <td className="py-4 px-6 text-gray-600">
                Wassim
              </td>
              <td className="py-4 px-6 text-gray-600">
                White
              </td>
              <td className="py-4 px-6 text-gray-600">
                Laptop PC
              </td>
              <td className="py-4 px-6 text-gray-600">
                Laptop PC
              </td>
              <td className="py-4 px-6 text-gray-600">
                $1999
              </td>
              <td className="py-4 px-6 flex items-center">
                {/* <Link to="#" className="text-black text-xl mr-3"><FiEdit /></Link> */}
                <Input type="checkbox" id="status" name="status" class="w-5 h-5 mr-3 text-black  bg-gray-100 rounded border-gray-300  dark:focus:bg-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-gray-600" />
                <Link to="#" className="text-black text-3xl"><MdDeleteSweep /></Link>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="py-4 px-6 text-gray-600">
                Amine
              </td>
              <td className="py-4 px-6 text-gray-600">
                1
              </td>
              <td className="text-gray-600 py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                Lancer
              </td>
              <td className="py-4 px-6 text-gray-600">
                Ziko
              </td>
              <td className="py-4 px-6 text-gray-600">
                229<span>DH</span>
              </td>
              <td className="py-4 px-6 text-gray-600">
                Nasser
              </td>
              <td className="py-4 px-6 text-gray-600">
                18:00
              </td>
              <td className="py-4 px-6 text-gray-600">
                18:12
              </td>
              <td className="py-4 px-6 text-gray-600 flex items-center ">
                {/* <Link to="#" className="text-black text-xl mr-3"><FiEdit /></Link> */}
                <Input type="checkbox" id="status" name="status" class="w-5 h-5 mr-3 text-black  bg-gray-100 rounded border-gray-300  dark:focus:bg-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-black dark:border-gray-600" />
                <Link to="#" className="text-black text-3xl"><MdDeleteSweep /></Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default CommandManager