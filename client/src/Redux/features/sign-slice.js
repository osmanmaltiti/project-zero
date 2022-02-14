import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem('currentUser'));
const signSlice = createSlice({
    name: 'sign',
    initialState: { currentUser: user },
    reducers: {
        signIn: (state, action) => {
            const { payload } = action;
            state.currentUser = localStorage.setItem('currentUser', JSON.stringify(payload.data));
            payload.navigate();
        },

        signUp: (state, action) => {
            const { payload } = action;
            state.currentUser = localStorage.setItem('currentUser', JSON.stringify(payload.data));
            payload.navigate();
        },

        signOut: (state, action) => {
            const { payload } = action;
            state.signIn = {
                isAuthenticated: false
            };
            payload.navigate();
            localStorage.removeItem('currentUser');
        }
    }
});

export const { signIn, signOut, signUp } = signSlice.actions;
export default signSlice.reducer;