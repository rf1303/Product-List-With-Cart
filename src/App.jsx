import { JsonDataProvider } from './data-context/JsonDataContext.jsx';
import { AddCartProvider } from './data-context/CartOrderData.jsx';
import { YourAddCart } from './YourCartAdd.jsx'
import { Desserts } from './Desserts.jsx';

function App() {

    return (
        <JsonDataProvider>
            <AddCartProvider>
                <Desserts />
                <YourAddCart />
            </AddCartProvider>
        </JsonDataProvider>
    )
}

export default App
