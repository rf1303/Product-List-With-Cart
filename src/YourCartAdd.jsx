import { useAddCart } from './data-context/CartOrderData.jsx'

export function YourAddCart() {
    const { state } = useAddCart();
    const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
    
    return (
        <div className='text-lg text-red'>Your Cart ({state.items.length})</div>
    );
}
