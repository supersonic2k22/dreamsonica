import React, { Component } from "react";
import {slide as Menu} from 'react-burger-menu';
import "./styleBurger.css"



export default class BurgerMenu extends Component{

    state = {
        menuOpen: false
    }
    handleStateChange = (state) => {
        this.setState({menuOpen: state.isOpen})
    }
    toggleMenu = () => {
        this.setState({menuOpen: !this.state.menuOpen})
    }
    burgerLinkClick = (ankhor) => {
        this.props.toScroll(ankhor)
        this.toggleMenu();
    }

    render() {

        return(
            <Menu right width={'100%'}  noOverlay isOpen={this.state.menuOpen}
                  onStateChange={(state) => {this.handleStateChange(state)}}>
                    <p id="expertise"
                       className="menu-item"
                       onClick={()=>this.burgerLinkClick('who_we_are')}
                    >
                        WHO WE ARE
                    </p>
                    <p id="service_fa"
                       className="menu-item"
                       onClick={()=>this.burgerLinkClick('why_choose_us')}>
                        WHY CHOOSE US
                    </p>
                    <p id="home"
                       className="menu-item"
                       onClick={()=>this.burgerLinkClick('how_do_we_work')}>
                        HOW DO WE WORK
                    </p>
                    <p id="contact"
                       className="menu-item"
                       onClick={()=>this.burgerLinkClick('contact_us')}>
                        CONTACT US
                    </p>
            </Menu>
        )
    }
}


