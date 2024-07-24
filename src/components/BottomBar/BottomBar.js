import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { DashboardCustomizeOutlined, AssessmentOutlined, TuneOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './BottomBar.css';

const BottomBar = () => {
  const navigate = useNavigate();

  return (
    <BottomNavigation
      onChange={(event, newValue) => {
        navigate(newValue);
      }}
       className='bottom-bar'
    >
      <BottomNavigationAction label="Dashboard" value="/dashboard" icon={<DashboardCustomizeOutlined />} showLabel/>
      <BottomNavigationAction label="Inventory" value="/inventory" icon={<AssessmentOutlined />} showLabel />
      <BottomNavigationAction label="Manage" value="/management" icon={<TuneOutlined />} showLabel />
    </BottomNavigation>
  );
};

export default BottomBar;
