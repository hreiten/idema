import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ScreenSize } from '../shared/ScreenSize';
import ResponsiveImage from '../components/ResponsiveImage';
import { RoutePaths } from '../Menu/Header';

const Content = () => {
  const Layout = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    width: 100%;
    @media (max-width: ${ScreenSize.SM_MIN}) {
      flex-direction: column;
    } ;
  `;

  const Column = styled.div`
    border: 1px solid grey;
    margin-left: auto;
    width: 50%;
    padding: 0 15px;
    flex-direction: column;

    ::nth-last-child() {
      margin-right: auto;
    }

    @media (max-width: ${ScreenSize.SM_MIN}) {
      width: 100%;
    } ;
  `;

  const TextWrapper = styled.div`
    align-self: center;
    text-align: end;
    padding: 5rem;
    @media (max-width: ${ScreenSize.SM_MIN}) {
      padding: 1px;
    } ;
  `;

  const Text = styled.div`
    border: 1px solid grey;

    h2 {
      flex-direction: end;
    }
  `;

  const Linkstyle = styled(Link)`
    border: 1px solid lightgray;
  `;

  return (
    <>
      <Layout>
        <Column>
          <ResponsiveImage
            src="https://images.unsplash.com/photo-1597412149254-7b67336fa324?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </Column>
        <Column>
          <TextWrapper>
            <Text>
              <h2>Hva gjør vi?</h2>
              <p>
                Vi har fokus på riktig kvalitet tilpasset kundens behov og være en god samarbeidspartner i
                prosjektgjennomføring.
              </p>
              <Linkstyle to={RoutePaths.ABOUT}> Les mer </Linkstyle>
            </Text>
          </TextWrapper>
        </Column>
      </Layout>
    </>
  );
};

export default Content;
