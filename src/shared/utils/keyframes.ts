import { keyframes } from 'styled-components';

export const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
