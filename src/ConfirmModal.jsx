import { useEffect, useRef } from 'react';
import { IconConfirmed } from '../public/assets/svg/IconSvg';
import { useAddCart } from './data-context/UseAddCart.jsx';

export const ConfirmOrderModal = ({ open, onClose }) => {
    const confirmModalRef = useRef(null)
    const { state, dispatch } = useAddCart();

    const handleReset = () => {
        dispatch({ type: "RESET" });
        onClose();
    }

    useEffect(() => {
        const confirm = confirmModalRef.current;
        if (!confirm) return;
        if (open && !confirm.open) {
            confirm.showModal();
        }
        if (!open && confirm.open) {
            confirm.close();
        }
    }, [open])

    return (
        <dialog ref={confirmModalRef} onClose={onClose}
            onClick={(e) => { if (e.target === confirmModalRef.current) onClose(); }}
            className='fixed inset-0 w-screen h-screen max-w-none max-h-none p-0 m-0 bg-transparent flex items-end justify-center  md:items-center'
            aria-labelledby="modal-title"
            aria-describedby="modal-description">
            <div className='bg-white w-full max-h-full p-6 pt-10 rounded-t-2xl grid gap-8 md:max-w-172 md:max-h-172  md:rounded-2xl md:p-10 xl:max-w-148'>
                <header className=''>
                    <span className='w-10.5 h-10.5' aria-hidden="true"><IconConfirmed /></span>
                    <h3 id="modal-title" className='text-rose-900 text-preset-1 font-bold leading-tight capitalize'>order confirmed</h3>
                    <p id="modal-description" className='text-rose-500 text-preset-3 font-normal'>We hope you enjoy your food!</p>
                </header>
                <div className='bg-rose-50 p-6 rounded-xl' aria-label="Order summary">
                    <ul className='divide-y divide-rose-100 max-h-72 overflow-y-auto xl:max-h-74' aria-label="Ordered items">
                        {state.items.map(item => (
                            <li key={item.id} className='py-2 flex items-center justify-between '>
                                <img src={item.image.thumbnail} alt={item.name}
                                    className='w-12 h-12 rounded-lg' />
                                <div className='text-preset-4 font-semibold grid gap-2'>
                                    <p className='text-preset-4 text-rose-900 '>{item.name}</p>
                                    <div className='flex items-center justify-start gap-2'>
                                        <span className='text-red'>{item.quantity}x</span>
                                        <span className='text-rose-500 font-normal'>@ ${item.price.toFixed(2)}</span>
                                    </div>
                                </div>
                                <span className='text-rose-500'>${(item.price * item.quantity).toFixed(2)}</span>
                            </li>

                        ))}

                    </ul>
                    <div className='w-full h-px bg-rose-100' role='separator'></div>
                    <div className='flex items-center justify-between'>
                        <span className='text-preset-4 text-rose-900 capitalize'>order total</span>
                        <span className='text-preset-2 font-bold text-rose-900'>
                            ${state.items
                                .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                                .toFixed(2)}
                        </span>
                    </div>

                </div>
                <button type='button' onClick={handleReset} className='w-full py-4 bg-red text-white text-preset-3 font-bold capitalize rounded-full hover:bg-red-h focus:bg-red-h ' aria-label="Start new order and close confirmation">start new order</button>
            </div>

        </dialog>
    );
}
