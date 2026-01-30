import { JsonDataProvider } from './data-context/JsonDataContext.jsx';
import { AddCartProvider } from './data-context/CartOrderData.jsx';
import { YourAddCart } from './YourCartAdd.jsx'
import { Desserts } from './Desserts.jsx';

function App() {

    return (
        <JsonDataProvider>
            <AddCartProvider>
                <main id="main-content" className='bg-rose-50 font-redHatText py-6 md:py-10 xl:py-22 xl:grid xl:grid-cols-[800px_384px] xl:justify-center xl:gap-8 ' role="main" aria-label="Product catalog and shopping cart">
                    <Desserts />
                    <div id="cart-content">
                        <YourAddCart />
                    </div>
                </main>
            </AddCartProvider>
        </JsonDataProvider>
    )
}

export default App
