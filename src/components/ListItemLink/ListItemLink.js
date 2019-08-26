// @flow
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';

const ListItemLink = (props: any) => <ListItem button color="primary" component={Link} {...props} />;

export default memo<any>(ListItemLink);
