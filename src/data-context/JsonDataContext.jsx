import { createContext, useContext } from 'react';
import { useDataJson } from './DataJson.jsx';

const JsonDataContext = createContext();

export const JsonDataProvider = ({ children }) => {
    const { jsonData } = useDataJson();
    return (
        <JsonDataContext.Provider value={{ dataProducts: jsonData }}>
            {children}
        </JsonDataContext.Provider>
    );
}

export const useJsonData = () => {
    const context = useContext(JsonDataContext);
    if (!context) {
        throw new Error('useJsonData debe usarse dentro de JsonDataProvider');
    }
    return context;
}
