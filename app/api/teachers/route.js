import { NextResponse } from "next/server";

const TEACHERAPI = 'http://localhost:5000/teachers'
export async function GET(request) {
    try {
        const res = await fetch(TEACHERAPI);
        
        if(!res.ok) throw new Error('Failed to fetch Teachers');

        const teachers = await res.json();
        return NextResponse(teachers, {status:200});
    }
    catch(error) {
        return new NextResponse( {message:error}, {status:500});
    }
}

export async function POST(request) {
    try {
        const body = await request.json();

        return NextResponse(body, { status: 201});
    }
    catch(error) {
        return new NextResponse({ message: "Failed to create teacher" }, { status: 500 })
    }
}