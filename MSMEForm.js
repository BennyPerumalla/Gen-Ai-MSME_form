import React, { useState } from 'react';

const MSMEForm = () => {
  const [name, setName] = useState('');
  const [revenue, setRevenue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/msme', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, revenue }),
    });

    if (response.ok) {
      console.log('MSME created successfully');
      // Handle success (e.g., reset form or show message)
    } else {
      console.error('Error creating MSME');
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="MSME Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="number" 
        placeholder="Revenue" 
        value={revenue} 
        onChange={(e) => setRevenue(e.target.value)} 
        required 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MSMEForm;