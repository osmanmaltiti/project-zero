import { configureStore } from '@reduxjs/toolkit';
import furnitureSlice from '../features/furniture-slice';
import woodSlice from '../features/wood-slice';
import checkoutSlice from '../features/checkout-slice';

const store = configureStore({
    reducer: {
        wood: woodSlice,
        furniture: furnitureSlice,
        checkout: checkoutSlice
    }
});

export default store;