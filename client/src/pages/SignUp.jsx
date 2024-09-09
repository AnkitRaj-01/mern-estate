import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold m-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Username' className='border p-3 rounded-lg' id='username'/>
        <input type='email' placeholder='Email'className='border p-3 rounded-lg'id='email'/>
        <input type='password' placeholder='Password'className='border p-3 rounded-lg'id='password'/>
        <button className='bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-90 disabled:opacity-80' >Sign Up</button>
      </form>
      <div className='flex gap-3 mt-4'>
        <p>Have an Account?</p>
        <Link to='/sign-in'>
        <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
