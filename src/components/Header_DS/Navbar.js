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
                <p  onClick={()=>toScroll('powerTeam')} style={{margin: 0, alignSelf: 'flex-end'}}>
                    <TeamOutlined className={'menu_icon_power-team'}/>
                    POWER TEAM
                </p>
            </div>
            <div className="navbar_menu_list">
                <p  onClick={()=>toScroll('workflow')} style={{margin: 0, alignSelf: 'flex-end'}}>
                    <ApiOutlined className={'menu_icon_workflow'}/>
                    WORKFLOW
                </p>
            </div>
            <div className="navbar_menu_list">
                <p  onClick={()=>toScroll('service')} style={{margin: 0, alignSelf: 'flex-end'}}>
                    <RocketOutlined className={'menu_icon_service'}/>
                    SERVICE
                </p>
            </div>
            <div className="navbar_menu_list">
                <p  onClick={()=>toScroll('same')} style={{margin: 0, alignSelf: 'flex-end'}}>
                    <CommentOutlined className={'menu_icon_contact'}/>
                    CONTACT US
                </p>
            </div>
        </WrapperMenu>
    )
}

export default Navbar;