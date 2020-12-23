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
                       onClick={()=>this.burgerLinkClick('workflow')}
                    >
                        POWER TEAM
                    </p>
                    <p id="service_fa"
                       className="menu-item"
                       onClick={()=>this.burgerLinkClick('service')}>
                        SERVICE
                    </p>
                    <p id="home"
                       className="menu-item"
                       onClick={()=>this.burgerLinkClick('powerTeam')}>
                        WORKFLOW
                    </p>
                    <p id="contact"
                       className="menu-item"
                       onClick={()=>this.burgerLinkClick('same')}>
                        CONTACT US
                    </p>
            </Menu>
        )
    }
}


