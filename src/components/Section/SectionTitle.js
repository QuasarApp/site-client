// @flow
import React, { memo } from 'react';

type SectionTitleProps = {
  rank: string,
  children: any
}

const SectionTitle = ({ rank = '1', children }: SectionTitleProps) => {
  const Element = `h${rank}`;
  return <Element className="section__title">{children}</Element>;
};

export default memo<SectionTitleProps>(SectionTitle);
