import React from 'react';

const ProfileSection = ({ profileData }) => {
  return (
    <div className="profile-section">
      <h2 className="text-4xl font-bold mb-4 text-center">Profile</h2>
      <div className="bg-white rounded-md shadow-md p-4">
        <p><strong>Name:</strong> {profileData.name}</p>
        <p><strong>Email:</strong> {profileData.email}</p>
        <p><strong>Location:</strong> {profileData.location}</p>
      </div>
    </div>
  );
};

export default ProfileSection;
