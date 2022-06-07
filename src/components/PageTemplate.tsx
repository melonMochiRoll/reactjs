import React, { FC } from 'react';
import styled from '@emotion/styled';
import Header from './header/Header';

interface Props {
  children: React.ReactNode;
}

const PageTemplate: FC<Props> = ({ children }) => {
  return (
    <MainBackground>
      <Header />
      <MainBox>
        {children}
      </MainBox>
    </MainBackground>
  );
}

export default PageTemplate;

export const MainBackground = styled.div`
  position: fixed;
  text-align: center;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background-color: #e8e8e8;
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 700px;
  height: 600px;
  margin: 30px auto 0 auto;
  padding: 10px 15px 0px 15px;
  border-radius: 6px;
  background-color: #fffcf9;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
`;