import { useAddCart } from './data-context/CartOrderData.jsx'
import { IconAddCart, IconDecrement, IconIncrement } from '../public/assets/svg/IconSvg.jsx'
// export const handleAddCart = () ({
//
// });

export function AddCartBtn({ dataProducts }) {
    const { state, dispath } = useAddCart();
    return (
        <>
            <button type="button" onClick={() => dispath({ type: "ADD_TO_CART" })}
                className="bg-white w-40 h-11 border border-rose-400 text-preset-4 text-rose-900 font-semibold flex items-center justify-center rounded-full gap-2 shadow-md/30 shadow-rose-900" >
                <IconAddCart /> Add to Cart
            </button>
            {/* <div className=''> */}
            {/*     <button ></button> */}
            {/* </div> */}
        </>
    );

}
