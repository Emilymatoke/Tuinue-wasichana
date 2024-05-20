import React, { useState, useEffect } from "react";
import DonationSection from './donationsection';
import ProfileSection from './profilesection';
import RecurringDonationsSection from './recurringdonationsection';
import Spinner from './spinner';


const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null); 
  const [loading, setLoading] = useState(true); 
console.log('one')
  useEffect(() => {
    console.log('four')
    const fetchData =  () => {
      try {
        const response =  fetch("/api/dashboard"); 
        const data =  response.json();
        console.log(data)
        //setDashboardData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
console.log('two')
  if (loading) {
    return <Spinner />; 
  }

  if (!dashboardData) {
    return <div>Error loading dashboard data.</div>; 
  }
console.log('three')
  return (
    <div className="dashboard mt-8">
      <ProfileSection profileData={dashboardData.profile} />
      <DonationSection donations={dashboardData.donations} />
      <RecurringDonationsSection recurringDonations={dashboardData.recurringDonations} />
    </div>
  );
};

export default Dashboard;
