import { useContext } from 'react'
import { AddCartContext } from "./CartOrderContext.js";


export const useAddCart = () => {
    const context = useContext(AddCartContext);
    if(!context){
        throw new Error('useAddCart debe usarse dentro de AddCartProvider');
    }
    return context;
};
