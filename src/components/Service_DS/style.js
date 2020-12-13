import styled from 'styled-components'

export const WrapperService = styled.div `
  padding: 8em 0;
  background: white;
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
  @media (max-width: 768px) {
      .service_content_title {
        margin-bottom: 1.3em;
        font-size: 26px;
      }
      .service_content_text {
        font-size: 1.3em;
      }
  }
`;
export const WrapperServiceDescription = styled.div `
  padding: 8em 0;
  background: white;
  border-radius: 2em;
  box-shadow: 0 0 50px 20px silver;
  
  @media (max-width: 425px) {
      padding: 4em 0;
    }
`;


export const WrapperServiceCarousel = styled.div `
    padding: 0 4em;
    @media (max-width: 425px) {
      padding: 0 2em;
    }
`;

export const CarouselItem = styled.div `
  
  
  .carousel_item_icon img {
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
`;


