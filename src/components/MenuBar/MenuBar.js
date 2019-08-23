// @flow
import React, { memo } from 'react';

type MenuBarProps = {
  menuItems: string[],
}

const MenuBar = ({ menuItems }: MenuBarProps) => (
  <ul className="menu-bar">
    {menuItems.map(text => (<li key={text}>{text}</li>))}
  </ul>
);

export default memo<MenuBarProps>(MenuBar);
