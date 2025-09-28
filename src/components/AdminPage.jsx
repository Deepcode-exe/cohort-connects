import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import './AdminPage.css';

const AdminPage = ({ onToggleMode, isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const dashboardStats = {
    totalAlumni: 2847,
    activeUsers: 1256,
    pendingApprovals: 23,
    recentUpdates: 156
  };

  const recentAlumni = [
    { id: 1, name: 'John Smith', department: 'Computer Science', year: '2020', status: 'verified' },
    { id: 2, name: 'Sarah Johnson', department: 'Business Admin', year: '2019', status: 'pending' },
    { id: 3, name: 'Mike Chen', department: 'Engineering', year: '2021', status: 'verified' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Alumni Reunion 2024', date: '2024-06-15', attendees: 245 },
    { id: 2, title: 'Career Fair', date: '2024-05-20', attendees: 89 },
    { id: 3, title: 'Networking Mixer', date: '2024-04-30', attendees: 156 },
  ];

  return (
    <div className={`admin-container ${isDarkMode ? 'dark' : ''}`}>
      {/* Header */}
      <div className="admin-header">
        <div className="header-content">
          <h1 className="admin-title">Alumni Management System</h1>
          <div className="header-actions">
            <button 
              className="dark-mode-toggle"
              onClick={onToggleMode}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <div className="admin-profile">
              <div className="profile-avatar">👨‍💼</div>
              <span className="profile-name">Admin User</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="admin-main">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="admin-tabs">
          <TabsList className="admin-tab-list">
            <TabsTrigger value="dashboard" className="admin-tab-trigger">Dashboard</TabsTrigger>
            <TabsTrigger value="alumni" className="admin-tab-trigger">Alumni Data</TabsTrigger>
            <TabsTrigger value="events" className="admin-tab-trigger">Events</TabsTrigger>
            <TabsTrigger value="analytics" className="admin-tab-trigger">Analytics</TabsTrigger>
            <TabsTrigger value="search" className="admin-tab-trigger">Search & Filter</TabsTrigger>
            <TabsTrigger value="permissions" className="admin-tab-trigger">Permissions</TabsTrigger>
            <TabsTrigger value="communication" className="admin-tab-trigger">Communication</TabsTrigger>
          </TabsList>

          {/* Dashboard Overview */}
          <TabsContent value="dashboard" className="admin-tab-content">
            <div className="dashboard-section">
              <h2 className="section-title">Dashboard Overview</h2>
              
              <div className="stats-grid">
                <Card className="stat-card">
                  <div className="stat-content">
                    <div className="stat-icon">👥</div>
                    <div className="stat-details">
                      <h3 className="stat-number">{dashboardStats.totalAlumni.toLocaleString()}</h3>
                      <p className="stat-label">Total Alumni</p>
                    </div>
                  </div>
                </Card>

                <Card className="stat-card">
                  <div className="stat-content">
                    <div className="stat-icon">✅</div>
                    <div className="stat-details">
                      <h3 className="stat-number">{dashboardStats.activeUsers.toLocaleString()}</h3>
                      <p className="stat-label">Active Users</p>
                    </div>
                  </div>
                </Card>

                <Card className="stat-card">
                  <div className="stat-content">
                    <div className="stat-icon">⏳</div>
                    <div className="stat-details">
                      <h3 className="stat-number">{dashboardStats.pendingApprovals}</h3>
                      <p className="stat-label">Pending Approvals</p>
                    </div>
                  </div>
                </Card>

                <Card className="stat-card">
                  <div className="stat-content">
                    <div className="stat-icon">🔄</div>
                    <div className="stat-details">
                      <h3 className="stat-number">{dashboardStats.recentUpdates}</h3>
                      <p className="stat-label">Recent Updates</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="dashboard-tables">
                <Card className="data-table-card">
                  <h3 className="table-title">Recent Alumni Registrations</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentAlumni.map((alumni) => (
                        <TableRow key={alumni.id}>
                          <TableCell>{alumni.name}</TableCell>
                          <TableCell>{alumni.department}</TableCell>
                          <TableCell>{alumni.year}</TableCell>
                          <TableCell>
                            <Badge variant={alumni.status === 'verified' ? 'default' : 'secondary'}>
                              {alumni.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>

                <Card className="data-table-card">
                  <h3 className="table-title">Upcoming Events</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Event</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Attendees</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {upcomingEvents.map((event) => (
                        <TableRow key={event.id}>
                          <TableCell>{event.title}</TableCell>
                          <TableCell>{event.date}</TableCell>
                          <TableCell>{event.attendees}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Alumni Data Management */}
          <TabsContent value="alumni" className="admin-tab-content">
            <div className="alumni-section">
              <div className="section-header">
                <h2 className="section-title">Alumni Data Management</h2>
                <Button className="add-button">Add New Alumni</Button>
              </div>

              <div className="management-grid">
                <Card className="management-card">
                  <h3 className="card-title">Add Alumni</h3>
                  <p className="card-description">Register new alumni profiles with verification</p>
                  <Button variant="outline" className="card-button">Add Profile</Button>
                </Card>

                <Card className="management-card">
                  <h3 className="card-title">Edit Profiles</h3>
                  <p className="card-description">Update existing alumni information</p>
                  <Button variant="outline" className="card-button">Edit Data</Button>
                </Card>

                <Card className="management-card">
                  <h3 className="card-title">Verify Alumni</h3>
                  <p className="card-description">Review and approve pending registrations</p>
                  <Button variant="outline" className="card-button">Review Pending</Button>
                </Card>

                <Card className="management-card">
                  <h3 className="card-title">Remove Profiles</h3>
                  <p className="card-description">Deactivate or remove alumni accounts</p>
                  <Button variant="outline" className="card-button">Manage Removal</Button>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Event & Announcement Management */}
          <TabsContent value="events" className="admin-tab-content">
            <div className="events-section">
              <div className="section-header">
                <h2 className="section-title">Event & Announcement Management</h2>
                <Button className="add-button">Create Event</Button>
              </div>

              <div className="event-management-grid">
                <Card className="event-card">
                  <h3 className="card-title">Alumni Events</h3>
                  <p className="card-description">Create and manage alumni gatherings and reunions</p>
                  <div className="card-actions">
                    <Button variant="outline" size="sm">Create Event</Button>
                    <Button variant="ghost" size="sm">View All</Button>
                  </div>
                </Card>

                <Card className="event-card">
                  <h3 className="card-title">Announcements</h3>
                  <p className="card-description">Publish important news and updates</p>
                  <div className="card-actions">
                    <Button variant="outline" size="sm">New Announcement</Button>
                    <Button variant="ghost" size="sm">Manage</Button>
                  </div>
                </Card>

                <Card className="event-card">
                  <h3 className="card-title">Reunions</h3>
                  <p className="card-description">Organize class reunions and special events</p>
                  <div className="card-actions">
                    <Button variant="outline" size="sm">Plan Reunion</Button>
                    <Button variant="ghost" size="sm">Schedule</Button>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Analytics & Reports */}
          <TabsContent value="analytics" className="admin-tab-content">
            <div className="analytics-section">
              <h2 className="section-title">Analytics & Reports</h2>
              
              <div className="analytics-grid">
                <Card className="analytics-card">
                  <h3 className="card-title">Engagement Metrics</h3>
                  <div className="metric-value">78%</div>
                  <p className="metric-description">Active user engagement rate</p>
                </Card>

                <Card className="analytics-card">
                  <h3 className="card-title">Contribution Trends</h3>
                  <div className="metric-value">$2.4M</div>
                  <p className="metric-description">Total contributions this year</p>
                </Card>

                <Card className="analytics-card">
                  <h3 className="card-title">Activity Logs</h3>
                  <div className="metric-value">1,247</div>
                  <p className="metric-description">Actions logged this month</p>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Search & Filter Tools */}
          <TabsContent value="search" className="admin-tab-content">
            <div className="search-section">
              <h2 className="section-title">Advanced Search & Filter</h2>
              
              <div className="search-controls">
                <Input 
                  placeholder="Search alumni by name, email, or ID..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                
                <div className="filter-row">
                  <Select>
                    <SelectTrigger className="filter-select">
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="eng">Engineering</SelectItem>
                      <SelectItem value="bus">Business Admin</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="filter-select">
                      <SelectValue placeholder="Graduation Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="filter-select">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="tx">Texas</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button className="search-button">Search</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* User Roles & Permissions */}
          <TabsContent value="permissions" className="admin-tab-content">
            <div className="permissions-section">
              <h2 className="section-title">User Roles & Permissions</h2>
              
              <div className="roles-grid">
                <Card className="role-card">
                  <h3 className="role-title">Super Admin</h3>
                  <p className="role-description">Full system access and control</p>
                  <Badge variant="destructive">High Access</Badge>
                </Card>

                <Card className="role-card">
                  <h3 className="role-title">Moderators</h3>
                  <p className="role-description">Content moderation and user management</p>
                  <Badge variant="default">Medium Access</Badge>
                </Card>

                <Card className="role-card">
                  <h3 className="role-title">Event Managers</h3>
                  <p className="role-description">Event creation and management only</p>
                  <Badge variant="secondary">Limited Access</Badge>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Communication Hub */}
          <TabsContent value="communication" className="admin-tab-content">
            <div className="communication-section">
              <h2 className="section-title">Communication Hub</h2>
              
              <div className="communication-grid">
                <Card className="comm-card">
                  <h3 className="card-title">Bulk Email</h3>
                  <p className="card-description">Send emails to selected alumni groups</p>
                  <Button variant="outline" className="card-button">Compose Email</Button>
                </Card>

                <Card className="comm-card">
                  <h3 className="card-title">Newsletters</h3>
                  <p className="card-description">Create and schedule newsletters</p>
                  <Button variant="outline" className="card-button">Create Newsletter</Button>
                </Card>

                <Card className="comm-card">
                  <h3 className="card-title">Notifications</h3>
                  <p className="card-description">Send push notifications and alerts</p>
                  <Button variant="outline" className="card-button">Send Notification</Button>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;