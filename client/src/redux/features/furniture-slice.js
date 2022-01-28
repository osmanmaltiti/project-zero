import { createSlice } from "@reduxjs/toolkit";

const FurnitureSlice = createSlice({
    name: 'furniture',
    initialState: { 
        singlePanel: [], 
        doublePanel: [],
        furnitureCart: []
    },
    reducers: {
        addSinglePanel: (state, action) => {
            state.singlePanel = action.payload
        },
        addDoublePanel: (state, action) => {
            state.doublePanel = action.payload
        },
        addToFurnitureCart: (state, action) => {
            const cart = [...state.furnitureCart, action.payload];
            const cartFilter = (cart, key) => {
                return [...new Map(cart.map(item => [item[key], item])).values()]
            };
            state.furnitureCart = cartFilter(cart, 'id'); 
        },
        deleteFurnitureItem: (state, action) => {
            const {payload} = action;
            let deletedItem = state.furnitureCart.filter(item => item.id !== payload);     
            state.furnitureCart = deletedItem;
        },
        clearCart: (state) => {
            state.furnitureCart = []
        }
    }
});

export const { addSinglePanel, 
               addDoublePanel,
               addToFurnitureCart,
               deleteFurnitureItem,
               clearCart } = FurnitureSlice.actions;
export default FurnitureSlice.reducer;