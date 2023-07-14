import React, {FC} from 'react';
import {IProduct} from "../../types/types";
import '../ProductItem/ProductItem.scss'
import MyButton, {ButtonVariants} from "../UI/MyButton/MyButton";
import {onProductSelect} from "../../store/reducers/ProductSlice";
import {useAppDispatch} from "../../hooks/redux";

interface ProductItemProps {
    product: IProduct;
    goToDetailPage: (product: IProduct) => void;
    onProductAdd: (newProduct: IProduct) => void;
}

const ProductItem: FC<ProductItemProps> = ({product, goToDetailPage, onProductAdd}) => {
    const dispatch = useAppDispatch()

    const handleProductSelect = (product: IProduct) => {
        goToDetailPage((product));
        dispatch(onProductSelect(product));
    }

    return (
        <div className="product_card">
            <div onClick={() => handleProductSelect(product)} className="product_name">{product.title}</div>
            <div>
                <img className="img" src={product.image} alt=''/>
            </div>
            <MyButton onClick={() => onProductAdd((product))} variant={ButtonVariants.GO_TO_BUCKET}>В корзину {product.price} $</MyButton>
        </div>
    );
};
export default ProductItem;