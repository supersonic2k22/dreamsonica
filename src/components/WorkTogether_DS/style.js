import styled from "styled-components";


export const Wrapper = styled.div`
  padding: 10em 0;
  background: #eff0f2;
  
  
  .content_title {
  margin-bottom: 1.5em;
  font-size: 25px;
  font-weight: 600;
  line-height: 1;

  }
  @media (min-width: 768px) {
    .content_title {
      font-size: calc(.0333 * 100vw);
    }
  }
  @media (max-width: 1024px) {
      padding: 4em;
`;

export const HelperElement = styled.div `
  
  @media(max-width: 1199px) {
    padding: 0 1em;
    text-align: center;
    
    .workTogether_item--text {
      font-size: 18px;
    }
  }
`;


export const WrapperCarousel = styled.div `
  @media(max-width: 1199px) {
    margin-bottom: 2em;
  }
  
`;

export const CarouselCard = styled.div `
  
  
  .carousel_card_title{
    font-size: calc(.01606*100vw);
    font-weight: 600;
    color: black;
  }
  .carousel_card_text {
  font-size: 20px;
  color: black;
  }
  @media (max-width: 1440px){
  .carousel_card_title{
    font-size: 22px;
  }
  }
`;

export const CarouselBoxBtns = styled.div `
  margin-top: 1em;
  
  .carousel_btn_pre,
  .carousel_btn_next{
    width: 45px;
    height: 45px;
    background: white;
    border: 1px solid slategray;
    border-radius: 50%;
    color: slategray;
    cursor:pointer;
    transition-duration: .78s;
  }
  .carousel_btn_pre:first-child {
   margin-right: 5px;
  }
  .carousel_btn_pre:focus,
  .carousel_btn_next:focus{
     outline: none;
  }
  .carousel_btn_pre:hover,
  .carousel_btn_next:hover{
     color: orange;
     border-color: orange;
  }
  @media (max-width: 1199px) {
    text-align: center;
  }
`;

export const WrapperIcons = styled.div `
display: -webkit-box;
display: -ms-flexbox;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
  .workTogether_item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    max-width: 49.5%;
    height: 233px;
    max-height: 233px;
    margin: 2px 0;
    padding: 15px;
    cursor: pointer;
    -webkit-transition: .4s;
    -o-transition: .4s;
    transition: .4s;
    background: #fff;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    
  }
  .workTogether_item:nth-of-type(1) {
    border-top-left-radius: 10px;
  }.workTogether_item:nth-of-type(2) {
    border-top-right-radius: 10px;
  }.workTogether_item:nth-of-type(3) {
    border-bottom-left-radius: 10px;
  }.workTogether_item:nth-of-type(4) {
    padding: 0 1.5em;
    border-bottom-right-radius: 10px;
  }
  .workTogether_item:hover:not(:last-child) {
    background: #265186;
  }
  @media (max-width: 1199px) {
   margin-bottom: 3em;
    .workTogether_item {
      max-width: 30%;
      border-radius: 10px;
    }
    .workTogether_item:hover {
      background: #265186;
    }
  }
  @media(max-width: 425px) {
    .workTogether_item {
      height: 118px;
    }
  }
  .workTogether_img {
    max-width: 100%;
    height: auto;
    min-height: 1px;
    max-height: 100%;
  }
`;

export const WorkTogetherIconBtn = styled.button `
  padding: 12px 40px;
  background: #f7941d;
  border-radius: 5em;
  font-size: 1.3em;
  font-weight: 700;
  border: 2px solid orange;
  color: white;
  cursor:pointer;
  transition: .7s;
  :focus{
  outline: none;
  }
  :hover {
  background: transparent;
    color: orange;
  }
`;