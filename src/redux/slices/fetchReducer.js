import { createReducer } from '@reduxjs/toolkit';
import { fetchListStart, fetchListSuccess, fetchListFailure } from '../actions/actions';

const initialState = {
    list: [],
    loading: false,
    error: null,
};

const fetchReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchListStart, (state) => {
            state.loading = true; // Начало загрузки
            state.error = null;   // Сброс ошибки
        })
        .addCase(fetchListSuccess, (state, action) => {
            state.loading = false; // Завершение загрузки
            state.list = action.payload; // Успешно загруженные данные
        })
        .addCase(fetchListFailure, (state, action) => {
            state.loading = false; // Завершение загрузки
            state.error = action.payload; // Сообщение об ошибке
        })
        .addCase('RESET_FETCH_STATE', (state) => {
            state.list = [];
            state.loading = false;
            state.error = null;
        });
});

export default fetchReducer;
