import { createContext, useContext, useReducer } from 'react';
import { cartReducer, initialState } from '../ButtonsCarts.jsx'

const AddCartContext = createContext();


export const AddCartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)
    
    return (
        <AddCartContext.Provider value={{ 
            state, dispatch
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


