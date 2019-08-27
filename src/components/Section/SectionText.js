// @flow
import React, { memo } from 'react';

type SectionTextProps = {
  children: any
}

const SectionText = ({ children }: SectionTextProps) => <p className="section__text">{children}</p>;

export default memo<SectionTextProps>(SectionText);
