import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Projects.css';

function Projects() {
  const { user } = useAuth();
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    location: ''
  });

  // Mock data for projects
  const [projects] = useState([
    {
      id: 1,
      title: 'Clean Water Initiative',
      organization: 'WaterCare NGO',
      category: 'Environment',
      location: 'Mumbai',
      description: 'Providing clean drinking water to rural communities through sustainable water purification systems.',
      volunteersNeeded: 25,
      status: 'Active',
      volunteers: []
    },
    {
      id: 2,
      title: 'Digital Literacy Program',
      organization: 'TechEd Foundation',
      category: 'Education',
      location: 'Delhi',
      description: 'Teaching basic computer skills to underprivileged youth to improve their employability.',
      volunteersNeeded: 15,
      status: 'Active',
      volunteers: []
    },
    {
      id: 3,
      title: 'Community Health Camp',
      organization: 'HealthFirst',
      category: 'Healthcare',
      location: 'Bangalore',
      description: 'Organizing free health checkups and awareness programs in underserved communities.',
      volunteersNeeded: 40,
      status: 'Upcoming',
      volunteers: []
    },
    {
      id: 4,
      title: 'Skill Development Workshop',
      organization: 'SkillUp Foundation',
      category: 'Education',
      location: 'Chennai',
      description: 'Conducting workshops to teach vocational skills to unemployed youth.',
      volunteersNeeded: 20,
      status: 'Active',
      volunteers: []
    },
    {
      id: 5,
      title: 'Tree Plantation Drive',
      organization: 'Green Earth',
      category: 'Environment',
      location: 'Kolkata',
      description: 'Mass tree plantation drive to increase green cover in urban areas.',
      volunteersNeeded: 50,
      status: 'Active',
      volunteers: []
    }
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                         project.description.toLowerCase().includes(filters.search.toLowerCase()) ||
                         project.organization.toLowerCase().includes(filters.search.toLowerCase());
    const matchesCategory = !filters.category || project.category === filters.category;
    const matchesLocation = !filters.location || project.location === filters.location;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="projects">
      <header className="projects-header">
        <h1>Available Projects</h1>
        <div className="projects-filters">
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleFilterChange}
            placeholder="Search projects..."
            className="search-input"
          />
          <select 
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="">All Categories</option>
            <option value="Environment">Environment</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Social Welfare">Social Welfare</option>
            <option value="Technology">Technology</option>
            <option value="Other">Other</option>
          </select>
          <select
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="">All Locations</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </div>
      </header>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className={`project-status status-${project.status.toLowerCase()}`}>
                {project.status}
              </span>
            </div>
            <p className="project-org">{project.organization}</p>
            <p className="project-description">{project.description}</p>
            <div className="project-details">
              <span className="project-category">{project.category}</span>
              <span className="project-location">{project.location}</span>
            </div>
            <div className="project-footer">
              <span className="project-volunteers">
                {project.volunteersNeeded} volunteers needed
              </span>
              <button 
                className="button button-primary"
                onClick={() => alert('This is a demo version. Joining projects is not available.')}
                disabled={!user || user.role !== 'volunteer'}
              >
                {!user ? 'Login to Join' : 
                 user.role !== 'volunteer' ? 'Volunteers Only' :
                 'Join Project'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects; 