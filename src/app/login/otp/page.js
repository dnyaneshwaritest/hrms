import React from 'react'
import otpImage from '@/../../public/assets/login/otp/otp.svg'
import Image from 'next/image';
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined, LeftOutlined } from '@ant-design/icons';

const page = () => {
  return (
    <>
      <div className='flex justify-center items-center p-5 h-screen'>

        <div className='w-[50%]   h-full  bg-[#E6f7ff]  flex justify-center items-center rounded-2xl'>
          <Image src={otpImage} className='bg-[#E6F7FF] w-[50%] h-[80%] ' />
        </div>
        <div className='ml-5 leading-10'>
          <p className='cursor-pointer ' ><span><LeftOutlined /></span> Back</p>
          <p className='font-bold text-xl '>Enter OTP</p>
          <p className='font-extralight text-sm mb-6'>We have share a code of your registered email address<br />
            robertallen@example.com</p>
          {/* <input type='text' placeholder='Enter Email  Address'/><br/> */}
          {/* <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}> */}
          <div className='flex flex-col '>
            <div className='flex gap-3 '>
            <Input  placeholder="0" className='w-[3vw] my-5 text-center' />
            <Input  placeholder="0" className='w-[3vw] my-5 text-center' />
            <Input  placeholder="0" className='w-[3vw] my-5 text-center' />
            <Input  placeholder="0" className='w-[3vw] my-5 text-center' />
            </div>

            <button className='w-[70%] bg-blue-500 rounded-sm text-white text-base p-1 cursor-pointer'>verify</button>
          </div>




        </div>
      </div>







    </>
  )
}

export default page