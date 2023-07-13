import React, {FC, useEffect, useState} from 'react';
import './ProductDetailPage.scss'
import {IProduct} from "../../types/types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import MyButton, {ButtonVariants} from "../UI/MyButton/MyButton";
import Loader from "../UI/Loader/Loader";

interface ProductPageParams {
    id: string;
}

const ProductDetailPage: FC = () => {
    const [product, setProduct] = useState<IProduct | null>(null)
    const params = useParams<ProductPageParams | any>()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchProduct()
    }, []);

    async function fetchProduct() {
        try {
            setIsLoading(true);
            const response = await axios.get<IProduct>('https://fakestoreapi.com/products/' + params.id);
            setProduct(response.data);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="productDetailPage">
            {
                isLoading
                    ? <Loader/>
                    :
                    <div className="productDetail">
                        <div className="top">
                            <MyButton variant={ButtonVariants.BACK} onClick={() => navigate('/')}>Назад</MyButton>
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