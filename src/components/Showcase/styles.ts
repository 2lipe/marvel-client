import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Container } from '../Container';
import * as HeadingStyles from '../Heading/styles';
import * as CardSliderStyles from '../CardSlider/styles';
import * as HighlightStyles from '../Highlight/styles';

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${CardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 1);
        margin-left: calc(-${theme.grid.gutter} / 1);
      `}
    }

    ${CardSliderStyles.Wrapper} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`;
