import React, {FC} from 'react';
import '../Header/header.scss'
import {useNavigate} from "react-router-dom";

const Header: FC = () => {
    const navigate = useNavigate()

    return (
        <div className="header">
            <div className="left_header">
                <img onClick={() => navigate('/')} className="logo_img" src="https://cdn.icon-icons.com/icons2/1886/PNG/512/tshirt_120689.png" alt='' />
            </div>
            <div className="center_header">
                <p onClick={() => navigate('/')} className="name">Барахолка</p>
            </div>
            <div className="right_header">
                <img onClick={() => navigate('/basket')} className="basket_img" src="https://cdn.icon-icons.com/icons2/1886/PNG/512/cart_120706.png" alt='' />
            </div>
        </div>
    );
};

export default Header;