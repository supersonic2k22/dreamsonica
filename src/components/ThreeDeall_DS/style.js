import styled from "styled-components";

export const WrapperThreeDeal = styled.div `
  overflow: hidden;
  position: relative;
  padding: 8em 0 0 0;
  box-shadow: 5px -21px 60px 45px white;
  width: 100%;
  height: 100%;

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: visible;
    background: RGBA(252,252,255,.7);
    z-index: -1;
  }
`;

export const ThreeDealTitle = styled.h2 `
  margin-bottom: 1.5em;
  text-align: center;
  font-size: 45px;
  font-weight: 700;
  line-height: 1;
  @media  (max-width: 768px) {
   font-size: 32px;
  }
  @media  (max-width: 375px) {
   font-size: 30px;
  }
`;

export const ThreeDealText = styled.p `
  margin-bottom: 60px;
  text-align: left;
  font-size: 1.4em;
  line-height: 2.2em;
  max-width: 45%;

  @media(max-width: 768px){
    max-width: 100%;
    text-align: center;
  }
  @media(max-width: 375px){
    margin-bottom: 30px;
  }
`;

export const HeroWrap = styled.div `
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

export const HeroBody = styled.div `
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;

  @media screen and (min-width: 980px) {
    padding: 8rem 1.5rem;
  }  
`;