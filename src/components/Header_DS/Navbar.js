import React from "react";
import {
    WrapperMenu,
} from './style'

const Navbar = ({toScroll}) => {
    return (
        <WrapperMenu>
            <div className="navbar_menu_list">
                <p  onClick={()=>toScroll('workflow')}>WORKFLOW</p>
            </div>
            <div className="navbar_menu_list">
                <p  onClick={()=>toScroll('power_team')}>POWER TEAM</p>
            </div>
            <div className="navbar_menu_list">
                <p  onClick={()=>toScroll('service')}>SERVICE</p>
            </div>
            <div className="navbar_menu_list">
                <p  onClick={()=>toScroll('same')}>CONTACT US</p>
            </div>
        </WrapperMenu>
    )
}

export default Navbar;