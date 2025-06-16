import React from 'react'
import DataTable from './ui/DataTable'

const FormList = ( {inputHolder, FormName, createName} ) => {
  return (
    <main>
        <div className='flex justify-between items-center mb-4'>
            <h2>{ FormName }</h2>
            <button> { createName } </button>
        </div>
      <DataTable placeholder= { inputHolder } />
    </main>
  )
}

export default FormList
