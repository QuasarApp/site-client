// @flow
import React, { memo } from 'react';
import MenuBarItem from '../MenuBarItem/MenuBarItem';
import './MenuBar.css';

import Logo from '../Logo/Logo';

type MenuBarProps = {
  menuItems: string[],
}

const MenuBar = ({ menuItems }: MenuBarProps) => (
  <nav className="menu-bar">
    <Logo />
    {menuItems.map(text => <MenuBarItem text={text} key={text} />)}
  </nav>
);

export default memo<MenuBarProps>(MenuBar);
