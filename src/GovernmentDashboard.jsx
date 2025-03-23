import { useState, useEffect } from 'react';
import '../../styles/Dashboard.css';

function GovernmentDashboard({ user }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [govData, setGovData] = useState({
    departmentProfile: {
      name: 'Department of Community Development',
      code: 'DCD-001',
      jurisdiction: 'State Level',
      level: 'State',
      headOfDepartment: {
        name: 'John Smith',
        title: 'Director',
        email: 'director@dcd.gov'
      }
    },
    policyGuidelines: [
      {
        title: 'Community Engagement Framework',
        status: 'Published',
        publishDate: '2024-01-15',
        effectiveDate: '2024-02-01',
        category: 'Community Development'
      },
      {
        title: 'Volunteer Management Guidelines',
        status: 'Under Review',
        publishDate: '2024-03-01',
        effectiveDate: '2024-04-01',
        category: 'Volunteer Management'
      }
    ],
    projectOversight: [
      {
        projectId: '1',
        name: 'City Cleanup Initiative',
        status: 'In Progress',
        budget: {
          allocated: 50000,
          released: 30000,
          utilized: 25000,
          currency: 'USD'
        },
        timeline: {
          startDate: '2024-01-01',
          endDate: '2024-06-30',
          progress: 50
        }
      },
      {
        projectId: '2',
        name: 'Youth Skill Development',
        status: 'Approved',
        budget: {
          allocated: 75000,
          released: 25000,
          utilized: 20000,
          currency: 'USD'
        },
        timeline: {
          startDate: '2024-03-01',
          endDate: '2024-12-31',
          progress: 20
        }
      }
    ],
    resourceDistribution: {
      total: {
        allocated: 500000,
        distributed: 300000,
        remaining: 200000
      },
      byCategory: [
        {
          category: 'Education',
          allocated: 200000,
          distributed: 150000
        },
        {
          category: 'Healthcare',
          allocated: 150000,
          distributed: 100000
        },
        {
          category: 'Infrastructure',
          allocated: 150000,
          distributed: 50000
        }
      ]
    },
    reports: [
      {
        title: 'Q1 2024 Progress Report',
        status: 'Published',
        publishDate: '2024-04-01',
        statistics: {
          projectsOverseen: 15,
          organizationsSupported: 25,
          beneficiariesReached: 5000
        }
      }
    ]
  });

  useEffect(() => {
    // Fetch government data from API
    // This will be implemented when the backend is ready
  }, [user.id]);

  return (
    <div className="government-dashboard">
      <header className="dashboard-header">
        <h1>Welcome, {govData.departmentProfile.name}</h1>
        <nav className="dashboard-nav">
          <button 
            className={`nav-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`nav-button ${activeTab === 'policies' ? 'active' : ''}`}
            onClick={() => setActiveTab('policies')}
          >
            Policies
          </button>
          <button 
            className={`nav-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-button ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
          <button 
            className={`nav-button ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            Reports
          </button>
        </nav>
      </header>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="dashboard-overview">
            <section className="department-info">
              <h2>Department Profile</h2>
              <div className="info-card">
                <p><strong>Code:</strong> {govData.departmentProfile.code}</p>
                <p><strong>Jurisdiction:</strong> {govData.departmentProfile.jurisdiction}</p>
                <p><strong>Level:</strong> {govData.departmentProfile.level}</p>
                <div className="head-info">
                  <h3>Head of Department</h3>
                  <p><strong>Name:</strong> {govData.departmentProfile.headOfDepartment.name}</p>
                  <p><strong>Title:</strong> {govData.departmentProfile.headOfDepartment.title}</p>
                  <p><strong>Email:</strong> {govData.departmentProfile.headOfDepartment.email}</p>
                </div>
              </div>
            </section>

            <section className="quick-stats">
              <h2>Quick Overview</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>{govData.projectOversight.length}</h3>
                  <p>Active Projects</p>
                </div>
                <div className="stat-card">
                  <h3>${govData.resourceDistribution.total.distributed.toLocaleString()}</h3>
                  <p>Resources Distributed</p>
                </div>
                <div className="stat-card">
                  <h3>{govData.policyGuidelines.length}</h3>
                  <p>Active Policies</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'policies' && (
          <div className="policies-section">
            <h2>Policy Guidelines</h2>
            <div className="policies-grid">
              {govData.policyGuidelines.map((policy, index) => (
                <div key={index} className="policy-card">
                  <h3>{policy.title}</h3>
                  <div className="policy-details">
                    <p><strong>Status:</strong> <span className={`status ${policy.status.toLowerCase()}`}>{policy.status}</span></p>
                    <p><strong>Category:</strong> {policy.category}</p>
                    <p><strong>Published:</strong> {new Date(policy.publishDate).toLocaleDateString()}</p>
                    <p><strong>Effective:</strong> {new Date(policy.effectiveDate).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="projects-section">
            <h2>Project Oversight</h2>
            <div className="projects-grid">
              {govData.projectOversight.map((project, index) => (
                <div key={index} className="project-card">
                  <h3>{project.name}</h3>
                  <div className="project-details">
                    <p><strong>Status:</strong> <span className={`status ${project.status.toLowerCase()}`}>{project.status}</span></p>
                    <div className="budget-info">
                      <h4>Budget</h4>
                      <p>Allocated: ${project.budget.allocated.toLocaleString()}</p>
                      <p>Released: ${project.budget.released.toLocaleString()}</p>
                      <p>Utilized: ${project.budget.utilized.toLocaleString()}</p>
                    </div>
                    <div className="timeline">
                      <h4>Timeline</h4>
                      <p>Start: {new Date(project.timeline.startDate).toLocaleDateString()}</p>
                      <p>End: {new Date(project.timeline.endDate).toLocaleDateString()}</p>
                      <div className="progress-bar">
                        <div 
                          className="progress"
                          style={{ width: `${project.timeline.progress}%` }}
                        ></div>
                      </div>
                      <p className="progress-text">{project.timeline.progress}% Complete</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="resources-section">
            <h2>Resource Distribution</h2>
            <section className="total-resources">
              <h3>Total Resources</h3>
              <div className="resources-overview">
                <div className="resource-stat">
                  <h4>Total Allocated</h4>
                  <p>${govData.resourceDistribution.total.allocated.toLocaleString()}</p>
                </div>
                <div className="resource-stat">
                  <h4>Total Distributed</h4>
                  <p>${govData.resourceDistribution.total.distributed.toLocaleString()}</p>
                </div>
                <div className="resource-stat">
                  <h4>Remaining</h4>
                  <p>${govData.resourceDistribution.total.remaining.toLocaleString()}</p>
                </div>
              </div>
            </section>

            <section className="category-distribution">
              <h3>Distribution by Category</h3>
              <div className="category-grid">
                {govData.resourceDistribution.byCategory.map((category, index) => (
                  <div key={index} className="category-card">
                    <h4>{category.category}</h4>
                    <div className="category-stats">
                      <p><strong>Allocated:</strong> ${category.allocated.toLocaleString()}</p>
                      <p><strong>Distributed:</strong> ${category.distributed.toLocaleString()}</p>
                    </div>
                    <div className="distribution-bar">
                      <div 
                        className="distributed"
                        style={{ width: `${(category.distributed / category.allocated) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="reports-section">
            <h2>Public Reports</h2>
            <div className="reports-grid">
              {govData.reports.map((report, index) => (
                <div key={index} className="report-card">
                  <h3>{report.title}</h3>
                  <p><strong>Status:</strong> <span className={`status ${report.status.toLowerCase()}`}>{report.status}</span></p>
                  <p><strong>Published:</strong> {new Date(report.publishDate).toLocaleDateString()}</p>
                  <div className="report-statistics">
                    <h4>Key Statistics</h4>
                    <ul>
                      <li>Projects Overseen: {report.statistics.projectsOverseen}</li>
                      <li>Organizations Supported: {report.statistics.organizationsSupported}</li>
                      <li>Beneficiaries Reached: {report.statistics.beneficiariesReached}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GovernmentDashboard; 