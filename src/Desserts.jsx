import { AddCartBtn } from './buttons.jsx';
import { useJsonData } from './data-context/JsonDataContext.jsx'


export function Desserts() {
    const { dataProducts } = useJsonData()

    return (
        <main className='bg-rose-50'>
            <header>
                <h1 className=''>Desserts</h1>
            </header>
            <div className='grid items-center justify-items-center gap-6'>
                {dataProducts.map((item) => (
                    <div key={item.id} className='w-full max-w-82.5'>
                        <div className=''>
                            <picture>
                                <source srcSet={item.image.desktop} media='(min-width: 80em)' />
                                <source srcSet={item.image.tablet} media='(min-width: 47.938em)' />
                                <img src={item.image.desktop} alt={`image of ${item.name}`} className="w-full  max-w-82.5 h-clampImg rounded-xl" />
                            </picture>
                            <div className='flex items-center justify-center transform -translate-y-1/2'>
                                <AddCartBtn dataProducts={item}/>
                            </div>
                        </div>
                        <div className=''>
                            <p className='text-rose-500 text-preset-4 font-normal'>{item.category}</p>
                            <p className='text-rose-900 text-preset-3 font-semibold'>{item.name}</p>
                            <p className='text-red text-preset-3 font-semibold'>${item.price}</p>
                        </div>
                    </div>

                ))}
            </div>
        </main>
    );

}
