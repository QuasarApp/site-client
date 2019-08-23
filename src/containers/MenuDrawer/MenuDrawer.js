// @flow
import React, { memo } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { SideList } from '../../components';

type Props = {
  open: boolean,
  toggleDrawer: any,
  menuItems: Array<any>,
};

const MenuDrawer = ({ open, toggleDrawer, menuItems }: Props) => {
  const isBrowser = typeof window !== 'undefined';
  const iOS = isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <SideList closeMenu={toggleDrawer(false)} menuItems={menuItems} />
    </SwipeableDrawer>
  );
};

export default memo<Props>(MenuDrawer);
