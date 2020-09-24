import styled from 'styled-components';
import { ScreenSize } from './ScreenSize';

export const RootContainer = styled.div`
  width: 100vw;
  max-width: 1800px;
  margin: 0 auto;
  padding: 20px 10%;
  flex: 1;

  @media (max-width: ${ScreenSize.LG_MIN}) {
    padding: 20px 5%;
  }
`;
