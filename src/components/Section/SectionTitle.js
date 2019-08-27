// @flow
import React, { memo } from 'react';

type SectionTitleProps = {
  rank: number,
  children: any
}

const SectionTitle = ({ rank, children }: SectionTitleProps) => {
  const Element = `h${rank}`;
  return <Element className="section__title">{children}</Element>;
};

export default memo<SectionTitleProps>(SectionTitle);
