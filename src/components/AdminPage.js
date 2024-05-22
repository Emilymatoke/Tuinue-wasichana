import React, { useState, useEffect } from 'react';

function AdminPage() {
  const [charityRequests, setCharityRequests] = useState([]);
  const [charitiesCount, setCharitiesCount] = useState(0);
  const [donorsCount, setDonorsCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Fetch charity requests from the server
    fetch('/api/charity-requests')
      .then(response => response.json())
      .then(data => setCharityRequests(data));

    // Fetch total charities, donors, and amount
    fetch('/api/stats')
      .then(response => response.json())
      .then(data => {
        setCharitiesCount(data.charities);
        setDonorsCount(data.donors);
        setTotalAmount(data.totalAmount);
      });
  }, []);

  const handleApprove = (id) => {
    // Approve request
    fetch(`/api/charity-requests/${id}/approve`, { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        setCharityRequests(charityRequests.filter(request => request.id !== id));
      });
  };

  return (
    <div className="admin-page container mx-auto mt-8">
      <h2 className="text-2xl mb-4">Admin Dashboard</h2>

      <div className="stats grid grid-cols-3 gap-4 mb-8">
        <div className="stat bg-white p-4 rounded shadow">
          <h3 className="text-lg">Total Charities</h3>
          <p className="text-xl">{charitiesCount}</p>
        </div>
        <div className="stat bg-white p-4 rounded shadow">
          <h3 className="text-lg">Total Donors</h3>
          <p className="text-xl">{donorsCount}</p>
        </div>
        <div className="stat bg-white p-4 rounded shadow">
          <h3 className="text-lg">Total Amount</h3>
          <p className="text-xl">${totalAmount}</p>
        </div>
      </div>

      <h3 className="text-xl mb-4">Pending Charity Requests</h3>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Phone</th>
            <th className="py-2 px-4 border">Message</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {charityRequests.map(request => (
            <tr key={request.id}>
              <td className="border px-4 py-2">{request.fullName}</td>
              <td className="border px-4 py-2">{request.email}</td>
              <td className="border px-4 py-2">{request.phoneNumber}</td>
              <td className="border px-4 py-2">{request.message}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleApprove(request.id)}
                >
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
