import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <header>
        
      <nav className='bg-gray-900 text-white flex justify-between items-center px-10'>
        <h3>School Management System</h3>
        <ul className="flex justify-evenly items-center p-4  text-white w-3/6 mx-auto">
          <li>
            <Link href="/" className="text-lg font-bold">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-lg">About</Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg">Contact</Link>
          </li>
          <li>
            <Link href="/auth/login" className="text-lg">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
