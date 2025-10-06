import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (!email || !password) {
      alert("All fields must be filled")
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className='text-black rounded-xl p-5 flex flex-col justify-center h-[500px] bg-white shadow'>
      <div className='w-full sm:w-[400px]'>
        <h1 className='text-4xl font-future font-bold'>Welcome Back!</h1>
        <p className='text-gray-600 mt-2'>Please login to your account</p>
        <div className='mt-5'>
          <form onSubmit={onSubmitHandler} className='flex flex-col gap-4 mt-5'>
            <input 
              type="email" 
              className='w-full border border-gray-300 rounded-md p-2' 
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              placeholder='admin@company.com' 
            />
            <input 
              type="password" 
              className='w-full border border-gray-300 rounded-md p-2' 
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
              placeholder='Password' 
            />
            <button type="submit" className='bg-black text-white rounded-md px-4 py-2 mt-3 cursor-pointer'>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
