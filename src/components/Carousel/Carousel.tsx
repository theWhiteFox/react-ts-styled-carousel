import React from 'react'
import { Card, CardProps } from '../Card'
import { getRefValue, useStateRef } from '../../hooks/hooks'
import { useRef, useState } from 'react'
import { getTouchEventData } from '../../hooks/dom'
import { useWindowSize } from '../../hooks/useWindowSize'
import { CarouselStyles as S } from './styled'

export type Props = {
  items: Array<CardProps>
  indicators: Array<CardProps>
}

const MIN_SWIPE_REQUIRED = 80

const Carousel = ({ items, indicators }: Props) => {
  const containerRef = useRef<HTMLUListElement>(null)
  const containerWidthRef = useRef(0)
  const minOffsetXRef = useRef(0)
  const currentOffsetXRef = useRef(0)
  const startXRef = useRef(0)
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0)
  const [isSwiping, setIsSwiping] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const breakpoints = {
    small: '100%',
    medium: '50%',
    large: '33.3%',
  }

  const getBreakPoint = (windowWidth: number) => {
    if (windowWidth) {
      if (windowWidth < 480) {
        return breakpoints.small
      } else if (windowWidth < 810) {
        return breakpoints.medium
      } else {
        return breakpoints.large
      }
    } else {
      return undefined
    }
  }

  const { width } = useWindowSize()

  const onTouchMove = (e: TouchEvent | MouseEvent) => {
    const currentX = getTouchEventData(e).clientX
    const diff = getRefValue(startXRef) - currentX
    let newOffsetX = getRefValue(currentOffsetXRef) - diff

    const maxOffsetX = 0
    const minOffsetX = getRefValue(minOffsetXRef)

    if (newOffsetX > maxOffsetX) {
      newOffsetX = maxOffsetX
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX
    }

    setOffsetX(newOffsetX)
  }
  const onTouchEnd = () => {
    const currentOffsetX = getRefValue(currentOffsetXRef)
    const containerWidth = getRefValue(containerWidthRef)
    let newOffsetX = getRefValue(offsetXRef)

    const diff = currentOffsetX - newOffsetX

    // we need to check difference in absolute/positive value (if diff is more than 40px)
    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0) {
        // swipe to the right if diff is positive
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth
      } else {
        // swipe to the left if diff is negative
        newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth
      }
    } else {
      // remain in the current image
      newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth
    }

    setIsSwiping(false)
    setOffsetX(newOffsetX)
    setCurrentIndex(Math.abs(newOffsetX / containerWidth))

    window.removeEventListener('touchend', onTouchEnd)
    window.removeEventListener('touchmove', onTouchMove)
    window.removeEventListener('mouseup', onTouchEnd)
    window.removeEventListener('mousemove', onTouchMove)
  }
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    setIsSwiping(true)

    currentOffsetXRef.current = getRefValue(offsetXRef)
    startXRef.current = getTouchEventData(e).clientX

    const containerEl = getRefValue(containerRef)
    const containerWidth = containerEl.offsetWidth

    containerWidthRef.current = containerWidth
    minOffsetXRef.current = containerWidth - containerEl.scrollWidth

    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchend', onTouchEnd)
    window.addEventListener('mousemove', onTouchMove)
    window.addEventListener('mouseup', onTouchEnd)
  }

  const indicatorOnClick = (index: number) => {
    const containerEl = getRefValue(containerRef)
    const containerWidth = containerEl.offsetWidth

    setCurrentIndex(index)
    setOffsetX(-(containerWidth * index))
  }

  return (
    <S.CarouselStyled
      role="button"
      tabIndex={0}
      onTouchStart={onTouchStart}
      onMouseDown={onTouchStart}
    >
      <S.SlideshowSlider
        ref={containerRef}
        className={`carousel-track ${isSwiping ? 'is-swiping' : ''}`}
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          flexDirection: 'row',
          maxWidth: '100%',
          padding: '0',
          margin: '0',
          transform: `translate3d(${offsetX}px, 0, 0)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {items.map((_item, index) => (
          <Card
            id={_item.id}
            total={items.length}
            key={index}
            title={_item.title}
            description={_item.description}
            language={_item.language}
            url={_item.url}
            imageAlt={_item.imageAlt}
          />
        ))}
      </S.SlideshowSlider>
      <S.Indicators>
        {/* desktop */}
        {getBreakPoint(width) === '33.3%' ? (
          indicators.map((_item, index) => (
            <S.Indicator
              key={index}
              className={`${currentIndex === index ? 'active' : ''}`}
              data-testId="indicator" // we'll use this later on our test
              onClick={() => indicatorOnClick(index)}
            />
          )) // ipad 
        ) : getBreakPoint(width) === '50%' ? (
          indicators.map((_item, index) => (
            <S.Indicator
              key={index}
              className={`${currentIndex === index ? 'active' : ''}`}
              data-testId="indicator" // we'll use this later on our test
              onClick={() => indicatorOnClick(index)}
            />
          )) // mobile 
        ) : (
          items.map((_item, index) => (
            <S.Indicator
              key={index}
              className={`${currentIndex === index ? 'active' : ''}`}
              data-testId="indicator" // we'll use this later on our test
              onClick={() => indicatorOnClick(index)}
            />
          ))
        )}
      </S.Indicators>
    </S.CarouselStyled>
  )
}

export default Carousel
