import styled from 'styled-components';


export const WrapperGlobalFuture = styled.div `
  padding: 10em 0;
  box-shadow: 5px -21px 60px 45px white;
  @media (max-width: 500px) {
      padding: 3em;
`;

export const WrapperCarouselGlobal = styled.div `

  .slick-slide {
    padding: 0 20px;
  }
  .slick-slide img {
    display: initial;
  }
  @media (max-width: 576px) {
    .slick-slide {
      padding: 0 10px;
    }
  }
  @media (max-width: 320px) {
    .slick-slide {
      padding: 0 5px;
    }
  }
`;

export const GlobalFutureTitle  = styled.h2 `
font-size: calc(.024 * 100vw);
font-weight: 600;
line-height: 1;
margin-bottom: 2em;
text-align: center;
    
 @media(max-width: 1024px){
   font-size: 26px;
 }
  @media(max-width: 375px){
    margin-bottom: 1em;
  }
`;

export const GlobalFutureText = styled.p `
  margin-bottom: 100px;
  text-align: center;
  font-size: 1.4em;
  @media(max-width: 991px){
    margin-bottom: 70px;
  }
`;

export const GlobalFutureItem = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
  max-width: 250px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 3em;
  margin: 0 auto 30px;
  box-shadow: 3px 10px 7px 2px rgba(0, 0, 0, 0.2);
  
  
  .future_item_header img {
      width: 100%;
      max-width: 100px;
      height: auto;
      max-height: 100px;
  }
  .future_item_header_start--number {
     margin: 0;
     font-size: 40px;
     font-weight: 700;
     line-height: 1;
  }
  .future_item_header_start--title {
    margin-top: 1em;
    font-size: 20px;
    font-weight: 700;
  }
  .future_item_header {
    height: 100%;
    padding: 4em 0;
    background: #0b37b5;
    border-top-left-radius: 3em;
    border-top-right-radius: 3em;
  }
  .future_item_footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: calc(.166 * 100vw);
    padding: 4em 1.5em;
    background: #e9e9e9;
    border-bottom-left-radius: 3em;
    border-bottom-right-radius: 3em;
  }
  .future_item_footer--text {
    margin: 0;
    margin-bottom: 20px;
    font-size: 36px;
    font-weight: 700;
    line-height: 1;
  }
  .future_item_footer--title {
    font-weight: 600;
    vertical-align: middle;
  }
      
      @media(min-width: 1199px) {
        .future_item_footer {
          height: 200px;
        }
      }
      @media (max-width: 1024px) {
        .future_item_footer {
          padding-top: 2em;
        }
      }
      @media (max-width: 991px) {
        max-width: 100%;
      }
      @media (max-width: 768px) {
        .future_item_footer {
          padding-top: 1.5em;
       }
      }
    @media(max-width: 576px) {
      .future_item_footer {
        height: 150px;
      }
    }
    @media(max-width: 375px) {
      .future_item_header {
        padding: 2em 0;
      }
      .future_item_footer {
        padding: 1.5em 1.2em;
      }
    }
`;