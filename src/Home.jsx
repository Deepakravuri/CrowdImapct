import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Making Change Together</h1>
          <p>Join our community of changemakers and create lasting social impact</p>
          <div className="impact-numbers">
            <div className="impact-stat">
              <h3>1,000+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="impact-stat">
              <h3>10,000+</h3>
              <p>Active Volunteers</p>
            </div>
            <div className="impact-stat">
              <h3>500+</h3>
              <p>NGOs Registered</p>
            </div>
          </div>
          <div className="hero-buttons">
            <Link to="/register" className="button button-primary">
              Join as Volunteer
            </Link>
            <Link to="/register" className="button button-secondary">
              Register Organization
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Clean Water Initiative</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: '75%' }}></div>
            </div>
            <p className="progress-text">75% Complete</p>
            <p>Providing clean drinking water to rural communities</p>
            <div className="impact-metrics">
              <span>500+ Beneficiaries</span>
              <span>20 Villages</span>
            </div>
          </div>
          <div className="project-card">
            <h3>Digital Literacy Program</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: '60%' }}></div>
            </div>
            <p className="progress-text">60% Complete</p>
            <p>Teaching digital skills to underprivileged youth</p>
            <div className="impact-metrics">
              <span>1000+ Students</span>
              <span>30 Schools</span>
            </div>
          </div>
          <div className="project-card success-story">
            <h3>Success Story: Tree Plantation Drive</h3>
            <p>Successfully planted 10,000 trees across the city</p>
            <div className="impact-metrics">
              <span>10,000 Trees</span>
              <span>100% Complete</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Project Categories</h2>
        <div className="categories-grid">
          <div className="category-card">
            <span className="category-icon">🌳</span>
            <h3>Environment</h3>
            <p>Conservation, Clean-up drives, Sustainable practices</p>
          </div>
          <div className="category-card">
            <span className="category-icon">📚</span>
            <h3>Education</h3>
            <p>Teaching, Mentoring, Skill development</p>
          </div>
          <div className="category-card">
            <span className="category-icon">🏥</span>
            <h3>Healthcare</h3>
            <p>Medical camps, Health awareness, Support services</p>
          </div>
          <div className="category-card">
            <span className="category-icon">🏘️</span>
            <h3>Community Development</h3>
            <p>Infrastructure, Social welfare, Local initiatives</p>
          </div>
          <div className="category-card">
            <span className="category-icon">🆘</span>
            <h3>Disaster Relief</h3>
            <p>Emergency response, Rehabilitation, Support</p>
          </div>
          <div className="category-card">
            <span className="category-icon">🐾</span>
            <h3>Animal Welfare</h3>
            <p>Animal rescue, Care, Protection initiatives</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="process-grid">
          <div className="process-card">
            <h3>For Volunteers</h3>
            <ol>
              <li>Sign up and create your profile</li>
              <li>Browse and join projects that interest you</li>
              <li>Contribute your time and skills</li>
              <li>Track your impact and earn recognition</li>
            </ol>
          </div>
          <div className="process-card">
            <h3>For Organizations</h3>
            <ol>
              <li>Register your NGO</li>
              <li>Create and post projects</li>
              <li>Manage volunteers and track progress</li>
              <li>Share impact reports and success stories</li>
            </ol>
          </div>
          <div className="process-card">
            <h3>For Government Bodies</h3>
            <ol>
              <li>Create official account</li>
              <li>Oversee and support initiatives</li>
              <li>Provide resources and funding</li>
              <li>Monitor progress and impact</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 