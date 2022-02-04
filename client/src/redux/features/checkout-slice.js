import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: { woodCart: [], furnitureCart: [] },
    reducers: {
        submitWoodCart: (state, action) => {
            const {payload} = action;
            state.woodCart = [...state.woodCart, payload]
        },
        submitFurnitureCart: (state, action) => {
            const {payload} = action;
            state.furnitureCart = [...state.furnitureCart, payload]
        },
        removeWoodItem: (state, action) => {
            const { payload } = action;
            state.woodCart = state.woodCart
                                  .filter(item => item.id !== payload);
        },
        removeFurnitureItem: (state, action) => {
            const { payload } = action;
            state.furnitureCart = state.furnitureCart
                                  .filter(item => item.id !== payload);
        }
    }
});

export const { submitWoodCart, 
               submitFurnitureCart,
               removeWoodItem,
               removeFurnitureItem } = checkoutSlice.actions;
export default checkoutSlice.reducer;