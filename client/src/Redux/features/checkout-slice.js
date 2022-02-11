import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: { 
        woodCart: [], 
        furnitureCart: [] 
    },
    reducers: {
        submitWoodCart: (state, action) => {
            const { payload } = action;
            const currentWoodCart = [...state.woodCart, payload];
            const filter = (array, key) => {
                return [...new Map(array.map(item => [item[key], item])).values()]
            };
            const newWoodCart = filter(currentWoodCart, 'id');
            state.woodCart = newWoodCart;
        },

        submitFurnitureCart: (state, action) => {
            const { payload } = action;
            const currentFurnitureCart = [...state.furnitureCart, payload];
            const filter = (array, key) => {
                return [...new Map(array.map(item => [item[key], item])).values()]
            };
            const newFurnitureCart = filter(currentFurnitureCart, 'id');
            state.furnitureCart = newFurnitureCart;
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