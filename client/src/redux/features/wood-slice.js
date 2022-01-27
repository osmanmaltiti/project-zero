import { createSlice } from "@reduxjs/toolkit";

const WoodSlice = createSlice({
    name: 'wood',
    initialState: { 
        beam: [],
        board: [],
        pole: [],
        woodCart: [] 
    },
    reducers: {
        addBeam: (state, action) => {
            state.beam = action.payload
        },
        addBoard: (state, action) => {
            state.board = action.payload
        },
        addPole: (state, action) => {
            state.pole = action.payload
        },
        addToWoodCart: (state, action) => {
            const cart = [...state.woodCart, action.payload]
            const cartFilter = (cart, key) => {
                return [...new Map(cart.map(item => [item[key], item])).values()]
            };
            state.woodCart = cartFilter(cart, 'id');
        }
    }
});

export const { addBeam, 
               addPole, 
               addBoard,
               addToWoodCart } = WoodSlice.actions; 
export default WoodSlice.reducer;