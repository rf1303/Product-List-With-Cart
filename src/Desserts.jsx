import { useDataJson } from './DataJson.jsx';


export function Desserts() {
    const { jsonData } = useDataJson();
    console.log('jsonData App:', jsonData)

    return (
        <main className=''>
            <header>
                <h1 className=''>Desserts</h1>
            </header>
            <div className=''>
                {jsonData.map((item, index) => (
                    <div key={index} className=''>
                        <div className=''>
                            <picture>
                                <source srcSet={item.image.desktop} media='(min-width: 80em)' />
                                <source srcSet={item.image.tablet} media='(min-width: 47.938em)' />
                                <img src={item.image.desktop} alt={`image of ${item.name}`} className="rounded-lg" />
                            </picture>
                        </div>
                    </div>

                ))}
            </div>
        </main>
    );

}
