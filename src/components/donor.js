import React from 'react';

const DonationSection = ({ donations }) => {
  return (
    <div className="donation-section">
      <h2 className="text-4xl font-bold mb-4 text-center">Donation History</h2>
      <div className="grid grid-cols-1 gap-4">
        {donations.map(donation => (
          <div key={donation.id} className="bg-white rounded-md shadow-md p-4">
            <h3 className="text-lg font-semibold">{donation.charityName}</h3>
            <p className="text-sm">Amount: ${donation.amount}</p>
            <p className="text-sm">Date: {new Date(donation.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationSection;
