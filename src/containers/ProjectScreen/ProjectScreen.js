// @flow
import React from 'react';

import ErrorPage from '../ErrorPage/ErrorPage';

import * as Projects from '../../projects';

type ProjectScreenType = {
  match: any;
}
const ProjectScreen = ({ match }: ProjectScreenType) => {
  const { projectName } = match.params;
  const Project = Projects[projectName] || ErrorPage;
  return <Project />;
};

export default ProjectScreen;
