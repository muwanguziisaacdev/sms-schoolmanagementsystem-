'use client'
import Link from 'next/link';
import { NextResponse } from 'next/server';
import React, { useEffect, useState } from 'react'
import { getStudents } from '../lib/Students'
import { useRouter } from 'next/navigation';
import { PhoneIcon, MailIcon } from 'lucide-react';
import { useDebounce } from '../hooks/useDebounce';

const StudentList = ({ placeholder}) => {
    const router = useRouter();
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1)

    const PAGE_SIZE = 10;
    const debouncedSearch = useDebounce(search, 300); // 300ms delay

    const TableHeader = [
        { name: 'Names', key: 'names' },
        { name: 'grade', key: 'grade' },
        { name: 'dob', key: 'dob' },
        { name: 'parent name', key: 'parentname' },
        { name: 'contact', key: 'contact' },
        { name: 'Actions', key: 'action' },
    ]

    

    useEffect(() => {
        async function loadStudents() {
            const data = await getStudents();
            setStudents(data)
        }
        loadStudents();
    }, []);

    // Filter students based on debounced search
    const filteredStudents = students.filter(s =>
        (!debouncedSearch ||
            s.firstName.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            s.middleName.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            s.lastName.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
    );

    const totalPages = Math.ceil(filteredStudents.length / PAGE_SIZE);

    const paginatedStudents = filteredStudents.slice(
        (page - 1) * PAGE_SIZE,
        page * PAGE_SIZE
    );

  return (
    <div>
        
        <div className='w-4/5 mx-auto flex justify-between my-5'>
            <input 
                type="text" 
                placeholder={'Search Students'} 
                className='w-3/6' 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}/>
            <button
                onClick={() => router.push('/students/addstudent')}
                className='bg-purple-400 px-6 py-3'
            >Add Student</button>

        </div>
      <table className='w-4/5 mx-auto text-sm text-left rtl:text-right text-gray-500  '>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
                {TableHeader.map((header) => (
                    <th key={header.key} className='p-2 border-b border-gray-200'>{header.name}</th>
                ))}
            </tr>
        </thead>
        <tbody className=''>
            {paginatedStudents.map((student) => (
                <tr key={student.id} className='hover:bg-gray-100'>

                    <td className='p-2 border-b border-gray-200 '>
                        <Link href={`/students/${student.id}`} className='cursor-pointer'>
                            {`${student.firstName} ${student.middleName} ${student.lastName}`}
                        </Link>
                    </td>
                
                    <td className='p-2 border-b border-gray-200'>{student.grade}</td>
                    <td className='p-2 border-b border-gray-200'>{student.dob}</td>

                    <td className='p-2 border-b border-gray-200'>{`${student.parentDetails.firstName} ${student.parentDetails.lastName} `}</td>
                    <td>
                        <div  className='flex gap-4 items-center pt-2 justify-start'>
                            <Link href={`tel:+256${student.contact}`}>
                                <PhoneIcon className='text-green-400 bg-green-200 p-1 rounded-full' />
                            </Link>
                            <Link href={`mailto:${student.email}`}>
                                <MailIcon className='text-green-400 bg-green-200 p-1 rounded-full'/>
                            </Link>
                        </div>
                    </td>
                    <td >
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <div className='w-2 h-2 bg-gray-500 rounded-full'></div>
                            <div className='w-2 h-2 bg-gray-500 rounded-full'></div>
                            <div className='w-2 h-2 bg-gray-500 rounded-full'></div>
                        </div>

                    </td>
                    
                </tr>

            ))}
        </tbody>
      </table>
        <div className="flex justify-center items-center gap-2 mt-4">
            <div
                onClick={() => setPage(p => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="border rounded px-3 py-1 disabled:opacity-50 hover:bg-gray-400 hover:text-white transition-colors duration-300 hover:cursor-pointer"
            >
                Prev
            </div>
            <span>{`${page} / ${ totalPages}`}</span>
            <div
                onClick={() => setPage(p => Math.min(p + 1, totalPages))}
                // disabled={page === totalPages || page === 1}
                className="border rounded px-3 py-1 disabled:opacity-50 hover:bg-gray-400 hover:text-white transition-colors duration-300 hover:cursor-pointer"
            >
                Next
            </div>
        </div>
    </div>
  )
}

export default StudentList
