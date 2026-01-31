import { useState } from "react";

export default function Dashboard() {
  // Static users data
  const [users, setUsers] = useState([
    { id: 1, name: "Umar Jani", email: "umar@email.com", role: "Admin" },
    { id: 2, name: "Ali Khan", email: "ali@email.com", role: "User" },
    { id: 3, name: "Sara Ahmed", email: "sara@email.com", role: "User" },
  ]);

  return (
    <div className="space-y-10">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-slate-400">Overview of users</p>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-xl text-white">
          <thead>
            <tr className="text-left border-b border-slate-600">
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-slate-700 hover:bg-slate-800/50 transition">
                <td className="px-6 py-3">{user.name}</td>
                <td className="px-6 py-3">{user.email}</td>
                <td className="px-6 py-3">{user.role}</td>
                <td className="px-6 py-3 flex gap-2">
                  <button className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700 transition">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-green-600 rounded hover:bg-green-700 transition">
                    Update
                  </button>
                  <button className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New User Button */}
      <div className="mt-4">
        <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
          Add New User
        </button>
      </div>
    </div>
  );
}
