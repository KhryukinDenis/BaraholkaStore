import React, {FC} from 'react';
import {IProduct} from "../../types/types";
import ProductItem from "../ProductItem/ProductItem";
import '../ProductList/ProductList.scss'
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";

interface ProductListProps {
    onProductAdd: (newProduct: IProduct) => void;
}

const ProductList: FC<ProductListProps> = ({onProductAdd}) => {
    const navigate = useNavigate();

    const {products} = useAppSelector(state => state.productReducer)

    return (
        <div className="product_list">
            {products.map(product =>
                <ProductItem
                    key={product.id}
                    product={product}
                    goToDetailPage={(product) => navigate('/products/' + product.id)}
                    onProductAdd = {onProductAdd}
                />
            )}
        </div>
    );
};

export default ProductList;