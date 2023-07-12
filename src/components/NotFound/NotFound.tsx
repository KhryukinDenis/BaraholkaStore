import React from 'react';
import '../NotFound/NotFound.scss'
import MyButton, {ButtonVariants} from "../UI/MyButton/MyButton";
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="nf">
            <div className="text"> Ничего не найдено :( </div>
            <MyButton variant={ButtonVariants.NF} onClick={() => navigate('/')}>Вернуться на главную</MyButton>
        </div>
    );
};

export default NotFound;