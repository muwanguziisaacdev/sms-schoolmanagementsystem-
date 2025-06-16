import React from 'react'

const Label = ( { labelName, type, name, value, handleChange, placeholder}) => {
  return (
    <>
      <label htmlFor="">
        <span>{labelName}</span>
        <input 
            type={type} 
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
      </label>
    </>
  )
}

export default Label
