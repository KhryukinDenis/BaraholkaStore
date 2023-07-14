import axios from "axios";
import {IProduct} from "../../types/types";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue( " Не удалось загрузить продукты :( " )
        }
    }
)