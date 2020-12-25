import styled from 'styled-components'

export const WrapperLogoHeader = styled.div `
  
  img {
    width: 100%;
    max-width: 300px;
    height: 100%;
    max-height: 100px;
  }
  @media(max-height: 576px) {
    img {
      max-height: 75px;
    }
  }
  @media(max-width: 375px){
    img {
      max-width: 250px;
    }
  }
`;