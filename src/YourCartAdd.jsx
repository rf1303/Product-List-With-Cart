import { useJsonData } from './data-context/JsonDataContext.jsx'

export function YourAddCart() {
    const { dataProducts } = useJsonData()

    return (
        <div className='text-lg text-amber-50'>YourAddCart</div>
    );
}
