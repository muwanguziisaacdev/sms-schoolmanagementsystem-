'use client'
import React, { useState } from 'react';

const Form = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation example
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData); // Pass the form data to the parent component
    setFormData({});
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className=''>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type || 'text'}
            id={field.name}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
          />
          {errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
