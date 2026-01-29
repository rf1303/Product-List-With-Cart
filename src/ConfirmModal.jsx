import { useEffect, useRef } from 'react';
import { IconConfirmed, IconRemove } from '../public/assets/svg/IconSvg';
import { useAddCart } from './data-context/CartOrderData.jsx';

export const ConfirmOrderModal = ({ open, onClose }) => {
    const confirmModalRef = useRef(null)
    const { state } = useAddCart();

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
            className='fixed inset-0 w-screen h-screen max-w-none max-h-none p-0 m-0 bg-transparent flex items-end justify-center backdrop:bg-black/50 md:items-center'>
            <div className='bg-white w-full max-h-[90vh] p-6 pt-10 rounded-t-2xl grid gap-8 md:max-w-172 md:max-h-172  md:rounded-2xl md:p-10 xl:max-w-148'>
                <header className=''>
                    <span className='w-10.5 h-10.5'><IconConfirmed /></span>
                    <h3 className='text-rose-900 text-preset-1 font-bold leading-tight capitalize'>order confirmed</h3>
                    <p className='text-rose-500 text-preset-3 font-normal'>We hope you enjoy your food!</p>
                </header>
                <div className='bg-rose-50 p-6 rounded-xl'>
                    <div className='divide-y divide-rose-100 max-h-72 overflow-y-auto xl:max-h-74'>
                        {state.items.map(item => (
                            <div key={item.id} className='py-2 flex items-center justify-between '>
                                <img src={item.image.thumbnail} alt={`imgage ${item.name}`}
                                    className='w-12 h-12 rounded-lg' />
                                <div className='text-preset-4 font-semibold grid gap-2'>
                                    <h3 className='text-preset-4 text-rose-900 '>{item.name}</h3>
                                    <div className='flex items-center justify-start gap-2'>
                                        <span className='text-red'>{item.quantity}x</span>
                                        <span className='text-rose-500 font-normal'>@ ${item.price.toFixed(2)}</span>
                                    </div>
                                </div>
                                <span className='text-rose-500'>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>

                        ))};

                    </div>
                    <div className='w-full h-px bg-rose-100'></div>
                    <div className='flex items-center justify-between'>
                        <span className='text-preset-4 text-rose-900 capitalize'>order total</span>
                        <span className='text-preset-2 font-bold text-rose-900'>
                            ${state.items
                                .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                                .toFixed(2)}
                        </span>
                    </div>

                </div>
                <button type='button' onClick={onClose} className='w-full py-4 bg-red text-white text-preset-3 font-bold capitalize rounded-full'>start new order</button>
            </div>

        </dialog>
    );
}
