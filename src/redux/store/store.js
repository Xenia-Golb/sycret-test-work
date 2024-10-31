import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slices/formReducer';

const store = configureStore({
    reducer: {
        form: formReducer,
    },
});

export default store;