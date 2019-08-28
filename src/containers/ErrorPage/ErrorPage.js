// @flow
import React from 'react';

import { Section } from '../../components';
import './ErrorPage.css';
import oopsImg from '../../assets/oops.svg';

type ErrorPageProps = {
  error: ?string
}

const ErrorPage = ({ error }: ErrorPageProps) => {
  const errorText = error || 'Something wrong';
  return (
    <div className="error-wrapper">
      <Section>
        <div className="error-container">
          <img src={oopsImg} alt="oops" />
          <Section.title rank="2">{errorText}</Section.title>
        </div>
      </Section>
    </div>
  );
};

export default ErrorPage;
