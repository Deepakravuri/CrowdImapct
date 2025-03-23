import { useState, useEffect } from 'react';
import '../../styles/Dashboard.css';

function NGODashboard({ user }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [ngoData, setNgoData] = useState({
    organizationProfile: {
      name: 'Example NGO',
      mission: 'Empowering communities through education and healthcare',
      contactInfo: {
        email: 'contact@examplengo.org',
        phone: '+1234567890'
      }
    },
    projects: [
      {
        title: 'Digital Literacy Program',
        status: 'Active',
        volunteers: 15,
        budget: {
          allocated: 10000,
          spent: 6000,
          currency: 'USD'
        },
        progress: 60
      },
      {
        title: 'Community Health Camp',
        status: 'Planning',
        volunteers: 8,
        budget: {
          allocated: 5000,
          spent: 1000,
          currency: 'USD'
        },
        progress: 20
      }
    ],
    volunteers: {
      total: 50,
      active: 30,
      pending: 10,
      inactive: 10
    },
    resources: [
      {
        name: 'Laptops',
        available: 20,
        allocated: 15,
        total: 35
      },
      {
        name: 'First Aid Kits',
        available: 50,
        allocated: 30,
        total: 80
      }
    ],
    analytics: {
      projectMetrics: {
        totalProjects: 10,
        activeProjects: 4,
        completedProjects: 6,
        successRate: 85
      },
      volunteerMetrics: {
        totalVolunteers: 50,
        activeVolunteers: 30,
        volunteerHours: 1200,
        retentionRate: 75
      },
      impactMetrics: {
        beneficiariesServed: 1500,
        communitiesReached: 12,
        fundsUtilized: 75000,
        satisfactionScore: 4.5
      }
    }
  });

  useEffect(() => {
    // Fetch NGO data from API
    // This will be implemented when the backend is ready
  }, [user.id]);

  return (
    <div className="ngo-dashboard">
      <header className="dashboard-header">
        <h1>Welcome, {ngoData.organizationProfile.name}!</h1>
        <nav className="dashboard-nav">
          <button 
            className={`nav-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`nav-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-button ${activeTab === 'volunteers' ? 'active' : ''}`}
            onClick={() => setActiveTab('volunteers')}
          >
            Volunteers
          </button>
          <button 
            className={`nav-button ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
          <button 
            className={`nav-button ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            Analytics
          </button>
        </nav>
      </header>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="dashboard-overview">
            <section className="organization-info">
              <h2>Organization Profile</h2>
              <div className="info-card">
                <p><strong>Mission:</strong> {ngoData.organizationProfile.mission}</p>
                <p><strong>Contact:</strong> {ngoData.organizationProfile.contactInfo.email}</p>
              </div>
            </section>

            <section className="quick-stats">
              <h2>Quick Statistics</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>{ngoData.analytics.projectMetrics.activeProjects}</h3>
                  <p>Active Projects</p>
                </div>
                <div className="stat-card">
                  <h3>{ngoData.volunteers.active}</h3>
                  <p>Active Volunteers</p>
                </div>
                <div className="stat-card">
                  <h3>{ngoData.analytics.impactMetrics.beneficiariesServed}</h3>
                  <p>Beneficiaries Served</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="projects-section">
            <h2>Project Management</h2>
            <div className="projects-grid">
              {ngoData.projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3>{project.title}</h3>
                  <div className="project-details">
                    <p><strong>Status:</strong> {project.status}</p>
                    <p><strong>Volunteers:</strong> {project.volunteers}</p>
                    <div className="progress-bar">
                      <div 
                        className="progress" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <p><strong>Budget:</strong> {project.budget.spent}/{project.budget.allocated} {project.budget.currency}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'volunteers' && (
          <div className="volunteers-section">
            <h2>Volunteer Management</h2>
            <div className="volunteer-stats">
              <div className="stat-card">
                <h3>{ngoData.volunteers.total}</h3>
                <p>Total Volunteers</p>
              </div>
              <div className="stat-card">
                <h3>{ngoData.volunteers.active}</h3>
                <p>Active</p>
              </div>
              <div className="stat-card">
                <h3>{ngoData.volunteers.pending}</h3>
                <p>Pending</p>
              </div>
              <div className="stat-card">
                <h3>{ngoData.volunteers.inactive}</h3>
                <p>Inactive</p>
              </div>
            </div>
            {/* Add volunteer list and management tools here */}
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="resources-section">
            <h2>Resource Management</h2>
            <div className="resources-grid">
              {ngoData.resources.map((resource, index) => (
                <div key={index} className="resource-card">
                  <h3>{resource.name}</h3>
                  <div className="resource-stats">
                    <p><strong>Available:</strong> {resource.available}</p>
                    <p><strong>Allocated:</strong> {resource.allocated}</p>
                    <p><strong>Total:</strong> {resource.total}</p>
                  </div>
                  <div className="resource-chart">
                    <div 
                      className="usage-bar"
                      style={{ width: `${(resource.allocated / resource.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="analytics-section">
            <h2>Analytics Dashboard</h2>
            <div className="analytics-grid">
              <section className="project-metrics">
                <h3>Project Metrics</h3>
                <div className="metrics-list">
                  <div className="metric-item">
                    <p>Total Projects</p>
                    <h4>{ngoData.analytics.projectMetrics.totalProjects}</h4>
                  </div>
                  <div className="metric-item">
                    <p>Success Rate</p>
                    <h4>{ngoData.analytics.projectMetrics.successRate}%</h4>
                  </div>
                </div>
              </section>

              <section className="volunteer-metrics">
                <h3>Volunteer Metrics</h3>
                <div className="metrics-list">
                  <div className="metric-item">
                    <p>Total Hours</p>
                    <h4>{ngoData.analytics.volunteerMetrics.volunteerHours}</h4>
                  </div>
                  <div className="metric-item">
                    <p>Retention Rate</p>
                    <h4>{ngoData.analytics.volunteerMetrics.retentionRate}%</h4>
                  </div>
                </div>
              </section>

              <section className="impact-metrics">
                <h3>Impact Metrics</h3>
                <div className="metrics-list">
                  <div className="metric-item">
                    <p>Communities Reached</p>
                    <h4>{ngoData.analytics.impactMetrics.communitiesReached}</h4>
                  </div>
                  <div className="metric-item">
                    <p>Satisfaction Score</p>
                    <h4>{ngoData.analytics.impactMetrics.satisfactionScore}/5</h4>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NGODashboard; 