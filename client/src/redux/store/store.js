import { configureStore } from '@reduxjs/toolkit';
import furnitureSlice from '../features/furniture-slice';
import woodSlice from '../features/wood-slice';

const store = configureStore({
    reducer: {
        wood: woodSlice,
        furniture: furnitureSlice
    }
});

export default store;