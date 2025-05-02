'use client';

import { useEffect, useState } from 'react';
import axios from 'axios'; // Optional: For easier handling of requests

type UserData = {
  name: string;
  email: string;
  website: string;
};

/*async function fetchData() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}*/

//fetchData();
export default function AboutPage() {
  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    // Using Axios to fetch data from JSONPlaceholder
    axios
      .get('https://jsonplaceholder.typicode.com/users/1') // Fake API endpoint
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError('Failed to load data');
        setLoading(false);
      });
  }, []); // Empty array means this runs once after the first render

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">About Us</h1>
      <div className="text-lg text-gray-700">
        <p><strong>Name:</strong> {data?.name}</p>
        <p><strong>Email:</strong> {data?.email}</p>
        <p><strong>Website:</strong> {data?.website}</p>
      </div>
    </div>
  );
}
