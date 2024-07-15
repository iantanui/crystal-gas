import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { DashboardCustomizeOutlined, AssessmentOutlined, TuneOutlined, Inventory2Outlined } from '@mui/icons-material';
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
      <BottomNavigationAction label="Products" value="/products" icon={<Inventory2Outlined />} showLabel />
      <BottomNavigationAction label="Inventory" value="/inventory" icon={<AssessmentOutlined />} showLabel />
      <BottomNavigationAction label="Manage" value="/management" icon={<TuneOutlined />} showLabel />
    </BottomNavigation>
  );
};

export default BottomBar;
