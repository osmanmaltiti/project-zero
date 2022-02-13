import { createSlice, current } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: { 
        woodCart: [], 
        furnitureCart: [] 
    },
    reducers: {
        submitWoodCart: (state, action) => {
            const { payload } = action;
            const currentWoodCart = [...state.woodCart, {...payload, quantity: 0, amount: 0}];
            const filter = (array, key) => {
                return [...new Map(array.map(item => [item[key], item])).values()]
            };
            const newWoodCart = filter(currentWoodCart, 'id');
            state.woodCart = newWoodCart;
        },

        submitFurnitureCart: (state, action) => {
            const { payload } = action;
            const currentFurnitureCart = [...state.furnitureCart, {...payload, quantity: 0, amount: 0}];
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
        },

        increaseQuantity: (state, action) => {
            const { payload } = action;
            switch(payload.type){
                case 'wood':
                    let woodItem = current(state.woodCart).find(item => item.id === payload.id);
                    if(woodItem.stock > woodItem.quantity){
                        let newItem = { 
                            ...woodItem, 
                            quantity: woodItem.quantity + 1,
                            amount: woodItem.amount + woodItem.price 
                        }
                        let removeItem = current(state.woodCart).filter(item => item.id !== payload.id);
                        state.woodCart = [...removeItem, newItem];
                    }
                    else{ return }
                    break;
                case 'furniture':
                    let furnitureItem = current(state.furnitureCart).find(item => item.id === payload.id);
                    if(furnitureItem.stock > furnitureItem.quantity){
                        let newItem = { 
                            ...furnitureItem, 
                            quantity: furnitureItem.quantity + 1, 
                            amount: furnitureItem.amount + furnitureItem.price 
                        }
                        let removeItem = current(state.furnitureCart).filter(item => item.id !== payload.id);
                        state.furnitureCart = [...removeItem, newItem];
                    }
                    else{ return }
                    break;
                default:
                    return state;
            }
        },
        decreaseQuantity: (state, action) => {
            const { payload } = action;
            switch(payload.type){
                case 'wood':
                    let woodItem = current(state.woodCart).find(item => item.id === payload.id);
                    if(woodItem.quantity > 0){
                        let newItem = {
                            ...woodItem,
                            quantity: woodItem.quantity - 1,
                            amount: woodItem.amount - woodItem.price
                        }
                        let removeItem = current(state.woodCart).filter(item => item.id !== payload.id);
                        state.woodCart = [...removeItem, newItem];
                    }
                    else{ return }
                    break;
                case 'furniture':
                    let furnitureItem = current(state.furnitureCart).find(item => item.id === payload.id);
                    if(furnitureItem.quantity > 0){
                        let newItem = {
                            ...furnitureItem,
                            quantity: furnitureItem.quantity - 1,
                            amount: furnitureItem.amount - furnitureItem.price
                        }
                        let removeItem = current(state.furnitureCart).filter(item => item.id !== payload.id);
                        state.furnitureCart = [...removeItem, newItem];
                    }
                    else{ return }
                    break;
                default:
                    return state;
            }
        }
    }
});

export const {  submitWoodCart, 
                submitFurnitureCart,
                removeWoodItem,
                removeFurnitureItem,
                increaseQuantity,
                decreaseQuantity  } = checkoutSlice.actions;
export default checkoutSlice.reducer;