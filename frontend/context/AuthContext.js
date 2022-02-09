import { createContext } from 'react';

const initialState = {
    signedIn: false
};

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "SIGNED_IN":
            return {
                signedIn: true
            }
        case "SIGNED_OUT":
            return {
                signedIn: false
            }
        default:
            return state
    }
}

const AuthContext = createContext(initialState);

const AuthProvider = AuthContext.Provider;

modul.exports = {
    AuthProvider,
    AuthReducer,
};