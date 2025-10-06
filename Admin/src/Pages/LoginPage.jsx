import React from 'react';
import { LoginImg } from '../assets/Assets';
import LoginForm from '../Components/LoginPageComponents/LoginForm';
const LoginPage = () => {
  return (
   <div className='w-full flex justify-center items-center p-10 sm:gap-10'>
    <div className='flex justify-center items-center'>
      <img src={LoginImg} alt="" className='hidden sm:block w-full h-[500px] object-cover rounded-2xl' />
    </div>
    <div className=''>
      <LoginForm/>
    </div>
   </div>    
  );
};

export default LoginPage;
