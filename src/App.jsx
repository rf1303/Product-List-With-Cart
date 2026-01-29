import { JsonDataProvider } from './data-context/JsonDataContext.jsx';
import { AddCartProvider } from './data-context/CartOrderData.jsx';
import { YourAddCart } from './YourCartAdd.jsx'
import { Desserts } from './Desserts.jsx';

function App() {

    return (
        <JsonDataProvider>
            <AddCartProvider>
                <div className='bg-rose-50 font-redHatText py-6 md:py-10 xl:py-22 xl:grid xl:grid-cols-[800px_384px] xl:justify-center xl:gap-8 '>
                    <Desserts />
                    <YourAddCart />
                </div>
            </AddCartProvider>
        </JsonDataProvider>
    )
}

export default App
