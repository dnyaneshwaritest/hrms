import React from 'react'
import Image from 'next/image';
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined,LeftOutlined } from '@ant-design/icons';

import forgotImage from '@/../../public/assets/login/forgot/forgot.svg'


const page = () => {
  
  return (
    <>
       <div className='flex justify-center items-center p-5 h-screen'>

    <div className='w-[50%]   h-full    flex justify-center items-center rounded-2xl '>
        <Image src={forgotImage}  className='bg-[#E6F7FF] w-[100%] h-[100%] ' />
        </div>
        <div className='ml-5 leading-10'>
          <p className='cursor-pointer ' ><span><LeftOutlined /></span> Back</p>
          <p className='font-bold text-xl '>Forgot Password</p>
          <p className='font-extralight text-sm mb-6'>Enter your registered email address. we’ll send you a code to reset your<br/> password</p>
          {/* <input type='text' placeholder='Enter Email  Address'/><br/> */}
          {/* <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}> */}
   <div className='flex flex-col '>
   
        <Input prefix={<UserOutlined className="site-form-item-icon " />} placeholder="Enter Email Address" className='w-[70%] my-5' />
   
          <button className='w-[70%] bg-blue-500 rounded-sm text-white text-base p-2 cursor-pointer'>Send otp</button>
          </div>




        </div>
    </div>
    </>
  )
}

export default page