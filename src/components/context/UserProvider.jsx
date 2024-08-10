import { UserContext } from "./UserContext";
import { useState } from "react";

export default function UserProvider({children}) {

    const [currentUser, setCurrentUser] = useState(null)

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}