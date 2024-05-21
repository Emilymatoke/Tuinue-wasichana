import React, { useState } from 'react';

const charities = [
  { id: 1, name: 'Tujengane' },
  { id: 2, name: 'Empower Girlhood' },
  { id: 3, name: 'Fight Period Stigmatization' },
  { id: 4, name: 'Sisi kwa Sisi' },
  { id: 5, name: 'Wangari Foundation' },
];

const MakeDonation = () => {
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [donationAmount, setDonationAmount] = useState('');
  const [message, setMessage] = useState('');
  const [selectedCharity, setSelectedCharity] = useState(charities[0].id);

  const handleDonation = (e) => {
    e.preventDefault();
    const selectedCharityObj = charities.find(c => c.id === selectedCharity);
    if (selectedCharityObj) {
      const donationData = {
        name: selectedCharityObj.name,
        amount: donationAmount,
      };
      console.log('Donation Data:', donationData);
      console.log('Payment Method:', paymentMethod);
      setMessage('Thank you for your donation!');
    } else {
      console.error('Selected charity not found');
    }
  };

  return (
    <div className="donor-section">
      <h2>Make a Donation</h2>
      <form onSubmit={handleDonation}>
        <label>
          Donation Amount:
          <input
            type="number"
            name="donationAmount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Payment Method:
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Stripe">Stripe</option>
            
          </select>
        </label>
        <br />
        <label>
          Charity:
          <select
            value={selectedCharity}
            onChange={(e) => setSelectedCharity(e.target.value)}
          >
            {charities.map(charity => (
              <option key={charity.id} value={charity.id}>{charity.name}</option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Donate</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default MakeDonation;
