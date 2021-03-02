import React from 'react';

import { CardSlider } from '../CardSlider';
import { Heading } from '../Heading';
import { CardProps } from '../Card';
import { Highlight, HighlightProps } from '../Highlight';

import * as S from './styles';

export type ShowcaseProps = {
  title?: string;
  highlight?: HighlightProps;
  items?: CardProps[];
  color?: 'black' | 'white';
};

const Showcase = ({ title, highlight, items, color = 'black' }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="primary">
        {title}
      </Heading>
    )}

    {!!highlight && <Highlight {...highlight} />}
    {!!items && <CardSlider items={items} color={color} />}
  </S.Wrapper>
);

export default Showcase;
