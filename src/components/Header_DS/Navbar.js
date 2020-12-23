import React from "react";
import {
    TeamOutlined,
    ApiOutlined,
    RocketOutlined,
    CommentOutlined
} from '@ant-design/icons'
import {
    WrapperMenu,
} from './style'


const Navbar = ({toScroll}) => {
    return (
        <WrapperMenu>
            <div className="navbar_menu_list" style={{display: 'flex'}}>
                <p  onClick={()=>toScroll('who_we_are')} style={{margin: 0, alignSelf: 'flex-end'}}>
                    <TeamOutlined className={'menu_icon_power-team'}/>
                    WHO WE ARE
                </p>
            </div>
            <div className="navbar_menu_list">
                <p  onClick={()=>toScroll('why_choose_us')} style={{margin: 0, alignSelf: 'flex-end'}}>
                    <RocketOutlined className={'menu_icon_service'}/>
                    WHY CHOOSE US
                </p>
            </div>
            <div className="navbar_menu_list">
                <p  onClick={()=>toScroll('how_do_we_work')} style={{margin: 0, alignSelf: 'flex-end'}}>
                    <ApiOutlined className={'menu_icon_workflow'}/>
                    HOW DO WE WORK
                </p>
            </div>
            <div className="navbar_menu_list">
                <p  onClick={()=>toScroll('contact_us')} style={{margin: 0, alignSelf: 'flex-end'}}>
                    <CommentOutlined className={'menu_icon_contact'}/>
                    CONTACT US
                </p>
            </div>
        </WrapperMenu>
    )
}

export default Navbar;