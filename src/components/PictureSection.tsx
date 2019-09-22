import React from 'react';
import styled from 'styled-components';

interface IProps {
  pictures: string[];
}

const Container = styled.div`
  border: 1px solid black;
  border-radius: 2rem;
  min-height: 200px;
  width: 80%;
  margin: 0 auto;
  > div {
    font-size: 2rem;
    margin-top: 5rem;
    text-align: center;
  }
`;

const Picture = styled.img`
  width: 20%;
  margin: 1rem;
`;

const PictureSection: React.FC<IProps> = ({ pictures }) => {
  return (
    <Container>
      {pictures.length ? (
        pictures.map((picture, key) => <Picture key={key} src={picture} />)
      ) : (
        <div>캡쳐해보세요!</div>
      )}
    </Container>
  );
};

export default PictureSection;
