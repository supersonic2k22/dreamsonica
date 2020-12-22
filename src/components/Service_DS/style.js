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
  
`;


export const WrapperServiceCarousel = styled.div `
    position: relative;
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



