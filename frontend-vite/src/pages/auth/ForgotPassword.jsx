import { React, useState } from "react"
import Label from '../../components/Label'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../../components/Header"
import password from "../../../public/assets/pasword.webp"

const baseURL = 'http://localhost:5500/api/auth'

function ForgotPassword() {
  const [user, setUser] = useState({})

  const onChange = (e) => {
    const valeur = e.target.value
    setUser({ ...user, [e.target.name]: valeur})
  }

  const onSubmit = (e) => {
    e.preventDefault()

    Axios.post(`${baseURL}/forgot-password`, user)
    .then(res => {
      toast.warn('🦄 '+ res.data, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
    .catch(err => {
      console.log(err)
    })
  }
  

  return (
    <div >
      <Header/>
      <section className="" >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
              <img src={password} class="h-60 mr-3" alt="FlowBite Logo" />
              <p className="text-center font-bold text-red-500 text-3xl   ">Forget-password</p>


                <div>
                  <Label htmlFor="Email" class="block mb-3 text-sm font-medium text-dark" label="Email" />
                  <Input type="text" onChange={onChange} name="email"  id="email" class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                </div>
                <Button type="submit" class="w-full text-white bg-red-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800" btn="Send" />
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ForgotPassword