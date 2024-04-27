import React, { useEffect, useRef, useState } from "react";
import { CarouselStyles as S } from './styled'

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

const Carousel = () => {

  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(0);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout()
    };
  }, [index])

  // Use Title and Wrapper like any other React component 
  // – except they're styled!
  return (
    <S.Wrapper>
      <S.Title>
        Vite + React Carousel
      </S.Title>

      <S.CarouselStyled>
        <S.SlideshowSlider
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {colors.map((backgroundColor, index) => (
            <S.Card key={index} style={{ backgroundColor }} />
          ))}
        </S.SlideshowSlider>

        <S.Indicators>
          {colors.map((_, idx) => (
            <S.Indicator key={idx} 
            className={`${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
            />
          ))}
        </S.Indicators>
      </S.CarouselStyled>
    </S.Wrapper>
  )
}

export default Carousel

