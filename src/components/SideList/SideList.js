// @flow
import React, { memo } from 'react';
import './SideList.css';
import List from '@material-ui/core/List';
import ListItemLink from '../ListItemLink/ListItemLink';

type SideListProps = {
  closeMenu: any,
  menuItems: string[],
};

const SideList = ({ closeMenu, menuItems }: SideListProps) => (
  <div
    className="side-list"
    role="presentation"
    onClick={closeMenu}
    onKeyDown={closeMenu}
  >
    <List>
      {menuItems.map(text => (
        <ListItemLink key={text} to={`/${text}`}>
          {text}
        </ListItemLink>
      ))}
    </List>
  </div>
);

export default memo<SideListProps>(SideList);
