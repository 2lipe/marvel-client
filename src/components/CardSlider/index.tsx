import React from 'react';

import {
  IoIosArrowBack as ArrowLeft,
  IoIosArrowForward as ArrowRight,
} from 'react-icons/io';

import Slider, { SliderSettings } from '../Slider';
import { Card, CardProps } from '../Card';

import * as S from './styles';

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],

  nextArrow: <ArrowRight size={30} aria-label="next" />,
  prevArrow: <ArrowLeft size={30} aria-label="previous" />,
};

export type CardSlider = {
  items: CardProps[];
  color?: 'white' | 'black';
};

export const CardSlider = ({ items, color = 'black' }: CardSlider) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Card key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);
