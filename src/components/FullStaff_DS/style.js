import styled from 'styled-components';

export const WrapperFullStaff = styled.div `
  padding: 8em 0 3em;
  background: white;
`;
export const FullStaffContent = styled.div `
    margin-bottom: 3em;
    
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

`;

export const CarouselCard = styled.div `
    width: 80%;
    padding: 0 18px;
  .carousel_item_img {
      width: 100%;
      max-height: 100%;
      height: 450px;
      border-radius: 30px;
  }
`;

export const CarouselBoxBtns = styled.div `
  margin-top: 1em;
  text-align: center;
  
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
`;