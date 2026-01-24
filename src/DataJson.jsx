import { useEffect, useState } from 'react';

export function useDataJson() {
    const [jsonData, setJsonData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch('./data.json');

                if (!response.ok){
                    throw new Error('Error al Cargar el public/data.json')
                };
                const data = await response.json();
                setJsonData(data);
            } catch (err) {
                console.error('Error: ', err)
                setError(err.message);
            }
        }

        loadData();
    }, [])

    if (error) return <p className='text-blue-950 text-3xl'>Error: {error}</p>;
    return { jsonData };
}
