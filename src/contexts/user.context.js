import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserPovider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <UserContext.Provider value={{currentUser,setCurrentUser}}>
            {children}
        </UserContext.Provider>
    );
}