import { React, useState } from "react"
import { Link } from 'react-router-dom';
import Label from '../../components/Label'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../../components/Header"


const baseURL = 'http://localhost:5500/api/auth'

function Signup() {

  const [user, setUser] = useState({})

  const onChange = (e) => {
    const valeur = e.target.value
    setUser({ ...user, [e.target.name]: valeur})
  }

  const onSubmit = (e) => {
    e.preventDefault()

  Axios.post(`${baseURL}/register`, user)
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
    <div>
    <Header/>

         <section className=" " >

        <div className="flex flex-col items-center  justify-start px-6 py-30 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0  dark:border-gray-900 mt-20" >
            <div className="p-6 space-y-4 md:space-y-50 sm:p-19">
            <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
            <p className="text-center font-bold text-red-500 text-3xl   ">Register</p>

                <div>
                  <Label htmlFor="fisrt_name" class="block mb-2 text-sm font-medium text-black dark:text-black" label="First Name" />
                  <Input type="text" onChange={onChange} class="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="first_name" name="first_name" placeholder="First Name" />
                </div>
                <div>
                  <Label htmlFor="last_name" class="block mb-2 text-sm font-medium text-black dark:text-black" label="Last Name" />
                  <Input type="text" onChange={onChange} class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="last_name" name="last_name" placeholder="Last Name" />
                </div>
                <div>
                  <Label htmlFor="phone" class="block mb-2 text-sm font-medium text-white dark:text-black" label="Phone" />
                  <Input type="text" onChange={onChange} class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="phone" name="phone" placeholder="Phone" />
                </div>
                <div>
                  <Label htmlFor="address" class="block mb-2 text-sm font-medium text-white dark:text-black" label="address" />
                  <Input type="text" onChange={onChange} class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="address" name="address" placeholder="address" />
                </div>
                <div>
                  <Label htmlFor="email" class="block mb-2 text-sm font-medium text-white dark:text-black" label="Email" />
                  <Input type="text" onChange={onChange} class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="email" name="email" placeholder="name@company.com" />
                </div>
                <div className="flex justify-around">
                  <div className="">
                    <Label htmlFor="password" class="block mb-2 text-sm font-medium text-white dark:text-black" label="Password" />
                    <Input type="password" onChange={onChange} class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="password" name="password" placeholder="*********" />
                  </div>
                  <div>
                  <Label htmlFor="C_password" class="block mb-2 text-sm font-medium text-white dark:text-black" label="Confirm Password" />
                  <Input type="password" onChange={onChange} class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="C_password" name="C_password" placeholder="*********" />
                  </div>
                </div>
                <Button type="submit" class="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " btn="Sign in" />

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500" style={{ color: '#7ca3af' }}
                  >
                    Login
                  </Link>
                </p>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup