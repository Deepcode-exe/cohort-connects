import React, { useState } from 'react';
import './AdminPage.css';

const AdminPage = ({ onToggleMode, isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Mock data
  const dashboardStats = {
    totalAlumni: 2847,
    activeUsers: 1256,
    pendingApprovals: 23,
    recentUpdates: 156
  };

  const recentAlumni = [
    { id: 1, name: 'John Smith', department: 'Computer Science', year: '2020', status: 'verified', email: 'john@email.com' },
    { id: 2, name: 'Sarah Johnson', department: 'Business Admin', year: '2019', status: 'pending', email: 'sarah@email.com' },
    { id: 3, name: 'Mike Chen', department: 'Engineering', year: '2021', status: 'verified', email: 'mike@email.com' },
    { id: 4, name: 'Emily Davis', department: 'Computer Science', year: '2022', status: 'verified', email: 'emily@email.com' },
    { id: 5, name: 'Alex Rodriguez', department: 'Business Admin', year: '2018', status: 'pending', email: 'alex@email.com' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Alumni Reunion 2024', date: '2024-06-15', attendees: 245, status: 'confirmed' },
    { id: 2, title: 'Career Fair', date: '2024-05-20', attendees: 89, status: 'planning' },
    { id: 3, title: 'Networking Mixer', date: '2024-04-30', attendees: 156, status: 'confirmed' },
  ];

  const analyticsData = [
    { label: 'Total Page Views', value: '45,678', change: '+12.3%', trend: 'up' },
    { label: 'Active Sessions', value: '1,234', change: '+5.7%', trend: 'up' },
    { label: 'Engagement Rate', value: '78.2%', change: '-2.1%', trend: 'down' },
    { label: 'Conversion Rate', value: '4.6%', change: '+8.9%', trend: 'up' },
  ];

  return (
    <div className={`admin-container ${isDarkMode ? 'dark' : ''}`}>
      {/* Header */}
      <div className="admin-header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="admin-title">Alumni Management System</h1>
            <div className="breadcrumb">
              <span className="breadcrumb-item">Dashboard</span>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-item active">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
            </div>
          </div>
          <div className="header-actions">
            <button className="notification-btn">
              <span className="notification-icon">🔔</span>
              <span className="notification-badge">3</span>
            </button>
            <button 
              className="dark-mode-toggle"
              onClick={onToggleMode}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <div className="admin-profile">
              <div className="profile-avatar">A</div>
              <div className="profile-info">
                <span className="profile-name">Admin User</span>
                <span className="profile-role">Super Admin</span>
              </div>
              <button className="profile-dropdown">⌄</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="admin-sidebar">
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <span className="nav-icon">📊</span>
            <span className="nav-label">Dashboard</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'alumni' ? 'active' : ''}`}
            onClick={() => setActiveTab('alumni')}
          >
            <span className="nav-icon">👥</span>
            <span className="nav-label">Alumni Data</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            <span className="nav-icon">📅</span>
            <span className="nav-label">Events & Announcements</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <span className="nav-icon">📈</span>
            <span className="nav-label">Analytics & Reports</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'search' ? 'active' : ''}`}
            onClick={() => setActiveTab('search')}
          >
            <span className="nav-icon">🔍</span>
            <span className="nav-label">Search & Filter</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'permissions' ? 'active' : ''}`}
            onClick={() => setActiveTab('permissions')}
          >
            <span className="nav-icon">🔐</span>
            <span className="nav-label">User Roles</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'communication' ? 'active' : ''}`}
            onClick={() => setActiveTab('communication')}
          >
            <span className="nav-icon">📧</span>
            <span className="nav-label">Communication</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="admin-main">
        <div className="admin-content">{activeTab === 'dashboard' && (
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">Dashboard Overview</h2>
              <button className="refresh-btn">🔄 Refresh</button>
            </div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-header">
                  <span className="stat-icon">👥</span>
                  <span className="stat-trend up">+12%</span>
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">{dashboardStats.totalAlumni.toLocaleString()}</h3>
                  <p className="stat-label">Total Alumni</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-header">
                  <span className="stat-icon">✅</span>
                  <span className="stat-trend up">+8%</span>
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">{dashboardStats.activeUsers.toLocaleString()}</h3>
                  <p className="stat-label">Active Users</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-header">
                  <span className="stat-icon">⏳</span>
                  <span className="stat-trend down">-3%</span>
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">{dashboardStats.pendingApprovals}</h3>
                  <p className="stat-label">Pending Approvals</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-header">
                  <span className="stat-icon">🔄</span>
                  <span className="stat-trend up">+15%</span>
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">{dashboardStats.recentUpdates}</h3>
                  <p className="stat-label">Recent Updates</p>
                </div>
              </div>
            </div>

            <div className="dashboard-grid">
              <div className="dashboard-card">
                <div className="card-header">
                  <h3 className="card-title">Recent Alumni Registrations</h3>
                  <button className="view-all-btn">View All</button>
                </div>
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Year</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentAlumni.slice(0, 5).map((alumni) => (
                        <tr key={alumni.id}>
                          <td>
                            <div className="user-cell">
                              <div className="user-avatar">{alumni.name.charAt(0)}</div>
                              <span>{alumni.name}</span>
                            </div>
                          </td>
                          <td>{alumni.email}</td>
                          <td>{alumni.department}</td>
                          <td>{alumni.year}</td>
                          <td>
                            <span className={`status-badge ${alumni.status}`}>
                              {alumni.status}
                            </span>
                          </td>
                          <td>
                            <div className="action-buttons">
                              <button className="action-btn edit">✏️</button>
                              <button className="action-btn view">👁️</button>
                              <button className="action-btn delete">🗑️</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="dashboard-card">
                <div className="card-header">
                  <h3 className="card-title">Upcoming Events</h3>
                  <button className="view-all-btn">View All</button>
                </div>
                <div className="events-list">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="event-item">
                      <div className="event-date">
                        <span className="month">{new Date(event.date).toLocaleDateString('en', {month: 'short'})}</span>
                        <span className="day">{new Date(event.date).getDate()}</span>
                      </div>
                      <div className="event-details">
                        <h4 className="event-title">{event.title}</h4>
                        <p className="event-meta">{event.attendees} attendees</p>
                      </div>
                      <span className={`event-status ${event.status}`}>{event.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'alumni' && (
          <div className="alumni-section">
            <div className="section-header">
              <h2 className="section-title">Alumni Data Management</h2>
              <button className="primary-btn">+ Add New Alumni</button>
            </div>

            <div className="management-grid">
              <div className="management-card">
                <div className="card-icon">➕</div>
                <h3 className="card-title">Add Alumni</h3>
                <p className="card-description">Register new alumni profiles with verification process</p>
                <button className="card-btn">Add Profile</button>
              </div>

              <div className="management-card">
                <div className="card-icon">✏️</div>
                <h3 className="card-title">Edit Profiles</h3>
                <p className="card-description">Update existing alumni information and details</p>
                <button className="card-btn">Edit Data</button>
              </div>

              <div className="management-card">
                <div className="card-icon">✅</div>
                <h3 className="card-title">Verify Alumni</h3>
                <p className="card-description">Review and approve pending registrations</p>
                <button className="card-btn">Review Pending</button>
              </div>

              <div className="management-card">
                <div className="card-icon">🗑️</div>
                <h3 className="card-title">Remove Profiles</h3>
                <p className="card-description">Deactivate or remove alumni accounts safely</p>
                <button className="card-btn">Manage Removal</button>
              </div>
            </div>

            <div className="data-table-section">
              <div className="table-header">
                <h3>All Alumni Records</h3>
                <div className="table-actions">
                  <input type="text" placeholder="Search alumni..." className="search-input" />
                  <select className="filter-select">
                    <option value="">All Departments</option>
                    <option value="cs">Computer Science</option>
                    <option value="eng">Engineering</option>
                    <option value="bus">Business Admin</option>
                  </select>
                  <button className="export-btn">📤 Export</button>
                </div>
              </div>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" />
                      </th>
                      <th>Alumni</th>
                      <th>Email</th>
                      <th>Department</th>
                      <th>Graduation Year</th>
                      <th>Status</th>
                      <th>Last Updated</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentAlumni.map((alumni) => (
                      <tr key={alumni.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <div className="user-cell">
                            <div className="user-avatar">{alumni.name.charAt(0)}</div>
                            <div className="user-info">
                              <span className="user-name">{alumni.name}</span>
                              <span className="user-id">ID: {alumni.id.toString().padStart(4, '0')}</span>
                            </div>
                          </div>
                        </td>
                        <td>{alumni.email}</td>
                        <td>{alumni.department}</td>
                        <td>{alumni.year}</td>
                        <td>
                          <span className={`status-badge ${alumni.status}`}>
                            {alumni.status}
                          </span>
                        </td>
                        <td>2 days ago</td>
                        <td>
                          <div className="action-buttons">
                            <button className="action-btn edit" title="Edit">✏️</button>
                            <button className="action-btn view" title="View">👁️</button>
                            <button className="action-btn delete" title="Delete">🗑️</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="table-pagination">
                <span className="pagination-info">Showing 1-5 of {recentAlumni.length} results</span>
                <div className="pagination-controls">
                  <button className="pagination-btn">‹ Previous</button>
                  <button className="pagination-btn active">1</button>
                  <button className="pagination-btn">2</button>
                  <button className="pagination-btn">3</button>
                  <button className="pagination-btn">Next ›</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="events-section">
            <div className="section-header">
              <h2 className="section-title">Event & Announcement Management</h2>
              <button className="primary-btn">+ Create Event</button>
            </div>

            <div className="event-tabs">
              <button className="event-tab active">All Events</button>
              <button className="event-tab">Upcoming</button>
              <button className="event-tab">Past Events</button>
              <button className="event-tab">Announcements</button>
            </div>

            <div className="event-management-grid">
              <div className="event-card">
                <div className="event-card-header">
                  <div className="event-type-badge alumni">Alumni Event</div>
                  <div className="event-actions">
                    <button className="action-btn edit">✏️</button>
                    <button className="action-btn delete">🗑️</button>
                  </div>
                </div>
                <h3 className="event-card-title">Annual Alumni Reunion 2024</h3>
                <p className="event-card-description">Join us for our biggest reunion event with networking, dinner, and entertainment.</p>
                <div className="event-card-meta">
                  <span className="event-date">📅 June 15, 2024</span>
                  <span className="event-location">📍 Main Campus</span>
                  <span className="event-attendees">👥 245 attendees</span>
                </div>
                <div className="event-card-footer">
                  <span className="event-status confirmed">Confirmed</span>
                  <button className="manage-btn">Manage Event</button>
                </div>
              </div>

              <div className="event-card">
                <div className="event-card-header">
                  <div className="event-type-badge career">Career</div>
                  <div className="event-actions">
                    <button className="action-btn edit">✏️</button>
                    <button className="action-btn delete">🗑️</button>
                  </div>
                </div>
                <h3 className="event-card-title">Career Fair 2024</h3>
                <p className="event-card-description">Connect with top employers and explore career opportunities.</p>
                <div className="event-card-meta">
                  <span className="event-date">📅 May 20, 2024</span>
                  <span className="event-location">📍 Exhibition Hall</span>
                  <span className="event-attendees">👥 89 attendees</span>
                </div>
                <div className="event-card-footer">
                  <span className="event-status planning">Planning</span>
                  <button className="manage-btn">Manage Event</button>
                </div>
              </div>

              <div className="event-card">
                <div className="event-card-header">
                  <div className="event-type-badge networking">Networking</div>
                  <div className="event-actions">
                    <button className="action-btn edit">✏️</button>
                    <button className="action-btn delete">🗑️</button>
                  </div>
                </div>
                <h3 className="event-card-title">Monthly Networking Mixer</h3>
                <p className="event-card-description">Casual networking event for recent graduates and young professionals.</p>
                <div className="event-card-meta">
                  <span className="event-date">📅 April 30, 2024</span>
                  <span className="event-location">📍 Alumni Center</span>
                  <span className="event-attendees">👥 156 attendees</span>
                </div>
                <div className="event-card-footer">
                  <span className="event-status confirmed">Confirmed</span>
                  <button className="manage-btn">Manage Event</button>
                </div>
              </div>
            </div>

            <div className="announcement-section">
              <h3 className="subsection-title">Recent Announcements</h3>
              <div className="announcement-list">
                <div className="announcement-item">
                  <div className="announcement-header">
                    <h4 className="announcement-title">New Alumni Portal Features</h4>
                    <span className="announcement-date">March 15, 2024</span>
                  </div>
                  <p className="announcement-excerpt">We've added new features to enhance your alumni experience...</p>
                  <div className="announcement-footer">
                    <span className="announcement-views">👁️ 1,234 views</span>
                    <button className="edit-announcement-btn">Edit</button>
                  </div>
                </div>
                <div className="announcement-item">
                  <div className="announcement-header">
                    <h4 className="announcement-title">Scholarship Program Updates</h4>
                    <span className="announcement-date">March 10, 2024</span>
                  </div>
                  <p className="announcement-excerpt">Important updates regarding our alumni scholarship program...</p>
                  <div className="announcement-footer">
                    <span className="announcement-views">👁️ 892 views</span>
                    <button className="edit-announcement-btn">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="analytics-section">
            <div className="section-header">
              <h2 className="section-title">Analytics & Reports</h2>
              <div className="time-range-selector">
                <select className="time-select">
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                  <option value="1y">Last year</option>
                </select>
                <button className="export-report-btn">📊 Export Report</button>
              </div>
            </div>
            
            <div className="analytics-grid">
              {analyticsData.map((metric, index) => (
                <div key={index} className="analytics-card">
                  <div className="analytics-header">
                    <h3 className="analytics-title">{metric.label}</h3>
                    <span className={`trend-indicator ${metric.trend}`}>
                      {metric.trend === 'up' ? '📈' : '📉'} {metric.change}
                    </span>
                  </div>
                  <div className="analytics-value">{metric.value}</div>
                  <div className="analytics-chart-placeholder">
                    <div className="mini-chart"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="detailed-analytics">
              <div className="analytics-chart-section">
                <div className="chart-container">
                  <div className="chart-header">
                    <h3>Alumni Engagement Over Time</h3>
                    <div className="chart-controls">
                      <button className="chart-type active">Line</button>
                      <button className="chart-type">Bar</button>
                      <button className="chart-type">Area</button>
                    </div>
                  </div>
                  <div className="chart-placeholder">
                    <div className="chart-mock">📊 Chart visualization would go here</div>
                  </div>
                </div>
              </div>

              <div className="top-performers">
                <h3 className="subsection-title">Top Performing Content</h3>
                <div className="performance-list">
                  <div className="performance-item">
                    <div className="performance-rank">1</div>
                    <div className="performance-content">
                      <h4>Alumni Success Stories</h4>
                      <span className="performance-metric">2,456 engagements</span>
                    </div>
                    <div className="performance-change up">+23%</div>
                  </div>
                  <div className="performance-item">
                    <div className="performance-rank">2</div>
                    <div className="performance-content">
                      <h4>Job Board Updates</h4>
                      <span className="performance-metric">1,789 engagements</span>
                    </div>
                    <div className="performance-change up">+18%</div>
                  </div>
                  <div className="performance-item">
                    <div className="performance-rank">3</div>
                    <div className="performance-content">
                      <h4>Event Announcements</h4>
                      <span className="performance-metric">1,234 engagements</span>
                    </div>
                    <div className="performance-change down">-5%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contribution-trends">
              <h3 className="subsection-title">Contribution Trends</h3>
              <div className="contribution-stats">
                <div className="contribution-card">
                  <div className="contribution-icon">💰</div>
                  <div className="contribution-data">
                    <div className="contribution-amount">$2.4M</div>
                    <div className="contribution-label">Total Contributions</div>
                    <div className="contribution-period">This Year</div>
                  </div>
                </div>
                <div className="contribution-card">
                  <div className="contribution-icon">👥</div>
                  <div className="contribution-data">
                    <div className="contribution-amount">1,247</div>
                    <div className="contribution-label">Active Contributors</div>
                    <div className="contribution-period">This Month</div>
                  </div>
                </div>
                <div className="contribution-card">
                  <div className="contribution-icon">📈</div>
                  <div className="contribution-data">
                    <div className="contribution-amount">78%</div>
                    <div className="contribution-label">Engagement Rate</div>
                    <div className="contribution-period">Average</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'search' && (
          <div className="search-section">
            <div className="section-header">
              <h2 className="section-title">Advanced Search & Filter Tools</h2>
              <button className="save-search-btn">💾 Save Search</button>
            </div>
            
            <div className="search-controls">
              <div className="search-bar">
                <span className="search-icon">🔍</span>
                <input 
                  type="text"
                  placeholder="Search alumni by name, email, ID, or profession..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <button className="clear-search">✕</button>
              </div>
              
              <div className="filter-row">
                <div className="filter-group">
                  <label className="filter-label">Department</label>
                  <select 
                    className="filter-select"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                  >
                    <option value="">All Departments</option>
                    <option value="cs">Computer Science</option>
                    <option value="eng">Engineering</option>
                    <option value="bus">Business Administration</option>
                    <option value="med">Medicine</option>
                    <option value="law">Law</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-label">Graduation Year</label>
                  <select 
                    className="filter-select"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option value="">All Years</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="before2019">Before 2019</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-label">Location</label>
                  <select 
                    className="filter-select"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    <option value="">All Locations</option>
                    <option value="ny">New York</option>
                    <option value="ca">California</option>
                    <option value="tx">Texas</option>
                    <option value="fl">Florida</option>
                    <option value="international">International</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-label">Status</label>
                  <select className="filter-select">
                    <option value="">All Statuses</option>
                    <option value="verified">Verified</option>
                    <option value="pending">Pending</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div className="filter-actions">
                  <button className="search-button">🔍 Search</button>
                  <button className="reset-filters">🔄 Reset</button>
                </div>
              </div>
            </div>

            <div className="search-results">
              <div className="results-header">
                <h3>Search Results</h3>
                <span className="results-count">{recentAlumni.length} results found</span>
              </div>
              
              <div className="results-grid">
                {recentAlumni.map((alumni) => (
                  <div key={alumni.id} className="alumni-result-card">
                    <div className="alumni-card-header">
                      <div className="alumni-avatar">{alumni.name.charAt(0)}</div>
                      <div className="alumni-info">
                        <h4 className="alumni-name">{alumni.name}</h4>
                        <p className="alumni-department">{alumni.department}</p>
                      </div>
                      <span className={`alumni-status ${alumni.status}`}>
                        {alumni.status}
                      </span>
                    </div>
                    <div className="alumni-card-content">
                      <div className="alumni-details">
                        <span className="detail-item">📧 {alumni.email}</span>
                        <span className="detail-item">🎓 Class of {alumni.year}</span>
                        <span className="detail-item">📍 Location: NY</span>
                      </div>
                    </div>
                    <div className="alumni-card-actions">
                      <button className="quick-action view">👁️ View</button>
                      <button className="quick-action edit">✏️ Edit</button>
                      <button className="quick-action contact">📧 Contact</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="saved-searches">
              <h3 className="subsection-title">Saved Searches</h3>
              <div className="saved-search-list">
                <div className="saved-search-item">
                  <span className="saved-search-name">CS Graduates 2020-2022</span>
                  <span className="saved-search-count">234 results</span>
                  <button className="load-search">Load</button>
                </div>
                <div className="saved-search-item">
                  <span className="saved-search-name">New York Alumni</span>
                  <span className="saved-search-count">456 results</span>
                  <button className="load-search">Load</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'permissions' && (
          <div className="permissions-section">
            <div className="section-header">
              <h2 className="section-title">User Roles & Permissions</h2>
              <button className="primary-btn">+ Add Role</button>
            </div>
            
            <div className="roles-overview">
              <div className="role-card super-admin">
                <div className="role-header">
                  <div className="role-icon">👑</div>
                  <div className="role-info">
                    <h3 className="role-title">Super Admin</h3>
                    <p className="role-description">Full system access and control over all features</p>
                  </div>
                  <span className="role-badge high">High Access</span>
                </div>
                <div className="role-permissions">
                  <div className="permission-item">✅ User Management</div>
                  <div className="permission-item">✅ System Configuration</div>
                  <div className="permission-item">✅ Data Export/Import</div>
                  <div className="permission-item">✅ Financial Reports</div>
                </div>
                <div className="role-users">
                  <span className="user-count">2 users</span>
                  <button className="manage-users-btn">Manage Users</button>
                </div>
              </div>

              <div className="role-card admin">
                <div className="role-header">
                  <div className="role-icon">👨‍💼</div>
                  <div className="role-info">
                    <h3 className="role-title">Administrator</h3>
                    <p className="role-description">Comprehensive access to most administrative features</p>
                  </div>
                  <span className="role-badge medium">Medium Access</span>
                </div>
                <div className="role-permissions">
                  <div className="permission-item">✅ Alumni Management</div>
                  <div className="permission-item">✅ Event Management</div>
                  <div className="permission-item">✅ Communication Tools</div>
                  <div className="permission-item">❌ System Configuration</div>
                </div>
                <div className="role-users">
                  <span className="user-count">5 users</span>
                  <button className="manage-users-btn">Manage Users</button>
                </div>
              </div>

              <div className="role-card moderator">
                <div className="role-header">
                  <div className="role-icon">🛡️</div>
                  <div className="role-info">
                    <h3 className="role-title">Moderator</h3>
                    <p className="role-description">Content moderation and basic user management</p>
                  </div>
                  <span className="role-badge medium">Medium Access</span>
                </div>
                <div className="role-permissions">
                  <div className="permission-item">✅ Content Moderation</div>
                  <div className="permission-item">✅ User Verification</div>
                  <div className="permission-item">✅ Basic Reports</div>
                  <div className="permission-item">❌ User Deletion</div>
                </div>
                <div className="role-users">
                  <span className="user-count">8 users</span>
                  <button className="manage-users-btn">Manage Users</button>
                </div>
              </div>

              <div className="role-card event-manager">
                <div className="role-header">
                  <div className="role-icon">📅</div>
                  <div className="role-info">
                    <h3 className="role-title">Event Manager</h3>
                    <p className="role-description">Event creation and management only</p>
                  </div>
                  <span className="role-badge limited">Limited Access</span>
                </div>
                <div className="role-permissions">
                  <div className="permission-item">✅ Create Events</div>
                  <div className="permission-item">✅ Manage Attendees</div>
                  <div className="permission-item">✅ Event Reports</div>
                  <div className="permission-item">❌ User Management</div>
                </div>
                <div className="role-users">
                  <span className="user-count">12 users</span>
                  <button className="manage-users-btn">Manage Users</button>
                </div>
              </div>
            </div>

            <div className="permission-matrix">
              <h3 className="subsection-title">Permission Matrix</h3>
              <div className="matrix-table">
                <table className="permission-table">
                  <thead>
                    <tr>
                      <th>Permission</th>
                      <th>Super Admin</th>
                      <th>Admin</th>
                      <th>Moderator</th>
                      <th>Event Manager</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>User Management</td>
                      <td>✅</td>
                      <td>✅</td>
                      <td>⚠️</td>
                      <td>❌</td>
                    </tr>
                    <tr>
                      <td>Alumni Data</td>
                      <td>✅</td>
                      <td>✅</td>
                      <td>✅</td>
                      <td>👁️</td>
                    </tr>
                    <tr>
                      <td>Event Management</td>
                      <td>✅</td>
                      <td>✅</td>
                      <td>👁️</td>
                      <td>✅</td>
                    </tr>
                    <tr>
                      <td>Financial Reports</td>
                      <td>✅</td>
                      <td>❌</td>
                      <td>❌</td>
                      <td>❌</td>
                    </tr>
                    <tr>
                      <td>System Settings</td>
                      <td>✅</td>
                      <td>❌</td>
                      <td>❌</td>
                      <td>❌</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="permission-legend">
                <span className="legend-item">✅ Full Access</span>
                <span className="legend-item">👁️ View Only</span>
                <span className="legend-item">⚠️ Limited</span>
                <span className="legend-item">❌ No Access</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'communication' && (
          <div className="communication-section">
            <div className="section-header">
              <h2 className="section-title">Communication Hub</h2>
              <button className="primary-btn">+ New Campaign</button>
            </div>

            <div className="communication-stats">
              <div className="comm-stat-card">
                <div className="stat-icon">📧</div>
                <div className="stat-info">
                  <h3>2,456</h3>
                  <p>Emails Sent This Month</p>
                </div>
              </div>
              <div className="comm-stat-card">
                <div className="stat-icon">📰</div>
                <div className="stat-info">
                  <h3>89%</h3>
                  <p>Newsletter Open Rate</p>
                </div>
              </div>
              <div className="comm-stat-card">
                <div className="stat-icon">📱</div>
                <div className="stat-info">
                  <h3>1,234</h3>
                  <p>Push Notifications</p>
                </div>
              </div>
              <div className="comm-stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-info">
                  <h3>3,567</h3>
                  <p>Active Subscribers</p>
                </div>
              </div>
            </div>

            <div className="communication-tools">
              <div className="comm-tool-card">
                <div className="tool-header">
                  <div className="tool-icon">📧</div>
                  <h3 className="tool-title">Bulk Email Campaign</h3>
                </div>
                <p className="tool-description">Send targeted emails to specific alumni groups based on various criteria</p>
                <div className="tool-features">
                  <span className="feature-tag">📊 Analytics</span>
                  <span className="feature-tag">🎯 Targeting</span>
                  <span className="feature-tag">📝 Templates</span>
                </div>
                <button className="tool-action-btn">Create Campaign</button>
              </div>

              <div className="comm-tool-card">
                <div className="tool-header">
                  <div className="tool-icon">📰</div>
                  <h3 className="tool-title">Newsletter Management</h3>
                </div>
                <p className="tool-description">Create, schedule, and manage monthly alumni newsletters</p>
                <div className="tool-features">
                  <span className="feature-tag">⏰ Scheduling</span>
                  <span className="feature-tag">📱 Responsive</span>
                  <span className="feature-tag">📈 Tracking</span>
                </div>
                <button className="tool-action-btn">Manage Newsletters</button>
              </div>

              <div className="comm-tool-card">
                <div className="tool-header">
                  <div className="tool-icon">🔔</div>
                  <h3 className="tool-title">Push Notifications</h3>
                </div>
                <p className="tool-description">Send instant notifications about important events and updates</p>
                <div className="tool-features">
                  <span className="feature-tag">⚡ Instant</span>
                  <span className="feature-tag">🎯 Targeted</span>
                  <span className="feature-tag">📊 Delivery Reports</span>
                </div>
                <button className="tool-action-btn">Send Notification</button>
              </div>

              <div className="comm-tool-card">
                <div className="tool-header">
                  <div className="tool-icon">📱</div>
                  <h3 className="tool-title">SMS Messaging</h3>
                </div>
                <p className="tool-description">Send urgent updates and reminders via SMS to alumni</p>
                <div className="tool-features">
                  <span className="feature-tag">🚨 Urgent</span>
                  <span className="feature-tag">📊 Reports</span>
                  <span className="feature-tag">⏰ Scheduled</span>
                </div>
                <button className="tool-action-btn">Send SMS</button>
              </div>
            </div>

            <div className="recent-campaigns">
              <h3 className="subsection-title">Recent Campaigns</h3>
              <div className="campaign-list">
                <div className="campaign-item">
                  <div className="campaign-header">
                    <div className="campaign-type email">📧</div>
                    <div className="campaign-info">
                      <h4 className="campaign-title">Alumni Reunion Announcement</h4>
                      <p className="campaign-meta">Sent to 2,456 recipients • March 15, 2024</p>
                    </div>
                    <div className="campaign-stats">
                      <span className="campaign-stat">📈 89% Open Rate</span>
                      <span className="campaign-stat">👆 67% Click Rate</span>
                    </div>
                  </div>
                  <div className="campaign-actions">
                    <button className="view-report-btn">View Report</button>
                    <button className="duplicate-btn">Duplicate</button>
                  </div>
                </div>

                <div className="campaign-item">
                  <div className="campaign-header">
                    <div className="campaign-type newsletter">📰</div>
                    <div className="campaign-info">
                      <h4 className="campaign-title">Monthly Alumni Newsletter</h4>
                      <p className="campaign-meta">Sent to 3,567 subscribers • March 1, 2024</p>
                    </div>
                    <div className="campaign-stats">
                      <span className="campaign-stat">📈 92% Open Rate</span>
                      <span className="campaign-stat">👆 73% Click Rate</span>
                    </div>
                  </div>
                  <div className="campaign-actions">
                    <button className="view-report-btn">View Report</button>
                    <button className="duplicate-btn">Duplicate</button>
                  </div>
                </div>

                <div className="campaign-item">
                  <div className="campaign-header">
                    <div className="campaign-type notification">🔔</div>
                    <div className="campaign-info">
                      <h4 className="campaign-title">Event Registration Reminder</h4>
                      <p className="campaign-meta">Sent to 456 recipients • February 28, 2024</p>
                    </div>
                    <div className="campaign-stats">
                      <span className="campaign-stat">📱 95% Delivered</span>
                      <span className="campaign-stat">👆 45% Clicked</span>
                    </div>
                  </div>
                  <div className="campaign-actions">
                    <button className="view-report-btn">View Report</button>
                    <button className="duplicate-btn">Duplicate</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );

};

export default AdminPage;