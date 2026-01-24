import { createContext, useContext, useReducer } from 'react';
import { useDataJson } from './DataJson.jsx';

const AddCartContext = createContext();
const initialState = {
    items:[]
};

const JsonDataContext = createContext();

export const AddCartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(YourAddCart, initialState)
    
    return (
        <AddCartContext.Provider value={{ 
            state, dispatch, jsonData
        }}>{ children} </AddCartContext.Provider>
    );
}

export const useAddCart = () => {
    const context = useContext(AddCartContext);
    if(!context){
        throw new Error('useAddCart debe usarse dentro de AddCartProvider');
    }
    return context;
}

export const JsonDataProvider = ({ children }) => {
    const { jsonData } = useDataJson();

    return (
     
    );
}
