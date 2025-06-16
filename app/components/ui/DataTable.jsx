import React from 'react'

const DataTable = ({ placeholder}) => {
    const TableHeader = [
        { name: 'ID', key: 'id' },
        { name: 'Name', key: 'name' },
        { name: 'Email', key: 'email' },
        { name: 'Role', key: 'role' },
        { name: 'Actions', key: 'actions' }
    ]
    const TableData = [
        { id: 1, name: 'John Doe', email: '', role: 'Admin', actions: 'Edit/Delete' },
        { id: 2, name: 'Jane Smith', email: '', role: 'User', actions: 'Edit/Delete' },
        { id: 3, name: 'Alice Johnson', email: '', role: 'User', actions: 'Edit/Delete' },
        { id: 4, name: 'Bob Brown', email: '', role: 'Admin', actions: 'Edit/Delete' }
    ]
  return (
    <div>
        <input type="text" placeholder={placeholder}/>
      <table>
        <thead>
            <tr>
                {TableHeader.map((header) => (
                    <th key={header.key} className='p-2 border-b border-gray-200'>{header.name}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {TableData.map((row) => (
                <tr key={row.id} className='hover:bg-gray-100'>
                    <td className='p-2 border-b border-gray-200'>{row.id}</td>
                    <td className='p-2 border-b border-gray-200'>{row.name}</td>
                    <td className='p-2 border-b border-gray-200'>{row.email}</td>
                    <td className='p-2 border-b border-gray-200'>{row.role}</td>
                    <td className='p-2 border-b border-gray-200'>{row.actions}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
