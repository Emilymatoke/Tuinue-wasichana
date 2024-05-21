import React, { useState } from 'react';

const DonorProfile = ({ donorInfo }) => {
  const [name, setName] = useState(donorInfo.name);
  const [email, setEmail] = useState(donorInfo.email);
  const [location, setLocation] = useState(donorInfo.location);
  const [message, setMessage] = useState('');

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log('Updated Profile Info:', { name, email, location });
    setMessage('Profile updated successfully!');
  };

  return (
    <div className="donor-section">
      <h2>Donor Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Update Profile</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DonorProfile;
