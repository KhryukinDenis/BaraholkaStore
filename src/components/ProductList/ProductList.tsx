import React, {FC, useContext} from 'react';
import {IProduct} from "../../types/types";
import ProductItem from "../ProductItem/ProductItem";
import '../ProductList/ProductList.scss'
import {useNavigate} from "react-router-dom";

interface ProductListProps {
    products: IProduct[];
    onProductAdd: (newProduct: IProduct) => void;
}

const ProductList: FC<ProductListProps> = ({products, onProductAdd}) => {
    const navigate = useNavigate();
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