import { UserContext } from "./UserContext";
import { useState } from "react";

export default UserProvider = (children) => {
    const [user, setUser] = useState({...user, blogs:[]})
    
    return (
        <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
    )
}