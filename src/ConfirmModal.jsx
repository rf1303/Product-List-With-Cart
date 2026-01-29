import { useEffect, useRef } from 'react';
import { IconConfirmed } from '../public/assets/svg/IconSvg';
import { useAddCart } from './data-context/CartOrderData.jsx';

export const ConfirmOrderModal = ({ open, onClose }) => {
    const confirmModalRef = useRef(null)
    const { state, dispatch } = useAddCart();
    console.log('state:', state)
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
            className='fixed inset-0 w-screen h-screen max-w-none max-h-none p-0 m-0 bg-transparent flex items-end justify-center backdrop:bg-black/50'>
            <div className='bg-white w-full p-6 pt-10 rounded-t-2xl grid'>
                <header className=''>
                    <span className='w-10.5 h-10.5'><IconConfirmed /></span>
                    <h3 className='text-rose-900 text-preset-1 font-bold leading-tight capitalize'>order confirmed</h3>
                    <p className='text-rose-500 text-preset-3 font-normal'>We hope you enjoy your food!</p>
                </header>
                <div>
                    <h5 className='text-preset-1 text-amber-600'>{state.items[0].id}</h5>
                </div>
                <button type='button' onClick={onClose} className='w-full py-4 bg-red text-white text-preset-3 font-bold capitalize rounded-full'>start new order</button>
            </div>

        </dialog>
    );
}
