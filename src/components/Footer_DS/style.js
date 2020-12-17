import styled from 'styled-components'

export const WrapperFooter = styled.div `
  margin-top: 70px;
`;

export const WrapperFooterContent = styled.div `
  padding: 2em 0;
  background: RGBA(252,252,255,1);
`;
export const WrapperFooterPrivacy = styled.div `
  padding: 4em 0;
  background: #636363;
  color: #ccc;
`;
export const WrapperLogoFooter = styled.div `
  display: flex;
  justify-content: flex-start;
  align-content: center;
  @media(max-width: 991px) {
    justify-content: center;
    padding-bottom: 2em;
  }
`;

export const WrapperSocialLinks = styled.div `
  display: flex;
  justify-content: flex-end;
  
  .social_links_item {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-left: 1em;
    transition: .7s;
  }
  .social_links_item a{
    font-size: 2em;
    color: darkslategray;
  }
  @media(max-width: 991px) {
    justify-content: center;
  }
`;

export const  PrivacyBrandFooter  = styled.div`
  display: flex;
  align-content: center;
  
  .brand_footer_text {
    font-size: 20px;
    font-weight: 300;
    line-height: 1;
  }
  @media(max-width: 991px) {
    justify-content: center;
    padding-bottom: 2em;
  } 
`;
export const  PrivacyPrivateFooter  = styled(PrivacyBrandFooter)`
  justify-content: flex-end;
  
  .private_link {
    font-size: 20px;
    font-weight: 300;
    line-height: 1;
    color: #ccc;
  }
  @media(max-width: 991px) {
    justify-content: center;
  } 
`;