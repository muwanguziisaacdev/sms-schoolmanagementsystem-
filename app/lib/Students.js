export async function getStudents() {
        const response = await fetch('/api/students');
        return response.json();
}

export async function createStudent(studentData) {
    const response = await fetch('http://localhost:5000/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
    });
    return response.json();
}


export async function UpdateStudent(id, UpdateStudent) {
    await fetch(`http://localhost:5000/students/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(UpdateStudent)
    })
}