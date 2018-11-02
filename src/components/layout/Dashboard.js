import React from 'react';
import '../../styles/components/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard container mt-5">
      <div className="row">
        <div className="col bg-info p-4 m-1">
          <div className="row">
            <div className="col-md-4 border-right ">
              <i className="fas fa-info-circle fa-3x" />
            </div>
            <div className="col-md-8">
              <h3 className="text-center text-white">Info </h3>
            </div>
          </div>
        </div>

        <div className="col bg-info p-4 m-1">
          <div className="row">
            <div className="col-md-4 border-right">
              <i className="fas fa-user-plus fa-3x" />
            </div>
            <div className="col-md-8">
              <h3 className="text-center text-white">Add </h3>
            </div>
          </div>
        </div>
        <div className="col bg-info p-4 m-1">
          <div className="row">
            <div className="col-md-4 border-right ">
              <i className="fas fa-user-edit fa-3x" />
            </div>
            <div className="col-md-8">
              <h3 className="text-center text-white">Edit </h3>
            </div>
          </div>
        </div>
        <div className="col bg-info p-4 m-1">
          <div className="row">
            <div className="col-md-4 border-right ">
              <i className="fas fa-user-edit fa-3x" />
            </div>
            <div className="col-md-8">
              <h3 className="text-center text-white">Remove </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
