import React, {
    createContext, useContext, useReducer
} from 'react';

export const DataLayerContext = createContext();

export const DataLayer = ({initialState, reducer, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children} {/*App component is te children*/}
    </DataLayerContext.Provider>
);

//to export data from data layer
export const useDataLayerValue = () => useContext(DataLayerContext)