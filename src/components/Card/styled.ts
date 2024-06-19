'use client'

import styled from 'styled-components'

// Create a Wrapper component that'll render a <section> tag with some styles

const CardWrapper = styled.div<{ $width?: string }>`
  flex: 0 0 auto;
  padding: 1rem;
  scroll-snap-align: start;
  flex-shrink: 0;
  width: ${(props) => props.$width || '98%'};
`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`

const Card = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  display: inline-block;
  height: 400px;
  width: 100%;
  list-style: none;
  margin: 15px 0 0 0;
  justify-content: center;
  align-items: center;
  border: 1px solid #4f5873;
  border-radius: 8px;
`

const CardContent = styled.div`
  position: 'absolute';
  top: '50%';
  left: '50%';
  transform: 'translate(-50%, -50%)';
  user-select: 'none';
  a {
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    padding: 2px 8px;
    margin: 1rem 2rem;
    left: 1;
  }
`

const CardHeader = styled.div`
  h2 {
    font-size: 1.8rem;
    padding: 8rem 2.4rem 0;
  }
  span {
    position: absolute;
    padding: 2px 8px;
    margin: 0.4rem;
    right: 0;
  }
`

const CardBody = styled.div`
  padding: 0.2rem 2.4rem;
  h3 {
    font-size: 1.2rem;
  }
`

export const CardStyles = {
  Wrapper,
  Title,
  CardWrapper,
  Card,
  CardContent,
  CardHeader,
  CardBody,
}
