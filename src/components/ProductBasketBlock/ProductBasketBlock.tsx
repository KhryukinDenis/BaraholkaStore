import React, {FC} from 'react';
import '../ProductBasketBlock/ProductBasketBlock.scss'
import {IProduct} from "../../types/types";
import MyButton, {ButtonVariants} from "../UI/MyButton/MyButton";

export interface IProductBasketBlockProps {
    product: IProduct;
    goToDetailPage: (product: IProduct) => void;
    onProductDelete: (product: IProduct) => void;
}

const ProductBasketBlock: FC<IProductBasketBlockProps> = ({product, goToDetailPage, onProductDelete}) => {

    return (
        <div className="block">
            <div className="left_block">
                <img src={product.image} alt='' />
            </div>
            <div className="center_block">
                <div className="category">{product.category}</div>
                <div className="title">{product.title}</div>
                <div className="price">{product.price} $</div>
            </div>
            <div className="right_block">
                <MyButton variant={ButtonVariants.DELETE} onClick={() => onProductDelete((product))}>Удалить</MyButton>
                <MyButton variant={ButtonVariants.CHECKED} onClick={() => goToDetailPage((product))}>Перейти</MyButton>
            </div>
        </div>
    );
};

export default ProductBasketBlock;