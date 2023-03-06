import { React, useState } from "react";
import { ReactDOM } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import Label from '../../components/Label'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = 'http://localhost:5500/api/auth'

function FormForgotPassword() {
  const {token} = useParams()
  console.log(token);

  const [user, setUser] = useState({})

  const onChange = (e) => {
    const valeur = e.target.value
    setUser({ ...user, [e.target.name]: valeur })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    Axios.post(`${baseURL}/form-forgot-password`, {
      ...user,
      token
    })
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
      <section className="bg-gray-50 dark:bg-gray-900" style={{ backgroundColor: '#111827' }}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700" style={{ backgroundColor: '#1f2937' }}>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <Label htmlFor="password" class="block mb-3 text-sm font-medium text-white" label="Password" />
                  <Input type="password" onChange={onChange} name="password" id="password" class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" />
                </div>
                <div>
                  <Label htmlFor="confirm_password" class="block mb-3 text-sm font-medium text-white" label="Confirm Password" />
                  <Input type="password" onChange={onChange} name="confirm_password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" />
                </div>
                <Button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800" btn="Send" />
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormForgotPassword