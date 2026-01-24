import { Children, createContext, useContext, useReducer } from 'react';
import { YourAddCart } from './YourCartAdd.jsx'

const AddCartContext = useContext();
const initialState = {
    items:[]
};

export const AddCartProvider = ({ children }) => {
   
    const [state, dispatch] = useReducer(YourAddCart, initialState)
    
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
