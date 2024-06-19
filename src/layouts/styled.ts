import styled from "styled-components";

const CarouselMainContainer = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: auto;
`;

const Layout = styled.section`
  height: 100vh;
`;

const PageContainer = styled.div`
  max-width: 1280px;
  margin-inline: auto;
  text-align: center;
`;

export const CarouselStyles = {
  Layout,
  PageContainer,
  CarouselMainContainer,
};
