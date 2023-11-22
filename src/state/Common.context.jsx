import {createContext} from "react";

export const CommonContext = createContext({
    isHeaderOpen: null,
    toggleHeader: () => null
});

export const CommonContextProvider = CommonContext.Provider;