// @flow
import React, { memo } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './MenuBarItem.css';

type MenuBarItemProps = {
  text: string,
  location: any,
}

const ITEM_CLASS_NAME = 'menu-bar__item';
const ITEM_ACTIVE_CLASS_NAME = 'active-menu-item';

const MenuBarItem = ({ text, location }: MenuBarItemProps) => {
  const className = [ITEM_CLASS_NAME, 'custom-button'];

  const { pathname } = location;
  const isActive = (pathname.includes(text));

  if (isActive) {
    className.push(ITEM_ACTIVE_CLASS_NAME);
  }

  return <Button color="primary" className={className.join(' ')}><Link to={`/${text}`}>{text}</Link></Button>;
};

export default withRouter(memo<MenuBarItemProps>(MenuBarItem));
