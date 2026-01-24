import { useState } from 'react'
import { useDataJson } from './DataJson.jsx';

function App() {
    const { jsonData } = useDataJson();
    console.log('jsonData App:', jsonData)

    return (
        <>
            <div>

            </div>
        </>
    )
}

export default App
