import React from 'react'
import '../styles/sendButton.css'
import SendButton from './ui/SendButton'
import Link from 'next/link'


const LoginForm = () => {
  return (
    <>
        <form action="">
        <h1>Welcome to School Management System</h1>
            <h2>Login</h2>
            <label htmlFor="">
                <span>Email/username</span>
                <input type="text" placeholder='Email'/>
            </label>
            <label htmlFor="">
                <span>Password</span>
                <input type="password" placeholder='Password'/>
            </label>
            <div className='flex justify-between items-center'>
                <Link href={'/auth/passwordreset'}>Forgot Password</Link>
                <Link href={'/auth/register'}>Register</Link>
            </div>
            
            <div className='w-3/6 mx-auto'>
                <SendButton name={'Login'} />
            </div>
            
            
        </form>
    </>
  )
}

export default LoginForm
