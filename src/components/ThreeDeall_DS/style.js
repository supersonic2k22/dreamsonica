import styled from "styled-components";

export const WrapperThreeDeal = styled.div `
padding: 10em 0;
  box-shadow: 5px -21px 60px 45px white;
`;

export const ThreeDealTitle = styled.h2 `
  font-size: calc(.03 * 100vw);
  font-weight: 600;
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
  font-size: 1.7em;
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
  font-size: 20px;
  color: black;
  }
  @media (max-width: 1440px){
  .threeDeal_title{
    font-size: 22px;
    }
  }
`;