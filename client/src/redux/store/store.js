import { configureStore } from '@reduxjs/toolkit';
import checkoutSlice from '../features/checkout-slice';
import woodFurnitureSlice from '../APIs/wood-furniture-slice';

const store = configureStore({
    reducer: {
        checkout: checkoutSlice,
        woodFurniture: woodFurnitureSlice
    }
});

export default store;