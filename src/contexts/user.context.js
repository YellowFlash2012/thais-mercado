import { createContext, useEffect, useState } from "react";
import { newUser, onAuthStateChangeListener } from "../utils/firebase/firebase";

export const UserContext = createContext();

export const UserPovider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener(user => {
            if (user) {
                newUser(user)
            }
            setCurrentUser(user)
        })

        return unsubscribe;
    },[])

    return (
        <UserContext.Provider value={{currentUser,setCurrentUser}}>
            {children}
        </UserContext.Provider>
    );
}