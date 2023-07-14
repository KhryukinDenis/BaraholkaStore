import React, {FC} from 'react';
import './BasketPage.scss'
import ProductBasketBlock from "../../ProductBasketBlock/ProductBasketBlock";
import {IProduct} from "../../../types/types";
import {useNavigate} from "react-router-dom";

interface IBasketPageProps {
    products: IProduct[];
    onProductDelete: (product: IProduct) => void;
}

const BasketPage: FC<IBasketPageProps> = ({products, onProductDelete}) => {
    const navigate = useNavigate();

    return (
        <div className="basket">
            <h1>{products.length ? 'Ваши товары' : 'Ваша корзина пуста'}</h1>
            <div className="productBlockList">
                {products.map(product => (
                    <ProductBasketBlock
                        product={product}
                        goToDetailPage={(product) => navigate('/products/' + product.id)}
                        onProductDelete={onProductDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default BasketPage;