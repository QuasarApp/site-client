// @flow
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';

const ListItemLink = props => <ListItem button component={Link} {...props} />;

export default memo<any>(ListItemLink);
