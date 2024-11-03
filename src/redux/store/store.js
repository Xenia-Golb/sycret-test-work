import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slices/formReducer';
import fetchReducer from '../slices/fetchReducer';

const store = configureStore({
    reducer: {
        form: formReducer,
        fetch: fetchReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Отключаем проверку сериализуемости, если это необходимо
        }),
});


export default store;