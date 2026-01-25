import { JsonDataProvider } from './data-context/JsonDataContext.jsx';
import { AddCartProvider } from './data-context/CartOrderData.jsx';
import { YourAddCart } from './YourCartAdd.jsx'
import { Desserts } from './Desserts.jsx';

function App() {

    return (
        <JsonDataProvider>
            <AddCartProvider>
                <div className='bg-rose-50 font-redHatText py-6 md:py-10 xl:py-22'>
                    <Desserts />
                    <YourAddCart />
                </div>
            </AddCartProvider>
        </JsonDataProvider>
    )
}

export default App
