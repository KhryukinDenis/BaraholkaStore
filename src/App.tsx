import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductListPage from "./components/Pages/ProductListPage/ProductListPage";
import ProductDetailPage from "./components/Pages/ProductDetailPage/ProductDetailPage";
import NotFound from "./components/NotFound/NotFound";
import BasketPage from "./components/Pages/BasketPage/BasketPage";
import {IProduct} from "./types/types";

const App = () => {

    const [basketProductList, setBasketProductList] = useState<IProduct[]>([])

    const handleProductAdd = (newProduct: IProduct) => {
        setBasketProductList((prevState) => [...prevState, newProduct])
    }

    const handleProductDelete = (delProduct: IProduct) => {
        setBasketProductList((prevState) =>
            prevState.filter((product) => product.id !== delProduct.id))
    }

  return (
      <div className="App">
            <BrowserRouter>
                <Header />
                    <Routes>
                        <Route path={'/'} element={<ProductListPage onProductAdd={handleProductAdd}/>} />
                        <Route path={'/products/:id'} element={<ProductDetailPage />} />
                        <Route path={'*'} element={<NotFound/>} />
                        <Route path={'/basket'} element={<BasketPage products={basketProductList} onProductDelete={handleProductDelete}/>} />
                    </Routes>
                <Footer />
            </BrowserRouter>
      </div>
  );
};

export default App;