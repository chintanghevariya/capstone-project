import React, { createContext } from 'react';

const initialState = {
    signedIn: false
};

export const AuthReducer = (state=initialState, action) => {
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

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(AuthReducer, initialState);

    function signInUser() {
        dispatch({ type: "SIGNED_IN" });
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            signInUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};