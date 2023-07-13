import React, {FC} from 'react';
import '../ProductBasketBlock/ProductBasketBlock.scss'
import {IProduct} from "../../types/types";

interface IProductBasketBlockProps {
    product: IProduct
}

const ProductBasketBlock: FC<IProductBasketBlockProps> = ({product}) => {

    return (
        <div className="block">
            {/* TODO: Сделать красивые поля */}
            <div>{product.image}</div>
        </div>
    );
};

export default ProductBasketBlock;