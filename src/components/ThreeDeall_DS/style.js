import styled from "styled-components";

export const WrapperThreeDeal = styled.div `
  padding: 8em 0 0 0;
  box-shadow: 5px -21px 60px 45px white;
`;

export const ThreeDealTitle = styled.h2 `
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
  text-align: center;
  font-size: 1.4em;
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

export const ThreeDealBox = styled.div `
  .threeDeal_icon {
  padding: 0 1em;
  width: 100%;
  margin-bottom: 25px;
  text-align: center;
  }
  .threeDeal_icon img {
  height: 90px;
  }
  
  .threeDeal_title{
    font-size: calc(.01606*100vw);
    font-weight: 600;
    color: black;
    text-align: center;
    line-height: 1.2;
  }
  .threeDeal_text {
  font-size: 18px;
  color: black;
  }
  @media (max-width: 1440px){
  .threeDeal_title{
    font-size: 18px;
    }
  }
`;