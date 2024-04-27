import styled from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

/* Carousel */

const CarouselStyled = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 500px;
`;

const SlideshowSlider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
`;

const Card = styled.div`
  display: inline-block;
  height: 400px;
  width: 100%;
  border-radius: 40px;
`;

/* indicators */
const Indicators = styled.div`
  text-align: center;
`;

const Indicator = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: #c4c4c4;

  &.active {
    background-color: #6a0dad;
  }
`;

export const CarouselStyles = {
  Wrapper,
  Title,
  CarouselStyled,
  SlideshowSlider,
  Card,
  Indicators,
  Indicator,
};
