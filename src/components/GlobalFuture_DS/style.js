import styled from 'styled-components';


export const WrapperGlobalFuture = styled.div `
  padding: 10em 0;
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
`;

export const GlobalFutureItem = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 450px;
  width: 100%;
  max-width: 250px;
  text-align: center;
  border-radius: 3em;
  margin: 0 auto;
  box-shadow: 0 0 50px 5px silver;
  
  
      .future_item_header_start img {
          width: 100%;
          max-width: 150px;
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
      padding: 4em 0;
      background: #3d93fc;
      border-top-left-radius: 3em;
      border-top-right-radius: 3em;
      }
      .future_item_footer {
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
      }
      @media (max-width: 1024px) {
        .future_item_footer {
          padding-top: 2em;
      }
      }
      @media (max-width: 768px) {
        .future_item_footer {
          padding-top: 1.5em;
      }
      }
`;