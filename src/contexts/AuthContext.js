import { createContext,useState } from "react";

export const AuthContext = createContext({
    userName: "", //getter
    setUserName: () => null, //setter
    clearUserName: () => null
});


export default function AuthProvider(props){
    const [userName, setUserName] = useState("");
    const clearUserName = () => setUserName("");
    const values = { userName, setUserName, clearUserName };
    return (
        <AuthContext.Provider value={values}>
            {props.children}
        </AuthContext.Provider>
    )
}


