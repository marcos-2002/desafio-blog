import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useUserContext() {
    const context = useContext(UserContext)

    if(context === undefined){
        throw new Error('Não está dentro do contexto')
    }

    return context
}