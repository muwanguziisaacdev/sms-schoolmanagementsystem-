'use client'
import React, { useState } from 'react'
import { createTeacher } from '@/app/lib/Teachers'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/navigation'
const CreateTeacher = () => {
    // define the teacher form, handle change, handle submit and handle create
    const router = useRouter();
    const [form, setForm] = useState({
        name: '',
        age: '',
        major: '',
    });
    const handleCreate = async () => {
        try {
            const teacherWithId = {...form, id: uuidv4()};
            await createTeacher(teacherWithId);
        }
        catch(error) {
            alert(error)
        }
    }
    const handleChange = (e) => {
        setForm( {...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        await handleCreate();
        setForm( {
            name: '',
            age: '',
            major: ''
        })
        router.push('/teachers');
    }
    
  return (
    <main>
        <h1 className='text-center font-bold text-4xl my-20'>Create Teacher</h1>
      <form action="" 
        className='flex flex-col gap-5 w-3/6 mx-auto'
        onSubmit={handleSubmit}
        >
        <input 
            type="text"
            name='name'
            placeholder='Enter Name'
            value={form.name}
            onChange={handleChange} 
        />
        <input 
            type="number"
            name='age'
            placeholder='Enter age'
            value={form.age}
            onChange={handleChange} 
        />
        <input 
            type="text"
            name='major'
            placeholder='Major subject'
            value={form.major}
            onChange={handleChange} 
        />
        <button type='submit'>Send</button>
      </form>
    </main>
  )
}

export default CreateTeacher
