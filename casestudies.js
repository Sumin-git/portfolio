import React from "react";
import StatCard from "./statecard";
import CodingSessionsChart from "./codingchart";
import MonthlyContributionsChart from "./monthlycontribution";
import DetailsTable from "./tablecontent";
import './portfolio.css';

const Dashboard = () => (
    <div className="dashboard">
      <div className="overview">
        <StatCard title="Projects Completed" value="15" change="25" positive />
        <StatCard title="Repositories Pushed" value="8" change="-10" />
        <StatCard title="Issues Resolved" value="50" change="15" positive />
        <StatCard title="Code Reviews" value="30" change="5" positive />
      </div>
      <div className="charts">
        <div className="chart">
          <h2>Coding Hours Over Time</h2>
          <CodingSessionsChart />
        </div>
        <div className="chart">
          <h2>Monthly GitHub Contributions</h2>
          <MonthlyContributionsChart />
        </div>
      </div>
      <div className="details">
        <DetailsTable/>
      </div>
    </div>
  );
  
  export default Dashboard;