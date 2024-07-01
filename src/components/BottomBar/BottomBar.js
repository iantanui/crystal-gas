import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Inventory, AttachMoney } from '@mui/icons-material';
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
      <BottomNavigationAction label="Home" value="/" icon={<Home />} />
      <BottomNavigationAction label="Products" value="/products" icon={<Inventory />} />
      <BottomNavigationAction label="Refills" value="/refills" icon={<AttachMoney />} />
      <BottomNavigationAction label="Manage" value="/management" icon={<Home />} />
    </BottomNavigation>
  );
};

export default BottomBar;
