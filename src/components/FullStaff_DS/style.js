import styled from 'styled-components';

export const WrapperFullStaff = styled.div `
  padding: 8em 0 3em;
  background: white;
  @media (max-width: 991px){
    padding-top: 10em;
  }
`;
export const FullStaffContent = styled.div `
    margin-bottom: 7em;
    
    .full_staff_title {
      font-size: calc(.03 * 100vw);
      font-weight: 600;
      line-height: 1;
      text-align: center;
    }
    .full_staff_text {
      font-size: 1.7em;
      color: black;
    }
    @media (max-width: 991px){
      margin-bottom: 6em;
    }
    @media (max-width: 768px){
      .full_staff_title{
        font-size: 26px;
      }
      .full_staff_text {
      font-size: 1.4em;
    }
    @media (max-width: 425px) {
      .full_staff_text {
      font-size: 1.2em;
    }
    }
`;
export const WrapperStuffShip = styled.div `
  
  .stuff_ship_title {
    margin-bottom: 1.2em;
    font-size: calc(.025 * 100vw);
    line-height: 1;
    font-weight: 600;
  }
  @media(max-width: 768px) {
    .stuff_ship_title {
      font-size: 1.6em;
      margin-bottom: 1em;
    }
  }
`;
export const WrapperCarousel = styled.div `
  position: relative;
  
`;

export const CarouselCard = styled.div `
    width: 80%;
    padding: 0 18px;

  .carousel_item_img {
      width: 100%;
      height: auto;
  }
  @media(max-width: 991px) {
    .carousel_item_img {
      max-height: 550px;
    }
  }
`;


export const CarouselBoxBtns = styled.div `
  margin-top: 1em;
  
  .carousel_btn_pre,
  .carousel_btn_next{
    position: absolute;
    top: 50%;
    width: 45px;
    height: 45px;
    background: white;
    border: 1px solid black;
    border-radius: 50%;
    color: black;
    cursor:pointer;
    transform: translate(0,-50%);
    transition-duration: .78s;
  }
  .carousel_btn_next {
    right: 10px;
  }
  .carousel_btn_pre {
    left: 15px;
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
  @media(max-width: 425px) {
    .carousel_btn_pre,
    .carousel_btn_next{
      position: initial;
    }
    .carousel_btn_pre:first-child {
      margin-right: 7px;
    }
  }
`;

