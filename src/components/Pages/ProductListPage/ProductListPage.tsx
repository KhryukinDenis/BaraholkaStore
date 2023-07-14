import React, {FC, useEffect} from 'react';
import ProductList from "../../ProductList/ProductList";
import { IProduct} from "../../../types/types";
import Loader from "../../UI/Loader/Loader";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {fetchProducts} from "../../../store/reducers/ActionsCreators";
import NotFound from "../../NotFound/NotFound";

interface IProductListPageProps {
    onProductAdd: (newProduct: IProduct) => void;
}

const ProductListPage: FC<IProductListPageProps> = ({onProductAdd}) => {
    const dispatch = useAppDispatch()
    const {products, isLoading, error} = useAppSelector(state => state.productReducer)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className="content">
            {isLoading && <Loader/>}
            {error && <NotFound/>}
            <ProductList products={products} onProductAdd={onProductAdd} />
        </div>
    );
};

export default ProductListPage;