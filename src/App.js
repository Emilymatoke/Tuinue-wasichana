import React from 'react';
import DonorProfile from './donorprofile';
import MakeDonation from './makedonation';

const donorInfo = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  location: 'New York, NY',
};

const charities = [
  { id: 1, name: 'Tujengane' },
  { id: 2, name: 'Fight Period Stigmatization' },
  { id: 3, name: 'Sisi kwa sisi' },
];

const App = () => {
  const [selectedCharity, setSelectedCharity] = React.useState(charities[0].id);

  const handleDonation = (e, donationAmount) => {
    e.preventDefault();
    const selectedCharityObj = charities.find(c => c.id === selectedCharity);
    if (selectedCharityObj) {
      const donationData = {
        name: selectedCharityObj.name,
        amount: donationAmount,
      };
      // Rest of the function code here
      console.log('Donation Data:', donationData);
    } else {
      console.error('Selected charity not found');
    }
  };

  return (
    <div className="App">
      <DonorProfile donorInfo={donorInfo} />
      <MakeDonation charities={charities} selectedCharity={selectedCharity} onDonation={handleDonation} />
    </div>
  );
};

export default App;