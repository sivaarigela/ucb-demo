// app/page.tsx (or any other component/page)
'use client';

import { useState } from 'react';

export default function HomePage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleAddUser = async () => {
    if (!name) {
      alert('Please enter a name');
      return;
    }

    // Send POST request to /api/users/adduser
    const response = await fetch('/api/users/adduser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    const result = await response.json();

    if (response.ok) {
      setMessage(`User added: ${result.user.name}`);
    } else {
      setMessage(`Error: ${result.error}`);
    }
  };

  return (
    <div>
      <h1>Welcome to the User App</h1>
      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
      {message && <p>{message}</p>}
    </div>
  );
}
