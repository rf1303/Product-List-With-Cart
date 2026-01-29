import { useState } from 'react';
import { IconCarbonNeutral, IconEmptyCart, IconRemove } from '../public/assets/svg/IconSvg.jsx';
import { useAddCart } from './data-context/CartOrderData.jsx'
import { ConfirmOrderModal } from './ConfirmModal.jsx'
import { YourAddCartReset } from './YourCartReset.jsx'

export function YourAddCart() {
    const { state, dispatch } = useAddCart();
    const [modalConfirm, setModalConfirm] = useState(false);
    const handleRemove = (id) => {
        dispatch({ type: "REMOVE", id })
    };
    return (
        <div className='bg-white mx-6 p-6 rounded-2xl font-redHatText grid gap-6'>
            <h2 className='text-red text-preset-2 font-bold'>Your Cart ({state.items.length})</h2>
            <div className='divide-y divide-rose-100'>
                {state.items.length === 0 ? (
                    <div className='grid items-center justify-items-center gap-4'>
                        <IconEmptyCart />
                        <span className='text-preset-4 text-rose-500'>Your add item will appear here</span>
                    </div>
                )
                    : (state.items.map(item => (
                        <div key={item.id} className='py-4 flex items-center justify-between '>
                            <div className='text-preset-4 font-semibold grid gap-2'>
                                <h3 className='text-preset-4 text-rose-900 '>{item.name}</h3>
                                <div className='flex items-center justify-start gap-2'>
                                    <span className='text-red'>{item.quantity}x</span>
                                    <span className='text-rose-500 font-normal'>@ ${item.price.toFixed(2)}</span>
                                    <span className='text-rose-500'>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            </div>
                            <button type='button' onClick={() => handleRemove(item.id)}
                                className='icon__remove'><IconRemove /></button>
                        </div>
                    )))}
            </div>
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
                            <IconCarbonNeutral />
                            <span className='text-preset-4 text-rose-900 font-normal leading-loose'>This is a <span className='font-bold'>Carbon-neutral</span> delivery</span>

                        </div>
                        <button type='button' className='bg-red text-preset-3 font-semibold capitalize rounded-full py-4' onClick={() => setModalConfirm(true)} >confirm order</button>
                        {modalConfirm && <ConfirmOrderModal open={modalConfirm} onClose={() => setModalConfirm(false)} />}
                    </>
                )}
        </div>
    );
}
