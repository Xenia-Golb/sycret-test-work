import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slices/formReducer';
import fetchReducer from '../slices/fetchReducer';

const store = configureStore({
    reducer: {
        form: formReducer,
        list: fetchReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;