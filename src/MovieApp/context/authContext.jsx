import { createContext } from "react";


const AuthContext = createContext({
    baseUrl: "",
    setLocalStorage: () => { },
    getLocalStorage: () => { }
});

export default AuthContext;