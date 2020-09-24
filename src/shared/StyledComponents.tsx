import styled from 'styled-components';
import { ScreenSize } from './ScreenSize';

export const RootContainer = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 1800px;
  margin: 0 auto;
  padding: 5% 10%;

  @media (max-width: ${ScreenSize.LG_MIN}) {
    padding: 10vh 5% 10%;
  }
`;
