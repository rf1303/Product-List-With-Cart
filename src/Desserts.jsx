import { AddCartBtn } from './buttons.jsx';
import { useJsonData } from './data-context/JsonDataContext.jsx'
import { YourAddCart } from './YourCartAdd.jsx'


export function Desserts() {
    const { dataProducts } = useJsonData()

    return (
        <main className='  px-6 grid items-center justify-items-center gap-8 md:px-10'>
            <header className='w-full max-w-82.5 text-left'>
                <h1 className='text-rose-900 text-preset-1 font-bold'>Desserts</h1>
            </header>
<div className='w-full grid crid-cols-1 xs:grid-cols-[repeat(auto-fill,minmax(13.333rem,1fr))] items-center justify-items-center gap-6 xl:grid-cols-[repeat(3,15.667rem)] md:gap-x-6 md:gap-y-8'>
                {dataProducts.map((item) => (
                    <div key={item.id} className='w-full max-w-82.5'>
                        <div className=''>
                            <picture>
                                <source srcSet={item.image.desktop} media='(min-width: 80em)' />
                                <source srcSet={item.image.tablet} media='(min-width: 47.938em)' />
                                <img src={item.image.desktop} alt={`image of ${item.name}`} className="w-full max-w-82.5 h-53 rounded-xl shadow-md/30 shadow-rose-900 lg:h-60" />
                            </picture>
                            <div className='flex items-center justify-center transform -translate-y-1/2'>
                                <AddCartBtn dataProducts={item} />
                            </div>
                        </div>
                        <div className='grid gap-1'>
                            <p className='text-rose-500 text-preset-4 font-normal'>{item.category}</p>
                            <p className='text-rose-900 text-preset-3 font-semibold'>{item.name}</p>
                            <p className='text-red text-preset-3 font-semibold'>${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );

}
