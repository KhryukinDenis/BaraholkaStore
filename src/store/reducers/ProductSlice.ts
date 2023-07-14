import {IProduct} from "../../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchProducts} from "./ActionsCreators";

interface ProductState {
    products: IProduct[];
    product: IProduct | null;
    isLoading: boolean;
    error: string;
}

const initialState: ProductState = {
    products: [],
    product: null,
    isLoading: false,
    error: '',
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        onProductSelect: (state, action: PayloadAction<IProduct>) => {
            return {
            ...state, product: action.payload
            }
        }
    },
    extraReducers: {
        [fetchProducts.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.isLoading = false;
            state.error = '';
            state.products = action.payload;
        },
        [fetchProducts.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
})

export const {onProductSelect} = productSlice.actions;
export default productSlice.reducer;