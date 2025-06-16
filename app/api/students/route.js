import { NextResponse } from 'next/server'

const STUDENTAPI = 'http://localhost:5000/students';

export async function GET(request) {
    try {
        const res = await fetch(STUDENTAPI);

        if(!res.ok) {
            throw new Error("Failed to fetch students");
        }
        
        const students = await res.json();
        return NextResponse.json(students, { status: 200 });
    }
    catch (error) {
        console.error("Error:", error);
        return new NextResponse( {message: "Internal Server Error"}, {status: 500 })
    }
}

export async function POST(request) {
  try {
    const body = await request.json()
    // Here you would save the student to your database or json-server
    // For now, just echo the student back
    return NextResponse.json(body, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create student' }, { status: 500 })
  }
}