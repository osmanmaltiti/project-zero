import { configureStore } from '@reduxjs/toolkit';
import checkoutSlice from '../features/checkout-slice';
import signSlice from '../features/sign-slice';
import woodFurnitureSlice from '../features/wood-furniture-slice';

const store = configureStore({
    reducer: {
        sign: signSlice,
        checkout: checkoutSlice,
        woodFurniture: woodFurnitureSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['sign/signIn', 'sign/signUp', 'sign/signOut']
        }
    })
});

export default store;