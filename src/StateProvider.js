// Setup Data Layer
// Keep track of user and Basket Data

import React, { useContext, createContext, useReducer } from 'react';

// Data Layer
export const StateContext = createContext();

//Build a Provider
export const StateProvider = ({ reducer, initialState, children }) => {
    return <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
};

// Use it inside a component
export const useStateValue = () => useContext(StateContext);

