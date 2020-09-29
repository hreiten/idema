import styled from 'styled-components';
import { ScreenSize } from './ScreenSize';

export const RootContainer = styled.div`
  width: 100vw;
  max-width: 2000px;
  margin: 0 auto;
  padding: 10px 10%;
  flex: 1;

  @media (max-width: ${ScreenSize.LG_MIN}) {
    padding: 10px 5%;
  }
`;
