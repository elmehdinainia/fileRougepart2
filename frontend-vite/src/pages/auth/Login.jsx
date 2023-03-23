import { React, useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import Label from '../../components/Label'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { BiShow, BiHide } from "react-icons/bi";

import Axios from 'axios'
import Header from "../../components/Header"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = 'http://localhost:5500/api/auth'

function Login() {
  const [showPassword, setShowPassword] = useState(false);


  const navigate = useNavigate()

  const [user, setUser] = useState({})

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };


  const onChange = (e) => {
    const valeur = e.target.value
    setUser({ ...user, [e.target.name]: valeur })
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    // console.log(user)
    Axios.post(`${baseURL}/login`, user)
      .then(res => {

        toast.warn('🦄 ' + res.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        if (res.data) {
          localStorage.setItem("token", res.data.token)
          localStorage.setItem("email", res.data.email)
          localStorage.setItem("first_name", res.data.first_name)
          localStorage.setItem("last_name", res.data.last_name)
          localStorage.setItem("role", res.data.role)
        }

        const role = localStorage.getItem('role')

        if (role === 'client') {
          navigate('/dashboard/client')
        }
        else if (role === 'livreur') {
          navigate('/dashboard/livreur')
        }
        else if (role === 'admin') {
          navigate('/dashboard/admin')
        }

      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div >
            <Header/>

      <section className="" >

        <div className="flex  flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0  dark:border-gray-700  mt-20" >
            <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
              <form onSubmit={onSubmit} className="space-y-5 md:space-y-6">
                <p className="text-center font-bold text-red-500 text-3xl   ">Login</p>
                <div>
                  
                  <Label htmlFor="Email" class="block mb-3 text-sm font-medium text-black" label="Email" />
                  <Input type="text" name="email" onChange={onChange} id="email" class="bg-gray-50 border border-red-300 text-black sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  dark:border-red-600 dark:placeholder-gray-400 dark:text-darck dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="name@company.com" />
                </div>
                <div>
                  <Label htmlFor="password" class="block mb-3 text-sm font-medium text-black" label="Password" />
                  
                  <Input type={showPassword ? "text":"password"} name="password" onChange={onChange} id="password" class="bg-gray-50 border border-red-300 text-black sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5  dark:border-red-600 dark:placeholder-gray-400 dark:text-darck dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="*********" />
                  <span
                  className="flex text-xl cursor-pointer pt-1"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <BiShow /> : <BiHide />}
                </span>
                </div>
                <div className='flex items-center justify-between'>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Input type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" id="remember" aria-describedby="remember" />
                    </div>
                    <div className="ml-3 text-sm">
                      <Label htmlFor="remember" class="text-black dark:text-darck" label="Remember me" />
                    </div>
                  </div>
                  <Link to="/forgot-password" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</Link>
                </div>
                <Button type="submit" class="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " btn="Sign in" />
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">Don’t have an account yet?{' '}
                  <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500" style={{ color: '#7ca3af' }}>
                    Sign up
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

export default Login