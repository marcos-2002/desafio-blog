import { useContext } from "react";
import { UserContext } from "../context/userContext";

export const useUserContext = () => {
    const context = useContext(UserContext)

    if(context === undefined){
        throw new Error('Não está dentro do contexto')
    }

    return context
}