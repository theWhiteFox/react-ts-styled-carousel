import styled from "styled-components";

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
`;

const SlideshowSlider = styled.ul`
  white-space: nowrap;
  transition: ease 1000ms;
`;


/* indicators */
const Indicators = styled.div`
  text-align: center;
`;

const Indicator = styled.div`
  display: inline-block;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: #c4c4c4;

  &.active {
    background-color: #ec4899;
    outline: none;
  }
`;

export const CarouselStyles = {
  Wrapper,
  Title,
  CarouselStyled,
  SlideshowSlider,
  Indicators,
  Indicator,
};
