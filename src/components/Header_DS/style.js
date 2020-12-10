import styled from "styled-components";

export const WrapperPlayer = styled.div `
  position: relative;
  width: 100%;
  height: 100%; 
  padding: 0 1em;
  
  :after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: visible;
  background: RGBA(252,252,255,.75);
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
  font-family: Montserrat;
  padding: 15em 0 6em 0;
`;

export const PromoTitle = styled.h1 `
  margin-bottom: 30px;
  font-size: calc(.085*100vw);;
  font-weight: 700;
  line-height: 1;
`;

export const PromoText = styled.p `
  padding-right: 3em;
  margin-bottom: 3em;
  font-size: 1.7em;
`;

export const PromoButton = styled.a `
  padding: 1.5em 5em;
  background: #f7941d;
  border-radius: 5em;
  font-size: 1.3em;
  font-weight: 700;
  color: white;
  transition: .7s;
  box-shadow: 0 0 15px 5px #f7941d;
  :hover {
  background: orangered;
  box-shadow: 0 0 15px 5px orangered;
  transform: translateX(10px);
  color: initial;
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
    transition: all 200ms ease-in;
    background:${props => props.pointStyle ? 'RGBA(252,252,255,1)' : 'transparent'};
    box-shadow:${props => props.pointStyle ? '0 5px 35px 1px black' : ''};
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
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