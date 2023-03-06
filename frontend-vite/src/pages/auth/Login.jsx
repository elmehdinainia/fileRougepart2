import { React, useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import Label from '../../components/Label'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = 'http://localhost:5500/api/auth'

function Login() {

  const navigate = useNavigate()

  const [user, setUser] = useState({})

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
        else if (role === 'manager') {
          navigate('/dashboard/manager')
        }

      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div >
      <section className="bg-gray-50 dark:bg-gray-900" style={{ backgroundColor: '#111827' }}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700" style={{ backgroundColor: '#1f2937' }}>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <Label htmlFor="Email" class="block mb-3 text-sm font-medium text-white" label="Email" />
                  <Input type="text" name="email" onChange={onChange} id="email" class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                </div>
                <div>
                  <Label htmlFor="password" class="block mb-3 text-sm font-medium text-white" label="Password" />
                  <Input type="password" name="password" onChange={onChange} id="password" class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*********" />
                </div>
                <div className='flex items-center justify-between'>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Input type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" id="remember" aria-describedby="remember" />
                    </div>
                    <div className="ml-3 text-sm">
                      <Label htmlFor="remember" class="text-gray-500 dark:text-gray-300" label="Remember me" />
                    </div>
                  </div>
                  <Link to="/forgot-password" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</Link>
                </div>
                <Button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800" btn="Sign in" />
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