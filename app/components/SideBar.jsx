import React from 'react'
import Link from 'next/link'
import { HouseIcon, UsersIcon, UserCheckIcon, TvIcon, CalendarDaysIcon, BookOpenCheckIcon } from 'lucide-react'
const SideBar = () => {
  return (
    <div>
      <aside className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-800 text-white'>
        <Link href={'/dashboard'}>
            <HouseIcon />
            <span>Dashboard</span>
            
        </Link>
        <Link href={'/students'}>
            <UsersIcon />
            <span>Students</span>
        </Link>
        <Link href={'/teachers'}>
            <UserCheckIcon />
            <span>Teachers</span>
        </Link>
        <Link href={'/classes'}>
            <TvIcon />
            <span>Classes</span>
        </Link>
        <Link href={'/attendance'}>
            <CalendarDaysIcon />
            <span>Attendance</span>
        </Link>
        <Link href={'/exams'}>
            <BookOpenCheckIcon />
            <span>Exams</span>
        </Link>
      </aside>
    </div>
  )
}

export default SideBar
