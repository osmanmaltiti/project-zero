import { createSlice } from "@reduxjs/toolkit";

const WoodSlice = createSlice({
    name: 'wood',
    initialState: { 
        woodCart: [] 
    },
    reducers: {
        addToWoodCart: (state, action) => {
            const cart = [...state.woodCart, action.payload]
            const cartFilter = (cart, key) => {
                return [...new Map(cart.map(item => [item[key], item])).values()]
            };
            state.woodCart = cartFilter(cart, 'id');
        },
        deleteItem: (state, action) => {
            const {payload} = action;
            let deletedItem = state.woodCart.filter(item => item.id !== payload);
            state.woodCart = deletedItem;
        },
        clearWoodCart: (state) => {
            state.woodCart = []
        }
    }
});

export const {  addToWoodCart,
                deleteItem,
                clearWoodCart } = WoodSlice.actions; 
export default WoodSlice.reducer;