'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

const StudentProfile = () => {
  const { id } = useParams()
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchStudent() {
      try {
        const res = await fetch(`http://localhost:5000/students/${id}`)
        if (!res.ok) throw new Error('Student not found')
        const data = await res.json()
        setStudent(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    if (id) fetchStudent()
  }, [id])

  if (loading) {
    return (
      <main className="max-w-md mx-auto mt-10 p-6 text-center">
        <p>Loading...</p>
      </main>
    )
  }

  if (error || !student) {
    return (
      <main className="max-w-md mx-auto mt-10 p-6 text-center text-red-600">
        <p>{error || 'Student not found.'}</p>
      </main>
    )
  }

  return (
    <main className="max-w-md mx-auto mt-10 p-6 border border-gray-200 rounded-xl shadow-md bg-white">
      <div className="text-center mb-6">
        <img
          src={`https://ui-avatars.com/api/?name=${student.firstName}+${student.lastName}`}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold mb-1">{student.firstName} {student.lastName}</h2>
        <p className="text-gray-500">{student.email}</p>
      </div>
      <div className="mb-4">
        <strong className="block text-gray-700">Age:</strong>
        <div className="text-gray-900">{student.age}</div>
      </div>
      <div className="mb-4">
        <strong className="block text-gray-700">Major:</strong>
        <div className="text-gray-900">{student.major}</div>
      </div>
    </main>
  )
}

export default StudentProfile
