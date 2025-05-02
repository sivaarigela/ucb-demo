// app/user/page.tsx
import axios from 'axios';
import { fetcher } from '../usersclient/fetcher';
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

export default async function UserPage() {
  let users: UserData[] = [];

  try {
    const res = await axios.get<UserData[]>('https://fakestoreapi.com/users');
    users = res.data;
  } catch (err) {
    return <div>Failed to load users.</div>;
  }

  if (!users || users.length === 0) {
    return <div>No users found.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">All Users</h1>

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