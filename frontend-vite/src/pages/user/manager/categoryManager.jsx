import { React, useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FiEdit } from 'react-icons/fi';
import { MdDeleteSweep } from 'react-icons/md'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const baseURL = 'http://localhost:5500/api/user/manager'
const baseURLLogout = 'http://localhost:5500/api/auth'

function categoryManager() {

  const [showModal, setShowModal] = useState(false)
  const [showModaledit, setShowModaledit] = useState(false)

  const [category, setcategory] = useState([])
  const [name, setName] = useState()
  const [edit, setEdit] = useState({name: ''})

  const handeName = (e) =>{
    const valeur = e.target.value
    setEdit({...edit, [e.target.name]: valeur})
  }

const editform = async() =>{
  await axios.put(`${baseURL}/updatecategory/${edit._id}`,{name: edit.name})
  .then((res) =>{
    toast.success(res.data)
    window.location.reload(false)
  }) 
  .catch ((error)=>{
    toast.error(error.response.data);
  })
}

  const handelName = (e) =>{
    setName(e.target.value)
    console.log(name)
  }

  const registerHandler = async () => {
    const user = {
      name,
    }
    const result = await axios.post(`${baseURL}/addcategory`,user)
    .then((res) =>{
      toast.success(res.data)
      window.location.reload(false)

    }) 
    .catch ((error)=>{
      toast.error(error.response.data);
    })
  }

  const deleted = async (id) => {
    await axios.delete(`${baseURL}/deletcategory/${id}`)
      .then((e) => {
        toast.success(e.data)
        window.location.reload(false)
      })
      .catch((err) => {
        toast.error(err.e.data);
      })

  }

  const affichcategory = async () => {
    const datarepas = await axios.get(`${baseURL}/findcategory`)

    if (datarepas) {
      setcategory(datarepas.data)
      console.log(datarepas.data)
    } else {
      console.log("error", err)
    }
  }

  useEffect(() => {
    affichcategory();
  }, [])

  return (
    <div>
        <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 m-3`}>
          <Button type="button" onclick={() => setShowModal(true)} class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" btn="Ajouter Category" />
        </div>

        <div class={`${open ? 'ml-72' : 'ml-20'} duration-300 overflow-x-auto drop-shadow-2xl  relative`}>
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6 text-sm flex justify-center">
                  Name Category
                </th>
                <th scope="col" class="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {category.map((cate) => (
                <tr className="bg-white border-b dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="py-4 px-6 text-center text-gray-600 ">
                    {cate.name}
                  </td>
                  <td className="py-4 px-6 flex items-center">
                    <Link to='' className="text-black text-xl mr-3" onClick={() => {setShowModaledit(true); setEdit(cate)}}><FiEdit /></Link>
                    <Link to="#" onClick={deleted} className="text-black text-3xl"><MdDeleteSweep /></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
                  <h3 className="text-3xl font-semibold">
                    Ajouter un Repas
                  </h3>
                  <button className="p-1 bg-transparent border-0 text-gray-300 opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-8" onClick={() => setShowModal(false)} >
                    <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <AiOutlineCloseCircle />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className="my-4 text-slate-500 text-lg leading-relaxed">
                    <div className="flex flex-col">
                      <div className="mb-2">
                        <Input type="text" value={name} onChange={handelName} name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Name Category" required />
                      </div>
                    </div>
                    <div className="flex justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                      <Button type='button' class='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' onClick={() => setShowModal(false)} btn='Close' />
                      {/* <Button type='button' onClick={registerHandler} className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-1.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' btn='Create Repas' /> */}
                      <button type='button' onClick={registerHandler} className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-1.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>valider</button>
                    </div>
                  </form>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
        </>
      ) : null
      }
        {showModaledit ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
                  <h3 className="text-3xl font-semibold">
                    Ajouter un Repas
                  </h3>
                  <button className="p-1 bg-transparent border-0 text-gray-300 opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-8" onClick={() => setShowModaledit(false)} >
                    <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <AiOutlineCloseCircle />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className="my-4 text-slate-500 text-lg leading-relaxed">
                    <div className="flex flex-col">
                      <div className="mb-2">
                        <Input type="text" value={edit.name} onChange={handeName} name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Name Category" required />
                      </div>
                    </div>
                    <div className="flex justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                      <Button type='button' class='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' onclick={() => setShowModaledit(false)} btn='Close' />
                      <button type='button' onClick={editform} className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-1.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>valider</button>
                    </div>
                  </form>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
        </>
      ) : null
      }
      <ToastContainer/>
    </div>
  )
}

export default categoryManager