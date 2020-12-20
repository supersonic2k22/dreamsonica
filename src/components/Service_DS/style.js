import styled from 'styled-components'

export const WrapperService = styled.div `
  padding: 8em 0;
  background: white;
  
  @media (max-width: 1199px) {
    padding-top: 14em;
  }

  @media (max-width: 991px) {
    padding-top: 10em;
  }
  @media (max-width: 576px) {
    padding: 4em .5em;
  }
`;

export const WrapperServiceContent = styled.div `

  .service_content_title {
    font-size: calc(.028 * 100vw);
    font-weight: 600;
    line-height: 1;
  }
  .service_content_text {
    font-size: 1.7em;
    line-height: 1.5;
  }
  @media (max-width: 991px) {
    margin-bottom: 3em;
  }
  @media (max-width: 768px) {
      .service_content_title {
        margin-bottom: 1.3em;
        font-size: 26px;
        text-align: center;
      }
      .service_content_text {
        font-size: 1.3em;
      }
      margin-bottom: 60px;
  }
`;
export const WrapperServiceDescription = styled.div `
  padding: 4em 0;
  background: white;
  border-radius: 2em;
  box-shadow: 0 0 30px 0 silver;


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
    color: #fa7107;
    border-radius: 50%;
    box-shadow: 0 0 10px 0 lightslategray;
    transition: .7s;
  }

  .slick-next:hover:before,
  .slick-prev:hover:before {
    color: #b04900;
  }


  @media (max-width: 991px) {
    padding: 1em 0;
  }
  @media (max-width: 425px) {
    .slick-prev{
      left: 2px;
    }
    .slick-next {
      right: 17px;
    }

    .slick-next:before,
    .slick-prev:before {
      font-size: 28px;
    }
  }
`;


export const WrapperServiceCarousel = styled.div `
    padding: 0 4em;
    @media (max-width: 425px) {
      padding: 0 0;
    }
`;

export const CarouselItem = styled.div `
  .carousel_item_icon img {
    width: 100%;
    height: auto;
    margin: 0 auto;
    margin-bottom: 2em;
  }
  .carousel_item_title {
    font-size: calc(.017 * 100vw);
    font-weight: 500;
    line-height: 1;
  }
  .carousel_item_text {
    font-size: 1.5em;
    line-height: 1.5;
  }
  @media (max-width: 1199px) {
      .carousel_item_title {
        font-size: 22px;
      }
  }
  @media (max-width: 991px) {
    .carousel_item_icon img {
      max-height: 450px;
    }
  }
`;



