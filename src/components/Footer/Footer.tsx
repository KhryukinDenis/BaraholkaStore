import React from 'react';
import '../Footer/Footer.scss'
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()

    return (
        <div className="footer">
            <div className="socseti">
                <img className="ico" src="https://cdn.icon-icons.com/icons2/2389/PNG/512/telegram_logo_icon_144811.png" alt=''/>
                <img className="ico" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/vk_black_logo_icon_147058.png" alt='' />
                <img className="ico" src="https://cdn.icon-icons.com/icons2/2428/PNG/512/instagram_black_logo_icon_147122.png" alt='' />
            </div>
            <div onClick={() => navigate('/')} className="logo">
                <img className="logoIco" src="https://cdn.icon-icons.com/icons2/1886/PNG/512/tshirt_120689.png" alt='' />
            </div>
            <div className="description">
                <div className="text">
                    г. Воронеж, 2013-2023 ©
                </div>
            </div>
        </div>
    );
};

export default Footer;