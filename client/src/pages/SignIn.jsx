import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {
  const [formData, setFormData] = useState({})
  const [error, setError] =useState(null);
  const [loading, setLoading] =useState(false);

  const navigate = useNavigate();

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Frontend validation
    if ( !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }
  
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
  
      setLoading(false);
      setError(null);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  
  // console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto'> 
      <h1 className='text-3xl text-center font-semibold m-7'>Sign In</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        {/* <input type='text' placeholder='Username' className='border p-3 rounded-lg' id='username' onChange={handleChange}/> */}
        <input type='email' placeholder='Email'className='border p-3 rounded-lg'id='email' onChange={handleChange}/>
        <input type='password' placeholder='Password'className='border p-3 rounded-lg'id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-90 disabled:opacity-80' >{loading  ? 'Loading...' : 'Sign In'}</button>
      </form>
      <div className='flex gap-3 mt-4'>
        <p>Dont have an Account?</p>
        <Link to='/sign-up'>
        <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
}
