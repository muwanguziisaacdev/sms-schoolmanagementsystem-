export async function getTeachers() {
    const res = await fetch('http://localhost:5000/teachers');
    return res.json();
}

export async function createTeacher(teacherData) {
    const res = await fetch('http://localhost:5000/teachers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(teacherData)
    });

    return res.json();
}