// @flow
import React from 'react';

import { Section } from '../../components';
import './ErrorPage.css';

type ErrorPageProps = {
  error: ?string
}

const ErrorPage = ({ error }: ErrorPageProps) => {
  const errorText = error || 'Something wrong';
  return (
    <div className="error-wrapper">
      <Section>
        <div className="error-container">
          <Section.title>{errorText}</Section.title>
        </div>
      </Section>
    </div>
  );
};

export default ErrorPage;
