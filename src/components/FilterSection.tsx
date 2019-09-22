import React from 'react';
import styled from 'styled-components';
import SliderFilter from './SliderFilter';

interface IProps {
  inputChangeHandler: (event: any) => void;
  resetFilter: () => void;
  slideFilter: {
    grayscale: number;
    sepia: number;
    invert: number;
    hueRotate: number;
    blur: number;
    contrast: number;
  };
}

const Container = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  width: 70%;
  margin: 2rem auto;
  > h2 {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0;
  }
  > p {
    border: 1px solid black;
    border-radius: 2rem;
    margin: -2rem 1rem 1rem auto;
    font-size: 1rem;
    width: 4rem;
    text-align: center;
    padding: 0.5rem 2rem;
    display: block;
    cursor: pointer;
    outline: none;
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
  }
`;

// const Reset = styled.div`
//   border: 1px solid black;
//   border-radius: 2rem;
//   margin-left: auto;
//   padding: 0.5rem 2rem;
//   display: block;
// `;

const FilterSection: React.FC<IProps> = ({
  inputChangeHandler,
  slideFilter,
  resetFilter,
}) => {
  return (
    <Container>
      <h2>Filter</h2>
      <p onClick={resetFilter}>초기화</p>
      <div>
        <SliderFilter
          id="grayscale"
          value={slideFilter.grayscale}
          inputChangeHandler={inputChangeHandler}
        />
        <SliderFilter
          id="sepia"
          value={slideFilter.sepia}
          inputChangeHandler={inputChangeHandler}
        />
        <SliderFilter
          id="invert"
          value={slideFilter.invert}
          inputChangeHandler={inputChangeHandler}
        />
        <SliderFilter
          id="hueRotate"
          value={slideFilter.hueRotate}
          inputChangeHandler={inputChangeHandler}
        />
        <SliderFilter
          id="blur"
          value={slideFilter.blur}
          inputChangeHandler={inputChangeHandler}
        />
        <SliderFilter
          id="contrast"
          value={slideFilter.contrast}
          inputChangeHandler={inputChangeHandler}
        />
      </div>
    </Container>
  );
};

export default FilterSection;
