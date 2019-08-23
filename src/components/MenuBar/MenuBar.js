// @flow
import React, { memo } from 'react';
import MenuBarItem from '../MenuBarItem/MenuBarItem';

type MenuBarProps = {
  menuItems: string[],
}

const MenuBar = ({ menuItems }: MenuBarProps) => (
  <nav className="menu-bar">
    {menuItems.map(text => <MenuBarItem text={text} key={text} />)}
  </nav>
);

export default memo<MenuBarProps>(MenuBar);
