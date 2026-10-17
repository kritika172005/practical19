import React, { useState } from 'react';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Rahul', course: 'BCA' },
    { id: 2, name: 'Priya', course: 'BCA' },
    { id: 3, name: 'Amit', course: 'BCA' }
  ]);

  function deleteStudent(id) {
    setStudents(students.filter(student => student.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-blue-700">
          Student Management
        </h1>

        <h2 className="mb-4 text-xl font-bold">Student List</h2>

        {students.length === 0 ? (
          <p className="text-gray-500">No students available.</p>
        ) : (
          students.map(student => (
            <div
              key={student.id}
              className="mb-3 rounded-lg border p-4"
            >
              <p><b>Name:</b> {student.name}</p>
              <p><b>Course:</b> {student.course}</p>

              <button
                onClick={() => deleteStudent(student.id)}
                className="mt-3 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;