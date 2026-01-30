import { useAddCart } from './data-context/CartOrderData.jsx';
import { IconAddCart, IconDecrement, IconIncrement } from '../public/assets/svg/IconSvg.jsx';


export function AddCartBtn({ dataProducts }) {
    const { state, dispatch } = useAddCart();
    const cartProduct = state.items.find(item => item.name === dataProducts.name);
    const handleAddCart = () => {
        dispatch({ type:"ADD", payload: dataProducts })
    };
    const handleIncrement = () => {
        dispatch({ type:"INCREMENT", payload: dataProducts.name })
    };
    const handleDecrement = () => {
        dispatch({ type:"DECREMENT", payload: dataProducts.name })
    };
    return (
        <>
            {!cartProduct ? (<button type="button" onClick={ handleAddCart }
                className="bg-white w-40 h-11 border border-rose-400 text-preset-4 text-rose-900 font-semibold flex items-center justify-center rounded-full gap-2 shadow-md/30 shadow-rose-900 hover:text-red hover:border-red focus:text-red focus:border-red " 
                aria-label={`Add ${dataProducts.name} to cart for $${dataProducts.price.toFixed(2)}`}>
                <IconAddCart /> Add to Cart
            </button>)
                : (
                    <div className='btn__incDec bg-red flex items-center justify-between w-40 h-11 px-3 rounded-full shadow-md/30 shadow-rose-900 hover:bg-red-h focus:bg-red-h ' 
                         role="group" 
                         aria-label={`Quantity controls for ${dataProducts.name}, current quantity: ${cartProduct.quantity}`}>
                        <button type="button" onClick={ handleDecrement }
                            className='increment__decrement'
                            aria-label={`Remove one ${dataProducts.name} from cart`}><IconDecrement /></button>
                        <span className='text-preset-4 text-white font-semibold' aria-live="polite" aria-atomic="true">{cartProduct.quantity}</span>
                        <button type="button" onClick={ handleIncrement }
                            className='increment__decrement'
                            aria-label={`Add one more ${dataProducts.name} to cart`}><IconIncrement /></button>
                    </div>
                )}
        </>
    );

}
