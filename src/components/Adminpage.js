import React, { useState, useEffect } from 'react';
import '../styling/AdminPage.css';

function Adminpage() {
  const [charityRequests, setCharityRequests] = useState([]);
  const [charitiesCount, setCharitiesCount] = useState(10); // Initial value added
  const [donorsCount, setDonorsCount] = useState(25); // Initial value added
  const [totalAmount, setTotalAmount] = useState(5000); // Initial value added

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
      .then(() => {
        setCharityRequests(charityRequests.filter(request => request.id !== id));
      });
  };

  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>

      <div className="welcome-dashboard">
        <h3>Welcome to the Admin Dashboard</h3>
        <p>Here you can manage charity requests, view statistics, and perform administrative tasks to ensure the smooth operation of the platform.</p>
      </div>

      <div className="stats">
        <div className="stat">
          <h3>Total Charities</h3>
          <p>{charitiesCount}</p>
        </div>
        <div className="stat">
          <h3>Total Donors</h3>
          <p>{donorsCount}</p>
        </div>
        <div className="stat">
          <h3>Total Amount</h3>
          <p>${totalAmount}</p>
        </div>
      </div>

      <h3>Pending Charity Requests</h3>
      <table className="charity-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {charityRequests.map(request => (
            <tr key={request.id}>
              <td>{request.fullName}</td>
              <td>{request.email}</td>
              <td>{request.phoneNumber}</td>
              <td>{request.message}</td>
              <td>
                <button
                  className="approve-button"
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

export default Adminpage;

