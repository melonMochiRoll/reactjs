import styled from '@emotion/styled';
import React, { FC } from 'react';

const MainLayout: FC = ({ children }) => {
  return (
    <MainBackground>
      <MainBox>
        {children}
      </MainBox>
    </MainBackground>
  )
}

export default MainLayout;

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
  display: inline-block;
  margin-top: 100px;
  width: 600px;
  max-width: 700px;
  max-height: 600px;
  border-radius: 6px;
  box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  background-color: #fffcf9;
  padding: 15px;
`;