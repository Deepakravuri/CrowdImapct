import { useState, useEffect } from 'react';
import '../../styles/Dashboard.css';

function VolunteerDashboard({ user }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [volunteerData, setVolunteerData] = useState({
    skills: ['Teaching', 'Project Management', 'First Aid'],
    interests: ['Education', 'Healthcare', 'Environment'],
    availability: {
      weekdays: ['Monday', 'Wednesday', 'Friday'],
      preferredTiming: 'Evening'
    },
    projectHistory: [
      {
        name: 'Digital Literacy Program',
        role: 'Teacher',
        startDate: '2024-01-15',
        endDate: '2024-03-15',
        hoursContributed: 45,
        status: 'Completed'
      },
      {
        name: 'Community Health Camp',
        role: 'Coordinator',
        startDate: '2024-03-20',
        status: 'Active'
      }
    ],
    impactMetrics: {
      totalProjects: 5,
      totalHours: 120,
      beneficiariesImpacted: 250,
      skillsEndorsements: {
        Teaching: 8,
        'Project Management': 5,
        'First Aid': 3
      }
    }
  });

  useEffect(() => {
    // Fetch volunteer data from API
    // This will be implemented when the backend is ready
  }, [user.id]);

  return (
    <div className="volunteer-dashboard">
      <header className="dashboard-header">
        <h1>Welcome, {user.name}!</h1>
        <nav className="dashboard-nav">
          <button 
            className={`nav-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`nav-button ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button 
            className={`nav-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-button ${activeTab === 'impact' ? 'active' : ''}`}
            onClick={() => setActiveTab('impact')}
          >
            Impact
          </button>
        </nav>
      </header>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="dashboard-overview">
            <section className="impact-metrics">
              <h2>Your Impact</h2>
              <div className="metrics-grid">
                <div className="metric-card">
                  <h3>{volunteerData.impactMetrics.totalProjects}</h3>
                  <p>Projects</p>
                </div>
                <div className="metric-card">
                  <h3>{volunteerData.impactMetrics.totalHours}</h3>
                  <p>Hours</p>
                </div>
                <div className="metric-card">
                  <h3>{volunteerData.impactMetrics.beneficiariesImpacted}</h3>
                  <p>Lives Impacted</p>
                </div>
              </div>
            </section>

            <section className="current-projects">
              <h2>Current Projects</h2>
              <div className="projects-list">
                {volunteerData.projectHistory
                  .filter(project => project.status === 'Active')
                  .map((project, index) => (
                    <div key={index} className="project-item">
                      <h3>{project.name}</h3>
                      <p>Role: {project.role}</p>
                      <p>Started: {new Date(project.startDate).toLocaleDateString()}</p>
                    </div>
                  ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="profile-section">
            <section className="skills-interests">
              <h2>Skills & Interests</h2>
              <div className="tags-container">
                <div className="skills">
                  <h3>Skills</h3>
                  <div className="tags">
                    {volunteerData.skills.map((skill, index) => (
                      <span key={index} className="tag">
                        {skill}
                        <span className="endorsements">
                          {volunteerData.impactMetrics.skillsEndorsements[skill] || 0}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="interests">
                  <h3>Interests</h3>
                  <div className="tags">
                    {volunteerData.interests.map((interest, index) => (
                      <span key={index} className="tag">{interest}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="availability">
              <h2>Availability</h2>
              <div className="availability-grid">
                <div className="weekdays">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                    <div key={day} className={`day ${volunteerData.availability.weekdays.includes(day) ? 'available' : ''}`}>
                      {day}
                    </div>
                  ))}
                </div>
                <p className="preferred-timing">
                  Preferred Timing: {volunteerData.availability.preferredTiming}
                </p>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="projects-section">
            <h2>Project History</h2>
            <div className="project-history">
              {volunteerData.projectHistory.map((project, index) => (
                <div key={index} className={`project-card ${project.status.toLowerCase()}`}>
                  <h3>{project.name}</h3>
                  <div className="project-details">
                    <p><strong>Role:</strong> {project.role}</p>
                    <p><strong>Status:</strong> {project.status}</p>
                    <p><strong>Started:</strong> {new Date(project.startDate).toLocaleDateString()}</p>
                    {project.endDate && (
                      <p><strong>Completed:</strong> {new Date(project.endDate).toLocaleDateString()}</p>
                    )}
                    {project.hoursContributed && (
                      <p><strong>Hours:</strong> {project.hoursContributed}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'impact' && (
          <div className="impact-section">
            <h2>Impact Metrics</h2>
            <div className="impact-details">
              <div className="impact-chart">
                {/* Add charts/visualizations here */}
              </div>
              <div className="impact-stats">
                <div className="stat-card">
                  <h3>Total Projects</h3>
                  <p>{volunteerData.impactMetrics.totalProjects}</p>
                </div>
                <div className="stat-card">
                  <h3>Hours Contributed</h3>
                  <p>{volunteerData.impactMetrics.totalHours}</p>
                </div>
                <div className="stat-card">
                  <h3>Lives Impacted</h3>
                  <p>{volunteerData.impactMetrics.beneficiariesImpacted}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VolunteerDashboard; 