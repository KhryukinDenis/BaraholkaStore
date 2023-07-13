import React, {FC, useEffect, useState} from 'react';
import ProductList from "../../ProductList/ProductList";
import { IProduct} from "../../../types/types";
import axios from "axios";
import Loader from "../../UI/Loader/Loader";

interface IProductListPageProps {
    onProductAdd: (newProduct: IProduct) => void;
}

const ProductListPage: FC<IProductListPageProps> = ({onProductAdd}) => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        fetchProducts();
    }, [])

    async function fetchProducts() {
        try {
            setIsLoading(true);
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
            setProducts(response.data);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="content">
            {
                isLoading
                ? <Loader />
                : <ProductList products={products} onProductAdd={onProductAdd} />
            }
        </div>
    );
};

export default ProductListPage;