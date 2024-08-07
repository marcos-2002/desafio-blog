import Cadastro from "./Cadastro";
import styled from "styled-components";

export const CadastroUser = styled(Cadastro)`
    padding: 10px;
    border: 1px solid black;
    display: inline-block;
    border-radius: 3px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    h2 {
        font-size: 33px;
    }

    h2, p {
        text-align: center;
    }
`