import styled from "styled-components";

export const WrapperPlayer = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
  
  :after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: visible;
  background: RGBA(252,252,255,.85);
  z-index: -10;
  }
  
 
.react-player video{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%; 
  z-index: -20;
  object-fit: cover;
}
`;
export const WrapperPromo = styled.div `
  padding: 23em 0 6em 0;

  @media( max-width: 425px) {
    padding-top: 20em;
  }
  @media( max-width: 375px) {
    padding-top: 12em;
  }
`;

export const PromoTitle = styled.h1 `
  margin-bottom: 50px;
  font-size: 30px;
  font-weight: 700;
  line-height: 1;
  
  @media( max-width: 991px) {
    text-align: center;
  }
`;

export const PromoText = styled.p `
  padding-right: 3em;
  margin-bottom: 5em;
  font-size: 1.5em;
  
  
  @media( max-width: 991px) {
    text-align: center;
    padding-right: 0;
  }
`;

export const PromoButton = styled.div `
        
   .promo_btn {
     padding: 17px 75px;
     background: #f7941d;
     border-radius: 5em;
     font-size: 1.3em;
     font-weight: 600;
     border: 2px solid orange;
     color: white;
     transition: .4s;
     cursor: pointer;
   }     
  .promo_btn:hover {
    background: transparent;
    transform: translateX(10px);
    color: orange;
  }
  
  @media( max-width: 991px) {
    text-align: center;
  }
  @media(max-width: 425px) {
      padding: 1em 2.5em;
  }
`;

export const WrapperNavbar = styled.div `
    position: fixed;
    top: 0;left: 0;
    margin: 0 auto;
    width: 100%;
    z-index: 1000;
        .container_navbar {
          width: 100%;
          max-width: 1540px;
          margin: 0 auto;
          padding: 0 1em;
          overflow: hidden;
        }
`;
export const TransitionNavbar = styled.div `
  .active {
    visibility: visible;
    transition: all 400ms ease-in;
    background:${props => props.pointStyle ? 'RGBA(252,252,255,1)' : 'transparent'};
    box-shadow:${props => props.pointStyle ? '0 4px 12px 0px rgba(0, 0, 0, 0.2)' : ''};
  }
  .hidden {
    visibility: hidden;
    transition: all 400ms ease-out;
    transform: translate(0, -100%);
  }
`;

export const WrapperMenu = styled.div `
display: flex;
align-content: center;
justify-content: flex-end;

.navbar_menu_list:not(:first-child) {
  margin-left: 5em;
}
.navbar_menu_list p {
color: black;
cursor: pointer;
transition-duration: .8s;
}
.navbar_menu_list p:hover {
color: orange;
}
`;