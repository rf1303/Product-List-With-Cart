import { useState } from 'react';
import { IconCarbonNeutral, IconEmptyCart, IconRemove } from '../public/assets/svg/IconSvg.jsx';
import { useAddCart } from './data-context/UseAddCart.jsx'
import { ConfirmOrderModal } from './ConfirmModal.jsx'

export function YourAddCart() {
    const { state, dispatch } = useAddCart();
    const [modalConfirm, setModalConfirm] = useState(false);
    const handleRemove = (id) => {
        dispatch({ type: "REMOVE", id })
    };
    const handleCloseConfirm = () => {
        dispatch({ type: "RESET" });
        setModalConfirm(false);
    }

    return (
        <div className='bg-white mx-6 p-6 rounded-2xl font-redHatText flex flex-col gap-6 xl:max-h-fit xl:mx-0' aria-label="Shopping cart">
            <header>
                <h2 className='text-red text-preset-2 font-bold'>Your Cart ({state.items.length})</h2>
            </header>
            <ul className='divide-y divide-rose-100 max-h-103 overflow-y-auto' aria-label="Cart items">
                {state.items.length === 0 ? (
                    <div className='grid items-center justify-items-center gap-4'>
                        <IconEmptyCart aria-hidden="true" />
                        <p className='text-preset-4 text-rose-500'>Your added items will appear here</p>
                    </div>
                )
                    : (state.items.map(item => (
                        <li key={item.id} className='py-4 flex items-center justify-between '>
                            <div className='text-preset-4 font-semibold grid gap-2'>
                                <p className='text-preset-4 text-rose-900 '>{item.name}</p>
                                <div className='flex items-center justify-start gap-2'>
                                    <span className='text-red'>{item.quantity}x</span>
                                    <span className='text-rose-500 font-normal'>@ ${item.price.toFixed(2)}</span>
                                    <span className='text-rose-500'>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            </div>
                            <button type='button' onClick={() => handleRemove(item.id)}
                                className='icon__remove'
                                aria-label={`Remove ${item.name} from cart`}><IconRemove /></button>
                        </li>
                    )))}
            </ul>
            {state.items.length === 0 ? (``)
                : (
                    <>
                        <div className='w-full h-px bg-rose-100'></div>
                        <div className='flex items-center justify-between'>
                            <span className='text-preset-4 text-rose-900 capitalize'>order total</span>
                            <span className='text-preset-2 font-bold text-rose-900'>
                                ${state.items
                                    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                                    .toFixed(2)}
                            </span>
                        </div>
                        <div className='flex items-center justify-center bg-rose-50 py-3 rounded-lg gap-2'>
                            <IconCarbonNeutral aria-hidden="true" />
                            <span className='text-preset-4 text-rose-900 font-normal leading-loose'>This is a <span className='font-bold'>Carbon-neutral</span> delivery</span>

                        </div>
                        <button type='button' className='bg-red text-red-50 text-preset-3 font-semibold capitalize rounded-full py-4 hover:bg-red-h focus:bg-red-h '
                            onClick={() => setModalConfirm(true)}
                            aria-label={`Confirm order of ${state.items.length} items with total $${state.items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2)}`} >confirm order</button>
                        {modalConfirm && <ConfirmOrderModal open={modalConfirm} onClose={handleCloseConfirm} />}
                    </>
                )}
        </div>
    );
}
