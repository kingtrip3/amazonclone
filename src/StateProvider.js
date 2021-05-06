import React, {createContext, useContext, useReducer} from 'react';

//Prepares the dataLayer
export const StateContext = createContext();

//Wrap our wrap to provide dataLayer to every component
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}  
    </StateContext.Provider>
);

//Pull information from data layer
export const useStateValue = () => useContext(StateContext)

