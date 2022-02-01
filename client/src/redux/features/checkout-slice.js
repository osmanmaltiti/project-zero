import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: { woodCart: [], furnitureCart: [] },
    reducers: {
        submitWoodCart: (state, action) => {
            const {payload} = action;
            state.woodCart = [...state.woodCart, ...payload]
        },
        submitFurnitureCart: (state, action) => {
            const {payload} = action;
            state.furnitureCart = [...state.furnitureCart, ...payload]
        }
    }
});

export const { submitWoodCart, 
               submitFurnitureCart } = checkoutSlice.actions;
export default checkoutSlice.reducer;