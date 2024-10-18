import {useContext, createContext} from "react"

export const ApiContext = createContext(null);

export const ApiContextProvider = ApiContext.Provider;

export const useApiContext = () => {
    return useContext(ApiContext);
}