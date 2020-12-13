import React from "react";
import {
    WrapperMenu,
} from './style'

const Navbar = ({toScroll}) => {
    return (
        <WrapperMenu>
            <div className="navbar_menu_list" style={{display: 'flex'}}>
                <p  onClick={()=>toScroll('workflow')} style={{margin: 0, alignSelf: 'flex-end'}}>WORKFLOW</p>
            </div>
            <div className="navbar_menu_list">
                <p  onClick={()=>toScroll('power_team')} style={{margin: 0, alignSelf: 'flex-end'}}>POWER TEAM</p>
            </div>
            <div className="navbar_menu_list">
                <p  onClick={()=>toScroll('service')} style={{margin: 0, alignSelf: 'flex-end'}}>SERVICE</p>
            </div>
            <div className="navbar_menu_list">
                <p  onClick={()=>toScroll('same')} style={{margin: 0, alignSelf: 'flex-end'}}>CONTACT US</p>
            </div>
        </WrapperMenu>
    )
}

export default Navbar;