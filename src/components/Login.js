import React from 'react'

const Login = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
        <div>
        <form onSubmit={(e) => e.preventDefault()}
        className='w-full max-w-sm sm:max-w-md md:max-w-lg bg-black/80 backdrop-blur-md border border-gray-700 p-6 sm:p-8 rounded-2xl shadow-2xl text-white transition-all duration-300"
        '>
            <input className=''
             type="email" placeholder='Enter Your Email' />
            <input type='password' placeholder='Enter Your Password' />
            <button>Login</button>
        </form>
        </div>
    </div>
  )
}

export default Login