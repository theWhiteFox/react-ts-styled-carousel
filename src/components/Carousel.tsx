import React, { useState } from "react";
import { CarouselStyles as S } from './styled'

const colors = ["#0088FE", "#00C49F", "#FFBB28"];

const Carousel = () => {

  const [count, setCount] = useState(0)

  // Use Title and Wrapper like any other React component 
  // – except they're styled!
  return (
    <S.Wrapper>
      <S.Title>
        Vite + React Carousel
      </S.Title>

      <S.CarouselStyled>
        <S.SlideshowSlider>
          {colors.map((backgroundColor, index) => (
            <S.Card key={index} style={{ backgroundColor }} />
          ))}
        </S.SlideshowSlider>

        <S.Indicators>
          {colors.map((_, index) => (
            <S.Indicator key={index} />
          ))}
        </S.Indicators>
      </S.CarouselStyled>
    </S.Wrapper>
  )
}

export default Carousel

