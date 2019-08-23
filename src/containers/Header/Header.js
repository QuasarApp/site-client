import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import MenuDrawer from '../MenuDrawer/MenuDrawer';

const Header = () => {
  const menuItems = ['Home', 'Snake', 'QtDeployer', 'Honoe-Towers'];

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = value => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(value);
  };

  return (
    <header>
      <div className="container">
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <MenuDrawer open={open} toggleDrawer={toggleDrawer} menuItems={menuItems} />
      </div>
    </header>
  );
};

export default Header;
