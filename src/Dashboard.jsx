import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import VolunteerDashboard from '../components/dashboards/VolunteerDashboard';
import NGODashboard from '../components/dashboards/NGODashboard';
import GovernmentDashboard from '../components/dashboards/GovernmentDashboard';
import '../styles/Dashboard.css';

function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="dashboard-error">
        <h2>Access Denied</h2>
        <p>Please log in to access your dashboard.</p>
      </div>
    );
  }

  // Convert role to lowercase for case-insensitive comparison
  const userRole = user.role.toLowerCase();

  // Render different dashboards based on user role
  switch (userRole) {
    case 'volunteer':
      return <VolunteerDashboard user={user} />;
    case 'ngo':
    case 'NGO':  // Add uppercase variant
      return <NGODashboard user={user} />;
    case 'government':
    case 'GOVERNMENT':  // Add uppercase variant
      return <GovernmentDashboard user={user} />;
    default:
      return (
        <div className="dashboard-error">
          <h2>Invalid Role</h2>
          <p>Your user role ({user.role}) is not recognized. Valid roles are: Volunteer, NGO, Government</p>
        </div>
      );
  }
}

export default Dashboard;