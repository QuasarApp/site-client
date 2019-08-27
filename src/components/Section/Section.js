// @flow
import React from 'react';

import SectionText from './SectionText';
import SectionTitle from './SectionTitle';

import './Section.css';

type SectionProps = {
  children: any;
}

const Section = ({ children }: SectionProps) => <section className="section"><div className="container">{children}</div></section>;

Section.text = SectionText;
Section.title = SectionTitle;

export default Section;
