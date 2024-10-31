import { createReducer } from '@reduxjs/toolkit';
import { fetchListStart, fetchListSuccess, fetchListFailure } from '../actions/actions';

const initialState = {
    list: [],
    loading: false,
    error: null
};

const fetchReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchListStart, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchListSuccess, (state, action) => {
            state.loading = false;
            state.goods = action.payload; // Список товаров
        })
        .addCase(fetchListFailure, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Сообщение об ошибке
        });
});

export default fetchReducer;
