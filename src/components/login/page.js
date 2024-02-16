'use client'
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

import Image from 'next/image';
import LoginImage from '../../../public/assets/login/login2.svg'
import synectiksImage from '../../../public/assets/login/synectiks.svg'
import welcomeImage from '../../../public/assets/login/hand.jpg'
import unionImage from '../../../public/assets/login/Union.svg'

const Page = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  }

  return (
    <>
    <div className='flex justify-center items-center p-5 h-screen'>
      <div className='w-[50%]   h-full  bg-[#E6f7ff]  flex justify-center items-center rounded-lg'>
        <Image src={LoginImage}  className='bg-[#E6F7FF] w-[50%] h-[80%] ' />
        </div>
        <div className='w-[50%]'>
          <div className='ml-5'>
            <Image src={synectiksImage} className='w-[100px]'/>
            <p className='font-semibold'>HR Portal</p>
          </div>
          
          <div className='ml-5'>
       <div>
        <div className='flex items-center' >
        <p className='font-bold m-0 p-0 text-xl'>Welcome</p>  
        <Image src={welcomeImage} className='w-[60px] h-[50px]'/>
        </div>
           <p className='font-extralight mb-4 '>please login here</p>
</div>
          </div>
          <Form
      name="normal_login"
      className="login-form w-[50%] ml-5"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <div className='flex justify-between'>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot text-blue-500" href="" >
          Forgot password
        </a>
        </div>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button bg-blue-500 w-[100%]">
          Log in
        </Button>
       
      </Form.Item>
      <p>Dont have any account <span className='text-blue-500 cursor-pointer'>?sign up</span></p>
    </Form>
      
      </div>
      </div>
    </>
  );
};

export default Page;
