'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetcher } from './fetcher';

type UserData = {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  username: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
};

export default function UserPage() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetcher<UserData[]>('https://fakestoreapi.com/users')
      .then((data) => {
        if (data.length > 0) {
          setUsers(data);
        } else {
          setError('No users found.');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError('Failed to load data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">All Users</h1>
      <div className="text-bg-red-500">Your content here</div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-customGreen font-semibold mb-2">
              {user.name.firstname} {user.name.lastname}
            </h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
