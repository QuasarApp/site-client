// @flow
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

type MenuBarItemProps = {
  text: string
}

const MenuBarItem = ({ text }: MenuBarItemProps) => <Button><Link to={`/${text}`}>{text}</Link></Button>;

export default memo<MenuBarItemProps>(MenuBarItem);
