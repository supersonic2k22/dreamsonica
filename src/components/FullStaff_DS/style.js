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

  .slick-prev,
  .slick-next {
    background: transparent;
  }

  .slick-prev {
    left: -40px;
    z-index: 10;
  }

  .slick-next {
    right: -20px;
  }

  .slick-next:before,
  .slick-prev:before {
    font-size: 38px;
    line-height: 1;
    opacity: 1;
    color: #1890ff;
    border-radius: 50%;
    box-shadow: 0 0 10px 0 lightslategray;
    transition: .7s;
  }

  .slick-next:hover:before,
  .slick-prev:hover:before {
    color: #fa7107;
  }
  
  @media(max-width: 1024px){
    .slick-prev {
      left: -20px;
    }
    .slick-next {
      right: -7px;
    }
  }
  @media(max-width: 768px){
    .slick-prev {
      left: 0;
    }
    .slick-next {
      right: 15px;
    }
  }
  @media (max-width: 425px) {
    
    .slick-next:before,
    .slick-prev:before {
      font-size: 28px;
    }
  }
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

