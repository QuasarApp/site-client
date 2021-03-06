// @flow
import React, { memo } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { SideList } from '../../components';

type MenuDrawerProps = {
  open: boolean,
  toggleDrawer: any,
  menuItems: string[],
};

const MenuDrawer = ({ open, toggleDrawer, menuItems }: MenuDrawerProps) => {
  const isBrowser = typeof window !== 'undefined';
  const iOS = isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      disableSwipeToOpen
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <SideList closeMenu={toggleDrawer(false)} menuItems={menuItems} />
    </SwipeableDrawer>
  );
};

export default memo<MenuDrawerProps>(MenuDrawer);
