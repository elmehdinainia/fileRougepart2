import { React, useState, useEffect } from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import axios from 'axios'

const baseURL = 'http://localhost:5500/api/user/manager'

function livreursManager() {

  const [showModal, setShowModal] = useState(false)
  const [livreurs, setLivreurs] = useState([])

  const fetchLivreurs = async () => {
    const dataLivreurs = await axios.get(`${baseURL}/listlivreur`)
    if (dataLivreurs) {
      setLivreurs(dataLivreurs.data)
    } else {
      console.log("error", err)
    }
  }
  const bannlivreur = async(e) =>{
    let id = e.target.value
      await axios.put(`${baseURL}/updateuser/${id}`)
    .then((res)=>{
      console.log(res.data)
          fetchLivreurs()

    })
    .catch((err)=>{
      console.log(err)
    })


  }


  useEffect(() => {
    fetchLivreurs()
  }, [])

  return (

    <div>
      <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 m-3`}>
        <Button type='button' onclick={() => setShowModal(true)} class='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' btn='Ajouter un Livreur' />
      </div>


      <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg`}>
        <table className={` w-full text-sm text-left text-gray-500 dark:text-gray-400`}>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center">
              <th scope="col" className="py-2 px-4">Name Complete</th>
              <th scope="col" className="py-2 px-4">Phone</th>
              <th scope="col" className="py-2 px-4">Email</th>
              <th scope="col" className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {livreurs.map((livreur, index) => {
              return (
                <tr key={index} className={`bg-white border-b text-center dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}>
                  <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    {livreur.first_name} {livreur.last_name}
                  </td>
                  <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    <span>+</span>{livreur.phone}
                  </td>
                  <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                    {livreur.email}
                  </td>
                  <td className="py-4 px-6 items-center">
                <button className = { livreur.isBanned ? "px-4 py-1 btn bg-red-600 text-white rounded" :  "px-4 py-1 rounded bg-green text-white"} value={livreur._id} onClick={bannlivreur}>
                  {(livreur.isBanned) ? "bann" : "banned"}
                </button>
                </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>


      {showModal ? (
        <>
          <div className="flex justify-center items-center p-6 drop-shadow-2xl overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-96 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
                  <h3 className="text-3xl font-semibold">
                    Ajouter un Livreurs
                  </h3>
                  <button className="p-1 bg-transparent border-0 text-gray-300 opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-8" onClick={() => setShowModal(false)} >
                    <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <AiOutlineCloseCircle />
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className=" text-slate-500 text-lg leading-relaxed">
                    <div className="flex flex-col gap-6">
                      <div>
                        <Input type="text" name="first_name" id="first_name" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="First Name" />
                      </div>
                      <div>
                        <Input type="text" name="last_name" id="last_name" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Last Name" />
                      </div>
                      <div>
                        <Input type="email" name="email" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" id="email" placeholder="Email" />
                      </div>
                      <div>
                        <Input type="password" name="password" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" id="password" placeholder="Password" />
                      </div>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <Button class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" type="button" onclick={() => setShowModal(false)} btn="Close" />
                      <Button btn="Ajouter" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" type="submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default livreursManager