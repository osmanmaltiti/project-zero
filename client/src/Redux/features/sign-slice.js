import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem('currentUser'));
const signSlice = createSlice({
    name: 'sign',
    initialState: { signIn: user },
    reducers: {
        signIn: (state, action) => {
            const { payload } = action;
            const users = JSON.parse(localStorage.getItem('users'));
            try {
                const currentUser = users.find(item => item.email === payload.email);
                if(currentUser.email === payload.email &&
                    currentUser.password === payload.password){
                    state.signIn = { 
                        isAuthenticated: true, 
                        currentUser 
                    };
                    localStorage.setItem('currentUser', JSON.stringify(state.signIn));
                    payload.navigate();
                }
                else{
                    state.signIn = { 
                        isAuthenticated: false, 
                        message: 'Email or Password Incorrect' 
                    }
                    alert('Email or Password Incorrect');
                }
            } 
            catch (error) {
                state.signIn = { 
                    isAuthenticated: false, 
                    message: 'User Not Found' 
                }
                alert('User Not Found ');
            }
        },

        signUp: (state, action) => {
            const { payload } = action;
            const prevUsers = JSON.parse(localStorage.getItem('users'));
            if (prevUsers?.some(item => item.email === payload.email)){
                alert(`${payload.email} is already a registered Email`);
                return;
            }
            else{
                prevUsers ? 
                localStorage.setItem('users', JSON.stringify([...prevUsers, payload])):
                localStorage.setItem('users', JSON.stringify([payload]));
                state.signIn = {
                    isAuthenticated: true, 
                    currentUser: payload
                };
                localStorage.setItem('currentUser', JSON.stringify(state.signIn));
                payload.navigate();
            }
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