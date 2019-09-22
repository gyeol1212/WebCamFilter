import React from 'react';
import styled from 'styled-components';

interface IProps {
  id: string;
  value: number;
  inputChangeHandler: (event: any) => void;
}

const Container = styled.div`
  /* border: 1px solid black; */
  width: 90%;
  margin: 1rem auto;
  > input {
    width: 60%;
    margin-right: 4rem;
  }
`;

const SilderFilter: React.FC<IProps> = ({ id, value, inputChangeHandler }) => {
  let max = 100;
  let min = 0;
  let unit = '%';
  switch (id) {
    case 'hueRotate':
      max = 90;
      min = 0;
      unit = 'deg';
      break;
    case 'blur':
      max = 10;
      min = 0;
      unit = 'px';
      break;
    case 'contrast':
      max = 200;
      min = 0;
      break;
    default:
      break;
  }
  return (
    <Container>
      <input
        type="range"
        name="slider"
        min={min}
        max={max}
        id={id}
        value={value}
        onChange={e => inputChangeHandler(e)}
      />
      <label htmlFor={id}>
        {id} : {value + unit}
      </label>
    </Container>
  );
};

export default SilderFilter;
