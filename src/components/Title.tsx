import React from 'react';
import styled from 'styled-components';

const MainTitle = styled.div`
  text-align: center;
  margin: 2rem;
  font-size: 2rem;
  font-weight: bold;
`;

interface IProps {
  children: string;
}

const Title: React.FC<IProps> = ({ children }) => {
  return <MainTitle>{children}</MainTitle>;
};

export default Title;
