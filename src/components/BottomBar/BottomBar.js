import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { DashboardCustomizeOutlined, AssessmentOutlined, TuneOutlined, Notifications } from '@mui/icons-material';
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
      <BottomNavigationAction label="Dashboard" value="/" icon={<DashboardCustomizeOutlined />} showLabel/>
      <BottomNavigationAction label="Alerts" value="/alerts" icon={<Notifications />} showLabel />
      <BottomNavigationAction label="Inventory" value="/inventory" icon={<AssessmentOutlined />} showLabel />
      <BottomNavigationAction label="Manage" value="/management" icon={<TuneOutlined />} showLabel />
    </BottomNavigation>
  );
};

export default BottomBar;
