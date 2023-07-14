import React, {FC} from 'react';
import './ProductDetailPage.scss'
import {useNavigate} from "react-router-dom";
import MyButton, {ButtonVariants} from "../../UI/MyButton/MyButton";
import Loader from "../../UI/Loader/Loader";
import {useAppSelector} from "../../../hooks/redux";

interface ProductPageParams {
    id: string;
}

const ProductDetailPage: FC = () => {
    const navigate = useNavigate()
    const {product, isLoading} = useAppSelector(state => state.productReducer)

    return (
        <div className="productDetailPage">
            {
                isLoading
                    ? <Loader/>
                    :
                    <div className="productDetail">
                        <div className="top">
                            <MyButton variant={ButtonVariants.BACK} onClick={() => navigate(-1)}>Назад</MyButton>
                            <h1 className="title">{product?.title}</h1>
                        </div>
                        <div className="content">
                            <div className="img_box">
                                <img className="img" src={product?.image} alt='' />
                            </div>
                            <div className="characteristics">
                                <div className="price">
                                    Цена: <p>{product?.price} $</p>
                                </div>
                                <div className="description">
                                    Описание: <p>{product?.description}</p>
                                </div>
                                <div className="category">
                                    Категория: <p>{product?.category}</p>
                                </div>
                                <div className="rate">
                                    Средняя оценка:
                                    <p>
                                        {product?.rating.rate}
                                        <img src='https://cdn.icon-icons.com/icons2/1077/PNG/512/star_77949.png' alt=''/>
                                    </p>
                                </div>
                                <div className="count">
                                    Количество на складе: <p>{product?.rating.count}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default ProductDetailPage;