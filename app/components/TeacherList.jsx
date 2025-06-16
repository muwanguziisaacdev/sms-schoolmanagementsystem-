'use client'
import React, { useEffect, useState } from 'react'
import { getTeachers } from '../lib/Teachers'
const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        const loadTeachers = async () => {
            const data = await getTeachers();
            setTeachers(data);
        }
        loadTeachers();
    }, [teachers])
  return (
    <div>
      {teachers.map((teacher) => (
        <div key={teacher.id} className='flex gap-2'>
            <p >{teacher.name}</p>
            <p >{teacher.age}</p>
            <p >{teacher.major}</p>
        </div>
        
        
      ))}
    </div>
  )
}

export default TeacherList
