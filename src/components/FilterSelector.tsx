import React from 'react';
import styled from 'styled-components';

interface IProps {
  id: string;
  value: string;
  inputChangeHandler: (event: any) => void;
}

const Container = styled.div`
  border: 1px solid black;
  width: 70%;
  margin: 2rem auto;
`;

const FilterSelector: React.FC<IProps> = ({
  id,
  value,
  inputChangeHandler,
}) => {
  return (
    <Container>
      <input
        type="radio"
        name="filter"
        id={id}
        value={value}
        onChange={e => inputChangeHandler(e)}
      />
      <label htmlFor={id}>{id}</label>
    </Container>
  );
};

export default FilterSelector;
