import React, {FC} from 'react';
import {IProduct} from "../../types/types";
import '../ProductItem/ProductItem.scss'
import MyButton, {ButtonVariants} from "../UI/MyButton/MyButton";

interface ProductItemProps {
    product: IProduct;
    goToDetailPage: (product: IProduct) => void;
    onProductAdd: (newProduct: IProduct) => void;
}

const ProductItem: FC<ProductItemProps> = ({product, goToDetailPage, onProductAdd}) => {

    return (
        <div className="product_card">
            <div onClick={() => goToDetailPage((product))} className="product_name">{product.title}</div>
            <div>
                <img className="img" src={product.image} alt=''/>
            </div>
            <MyButton onClick={() => onProductAdd((product))} variant={ButtonVariants.GO_TO_BUCKET}>В корзину {product.price} $</MyButton>
        </div>
    );
};
export default ProductItem;