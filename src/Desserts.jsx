import { useJsonData } from './data-context/JsonDataContext.jsx'


export function Desserts() {
    const { dataProducts } = useJsonData()

    return (
        <main className='bg-rose-50'>
            <header>
                <h1 className=''>Desserts</h1>
            </header>
            <div className='grid items-center justify-items-center gap-6'>
                {dataProducts.map((item, index) => (
                    <div key={index} className='w-full max-w-82.5'>
                        <div className=''>
                            <picture>
                                <source srcSet={item.image.desktop} media='(min-width: 80em)' />
                                <source srcSet={item.image.tablet} media='(min-width: 47.938em)' />
                                <img src={item.image.desktop} alt={`image of ${item.name}`} className="w-full  max-w-82.5 h-clampImg rounded-xl" />
                            </picture>
                            <button type='button' ></button>
                        </div>
                    </div>

                ))}
            </div>
        </main>
    );

}
