import React from 'react';
import './QuickStats.css';

const QuickStats = ({ stats = { }}) => {
    const {
        activeEmployees=5,
        leavesThisMonth=2,
        payrollsProcessed=10,
    } = stats
  return (
    <section className="quick-stats">
      <h2>Quick Statistics</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>{stats.activeEmployees}</h3>
          <p>Active Employees</p>
        </div>
        <div className="stat-card">
          <h3>{stats.leavesThisMonth}</h3>
          <p>Leaves This Month</p>
        </div>
        <div className="stat-card">
          <h3>{stats.payrollsProcessed}</h3>
          <p>Payrolls Processed</p>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
