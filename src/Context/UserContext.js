import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = () => {
        //Lógica del LogIn 
    }

    const logout = () => {
        //Lógica del LogOut
    }

    const signup = () => {
        //Lógica del SignUp
    }

    return (
        <UserContext.Provider value={{ user, login, logout, signup }}> 
            {children}
        </UserContext.Provider>
    )
}