import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [message, setMessage] = useState("")
  return (
    <div className='h-[calc(100vh-120px)] border flex justify-center items-center'>
      <div className='w-full max-w-sm mx-auto bg-white shadow-md px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl font-semibold mb-4'>Please Register</h2>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>

            <input type='email' name='email' id='email' placeholder='Email Address'
              className='shawdow appearance-none border rounded w-full py-2 px-3
            leading-tight focus:outline-none focus:shadown'></input>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
              Password
            </label>

            <input type='password' name='pasword' id='password' placeholder='Password'
              className='shawdow appearance-none border rounded w-full py-2 px-3
            leading-tight focus:outline-none focus:shadown'></input>
          </div>

          {
            message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
          }

          <div >
            <button className='bg-blue-500 hover:bg-blue-700 text-white px-6 font-semibold
            rounded focus:outline-none'> Register </button>
          </div>
        </form>
        <p className='align-baseline font-medium mt-4 text-sm '>Have an account? Please
          <Link to="/login" className='text-blue-500 hover:text-blue-700'> Login</Link> </p>

        {/* Google sign in */}
        <div className='mt-4'>
          <button className=' flex w-full flex-wrap gap-1 items-center justify-center
            bg-secondary hover:bg-blue-700 text-white font-bold py-2 rounded
            focus:outline-none'>
            <FcGoogle className='mr-2'/>
            Sign in with google
          </button>
        </div>

        <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Register
