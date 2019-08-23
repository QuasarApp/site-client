import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import MenuDrawer from '../MenuDrawer/MenuDrawer';
import { MenuBar } from '../../components';

const Header = () => {
  const menuItems = ['Home', 'Snake', 'QtDeployer', 'Honoe-Towers'];

  const [open, setOpen] = useState(false);

  const toggleDrawer = value => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(value);
  };

  return (
    <header>
      <MenuDrawer open={open} toggleDrawer={toggleDrawer} menuItems={menuItems} />
      <div className="container">
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <MenuBar menuItems={menuItems} />
      </div>
    </header>
  );
};

export default Header;
