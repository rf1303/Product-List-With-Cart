import { useReducer } from 'react';
import { AddCartContext } from './CartOrderContext.js';
import { cartReducer, initialState } from '../ButtonsCarts.jsx'


export const AddCartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)
    
    return (
        <AddCartContext.Provider value={{ 
            state, dispatch
        }}>{ children} </AddCartContext.Provider>
    );
};
