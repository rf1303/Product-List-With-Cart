import { useEffect, useRef } from 'react';
import { IconConfirmed } from '../public/assets/svg/IconSvg';
import { useAddCart } from './data-context/CartOrderData.jsx';

export const ConfirmOrderModal = ({ open, onClose }) => {
    const confirmModalRef = useRef(null)
    const { state, dispatch } = useAddCart();

    useEffect(() => {
        const confirm = confirmModalRef.current;
        console.log('confirm:', confirm)
        console.log('confirmModalRef.current:', confirmModalRef.current)
        console.log('open iniUse:', open)
        if (!confirm) return;
        console.log('Modal state - open prop:', open, 'dialog.open:', confirm.open);
        if (open && !confirm.open) {
            console.log('confirm open:', confirm)
            confirm.showModal();
        }
        if (!open && confirm.open) {
            confirm.close();
        }
    }, [open])


    return (
        <dialog ref={confirmModalRef} onClose={onClose}
            onClick={(e) => { if (e.target === confirmModalRef.current) onClose(); }}
            className='fixed inset-0 w-full bg-white backdrop:bg-balck/20 grid items-end p-6 pt-10'>
            <header className=''>
                <span className='w-10.5 h-10.5'><IconConfirmed /></span>
                <h3 className='text-rose-900 text-preset-1 font-bold capitalize'>order confirmed</h3>
                <p className='text-rose-500 text-preset-3 font-normal'>We hope you enjoy your food!</p>
            </header>
            <button type='button' onClick={onClose} className='w-full py-4 bg-red text-white text-preset-3 font-bold capitalize rounded-full'>start new order</button>
        </dialog>
    );
}
