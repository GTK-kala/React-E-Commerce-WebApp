import { useState } from 'react';


const Login = () => {
  
  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }

  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800" onSubmit={onSubmitHandler}>
      <div className="inline-flex items-center gap-2 mt-10">
        <p className="text-3xl prata-regular">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800"/>
      </div>
     {currentState === 'Sign Up' || '' ? <input className={`w-full px-3 py-2 border border-gray-800 ${currentState === 'Sign Up' ? 'block' : "none"}`} type="text" placeholder='Name....' required/> : '' }
     <input className='w-full px-3 py-2 border border-gray-800' type="email" placeholder='Email....' required/>
     <input className='w-full px-3 py-2 border border-gray-800' type="password" placeholder='Password....' required/>
     <div className='w-full flex justify-between text-sm mt-[-8px]'>
      <p className='cursor-pointer '>Forogot your password?</p>
      {
        currentState === 'Sign Up' 
        ? <p className='cursor-pointer' onClick={() => setCurrentState('Login')}>Login Here</p>
        : <p className='cursor-pointer' onClick={() => setCurrentState('Sign Up')}>Create account</p>
      }
     </div>
     <button className='px-4 py-2 text-white bg-blue-500 rounded'>{currentState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
    </form>
  )
}

export default Login