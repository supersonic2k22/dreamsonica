import React from "react";
import {
    WrapperMenu,
} from './style'

import {pages} from '../../configs/app.config'

const Navbar = ({toScroll}) => {
    return (
        <WrapperMenu>
            <div className="navbar_menu_list" style={{display: 'flex'}}>
                <p  onClick={()=>toScroll(pages.tips)} style={{margin: 0, alignSelf: 'flex-end'}}>POWER TEAM</p>
            </div>
            <div className="navbar_menu_list">
                <p  onClick={()=>toScroll(pages.workFlow)} style={{margin: 0, alignSelf: 'flex-end'}}>WORKFLOW</p>
            </div>
            <div className="navbar_menu_list">
                <p  onClick={()=>toScroll(pages.privilege)} style={{margin: 0, alignSelf: 'flex-end'}}>SERVICE</p>
            </div>
            <div className="navbar_menu_list">
                <p  onClick={()=>toScroll(pages.contact)} style={{margin: 0, alignSelf: 'flex-end'}}>CONTACT US</p>
            </div>
        </WrapperMenu>
    )
}

export default Navbar;