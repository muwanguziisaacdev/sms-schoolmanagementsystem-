import React from 'react'
import '../styles/sendButton.css'
import SendButton from './ui/SendButton'
import Link from 'next/link'


const RegisterForm = () => {
  return (
    <main className='flex justify-center items-center h-screen'>
        <form action="">
        <h1>Welcome to School Management System</h1>
            <h2 className='text-center'>Register</h2>
            <div className='flex justify-between items-center '>
                <label htmlFor="">
                    <span>First Name</span>
                    <input type="text" placeholder='First Name' className=''/>
                </label> 
                <label htmlFor="">
                    <span>Second Name</span>
                    <input type="text" placeholder='Second Name'/>
                </label> 
            </div>
            <label htmlFor="">
                <span>Email</span>
                <input type="text" placeholder='Email'/>
            </label>
            <label htmlFor="">
                <span>School Name</span>
                <input type="text" placeholder='School Name'/>
            </label>
            <label htmlFor="">
                <span>Password</span>
                <input type="password" placeholder='Password'/>
            </label>
            <div className='flex justify-end'>
                <Link href={'/auth/login'}>Login</Link>
            </div>
            
            <div className='w-3/6 mx-auto'>
                <SendButton name={'Register'} />
            </div>
            
            
        </form>
    </main>
  )
}

export default RegisterForm;
