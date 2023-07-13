import React, {FC} from 'react';
import '../BasketPage/BasketPage.scss'
import ProductBasketBlock from "../ProductBasketBlock/ProductBasketBlock";
import {IProduct} from "../../types/types";

interface IBasketPageProps {
    products: IProduct[]
}

const BasketPage: FC<IBasketPageProps> = ({products}) => {

    return (
        <div className="basket">
            <h1>КОРЗИНА ТОВАРОВ</h1>
            <div>
                {products.map(product => (
                    <ProductBasketBlock product={product}/>
                ))}
            </div>
        </div>
    );
};

export default BasketPage;