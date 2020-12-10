import styled from "styled-components";

export const WrapperPartners = styled.div `
  padding: 7em 0;
`;

export const PartnersTitle = styled.h2 `
  font-size: calc(.03 * 100vw);
  font-weight: 600;
  line-height: 1;
  @media  (max-width: 768px) {
   font-size: 25px;
  }
  @media  (max-width: 576px) {
   font-size: 28px;
  }
`;

export const PartnersText = styled.p `
  margin-bottom: 60px;
  font-size: 1.7em;
  @media  (max-width: 576px) {
   font-size: 1.5em;
  }
`;

export const PartnersBox = styled.div `
  .partners_icon {
  padding: 0 1em;
  width: 100%;
  margin-bottom: 25px;
  text-align: center;
  }
  .partners_icon img {
  height: 90px;
  }
  
  .partners_title{
    font-size: calc(.01506*100vw);
    font-weight: 600;
    color: black;
    text-align: center;
  }
  .partners_text {
  font-size: 20px;
  color: black;
  }
  @media (max-width: 1440px){
  .partners_title{
    font-size: 22px;
    }
  }
`;