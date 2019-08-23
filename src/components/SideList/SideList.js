// @flow
import React, { memo } from 'react';
import './SideList.css';
import List from '@material-ui/core/List';
import ListItemLink from '../ListItemLink/ListItemLink';

type Props = {
  closeMenu: any,
  menuItems: Array<any>,
};

const SideList = ({ closeMenu, menuItems }: Props) => (
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

export default memo<Props>(SideList);
