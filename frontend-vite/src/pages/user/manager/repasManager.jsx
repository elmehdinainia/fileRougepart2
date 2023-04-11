import { React, useState, useEffect } from 'react'
import { FiEdit } from 'react-icons/fi';
import { MdDeleteSweep } from 'react-icons/md'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import {useDispatch,useSelector} from "react-redux"
import { setDataProduct } from '../../../../redux/productsSlice';

const baseURL = 'http://localhost:5500/api/user/manager'
const imagePath = 'http://localhost:5500/images'

function repasManager() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
  console.log(productData)


  const [showModal, setShowModal] = useState(false)
  const [edite, setEdite] = useState(false)


 
  const [editRepas, setEditRepas] = useState({ name: '', description: '', img: '', price: '', category: '' })
  const updateRepas = (e) => {
    const valeur = e.target.value
    setEditRepas({ ...editRepas, [e.target.name]: valeur })
  }
  const [imgedit, setImgedit] = useState()  

   const editmeal = async() =>{
    const dataedit = new FormData()
    dataedit.append('name', editRepas.name)
    dataedit.append('description', editRepas.description)
    dataedit.append('price', editRepas.price)
    dataedit.append('category', editRepas.category)
    dataedit.append('images', imgedit)
    await axios.put(`${baseURL}/updateproduct/${editRepas._id}`,dataedit)
    .then((res) =>{
      console.log(res.data)
      affichagrepas()
      affichcategory()
      toast.success(res.data)
    }) 
    .catch ((error)=>{
      toast.error(error.response.data);
    })

   } 
   
  const [data, setData] = useState()
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    }
    )
  }

  const [img, setImg] = useState()
  function addMeal(e) {
    e.preventDefault()
    const data2 = new FormData()
    data2.append('name', data.name)
    data2.append('description', data.description)
    data2.append('price', data.price)
    data2.append('category', data.category)
    data2.append('images', img)

    axios.post(`${baseURL}/implodProduct`, data2)
      .then((response) => {
        console.log(response)
        window.location.reload(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const [repas, setrepas] = useState([])
  const affichagrepas = async () => {
    const datarepas = await axios.get(`${baseURL}/GetAllProduct`)
    if (datarepas) {
      setrepas(datarepas.data)
      dispatch(setDataProduct(datarepas.data))

    } else {
      console.log("error", err)
    }
  }


  const [category, setcategory] = useState([])
  const affichcategory = async () => {
    const datarepas = await axios.get(`${baseURL}/findcategory`)
    if (datarepas) {
      setcategory(datarepas.data)
      // console.log(datarepas.data)
    } else {
      console.log("error", err)
    }
  }



  const deleted = async (id) => {
    await axios.delete(`${baseURL}/deleteProduct/${id}`)
      .then((e) => {
        console.log("success")
        window.location.reload(false)
      })
      .catch((err) => {
        console.log("error", err)
      })
  }


  useEffect(() => {
    affichagrepas()
    affichcategory()

  }, [])

  return (
    <div>
      <div className={`${open ? 'ml-72' : 'ml-20'} duration-300 m-3`}>
        <button type="button" onClick={() => {setShowModal(true); setEdite(false)}} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Ajouter Repas</button>
        {
          edite ?
            <form className={`duration-300 p-4 pt-9`}>
              <div class="relative z-0 mb-6 w-full group">
                <Input type="text" name="name" id="name" value={editRepas.name} onChange={updateRepas} class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Name Repas" required />
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <Input type="text" name="description" id="description" value={editRepas.description} onChange={updateRepas} class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Description" required />
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <Input type="text" name="price" id="price" value={editRepas.price} onChange={updateRepas} class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Image" required />
              </div>
              <div className="mb-2">
                <select id="underline_select" name="category"   onChange={updateRepas} class="block py-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                  <option>Choose a Category</option>
                  {category.map((cate) => (
                  <option  value={cate.name}>{cate.name}</option>
                   ))}
                </select>
              </div>
              <div class="flex items-center justify-center w-80">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-42 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" onChange={(e) => { setImgedit(e.target.files[0]) }} />
                </label>
              </div>
              <Button type="submit" onclick={() => { setEdite(false) }} class="text-white bg-black hover:bg-neutral-800 mr-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Cancel" />
              <Button type="button" onclick={ editmeal} class="text-white bg-black hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Update" />
            </form>
            : null
        }
      </div>
      <div class={`${open ? 'ml-72' : 'ml-20'}  duration-300 overflow-x-auto overflow-y-scroll mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg`}>
        <table class="w-full text-sm text-left mb-5 text-gray-500  dark:text-gray-400  ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">Name</th>
              <th scope="col" class="py-3 px-6">Description</th>
              <th scope="col" class="py-3 px-6">image</th>
              <th scope="col" class="py-3 px-6">Category</th>
              <th scope="col" class="py-3 px-6">Price</th>
              <th scope="col" class="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {repas.map((reppa, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {reppa.name}
                </th>
                <td class="py-4 px-6">
                  {reppa.description}
                </td>
                <td class="py-4 px-6">
                  <img src={`${imagePath}/${reppa.images}`} width="50px" alt="" />
                </td>
                <td class="py-4 px-6">
                  {/* {getCategory(reppa.category)} */}
                  {reppa.category.name}
                </td>
                <td class="py-4 px-6">
                  {reppa.price} prix
                </td>
                <td class="py-4 px-6 flex text-right">
                  <button className="text-black text-xl mr-3" onClick={() => {setEdite(true); setEditRepas(reppa)}}><FiEdit /></button>
                  <button type='button' onClick={(e) => { e.preventDefault(); deleted(reppa._id) }} className="text-red-400 text-2xl"><MdDeleteSweep /></button>
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
                  <form onSubmit={addMeal}className="my-4 text-slate-500 text-lg leading-relaxed" encType='multipart/form-data'>
                    <div className="flex flex-col">
                      <div className="mb-2">
                        <Input type="text" name="name" id="name" onChange={handleChange} class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Name Repas" required />
                      </div>
                      <div className="mb-2">
                        <Input type="text" name="description" onChange={handleChange} id="description" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Description" required />
                      </div>
                      <div className="mb-2">
                        <Input type="text" name="price" onChange={handleChange} id="price" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Price" required />
                      </div>
                      <div className="mb-2">
                        <select id="underline_select" onChange={handleChange} name="category" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                          

                          <option selected>Choose a Category</option>

                          {category.map((cate) => (

                            <option value={cate._id}>{cate.name}</option>
                          
                          ))}
                        </select>
                        
                      </div>
                      <div className="mb-2">
                        <div class="flex items-center justify-center w-72">
                          <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-42 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" name='images' onChange={(e) => { setImg(e.target.files[0]) }} class="hidden" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                      <Button type='button' class='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' onclick={() => setShowModal(false)} btn='Close' />
                      <Button type='submit' class='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg w-full text-sm px-1.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800' btn='Create Repas' />
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




export default repasManager