import Cadastro from "./Cadastro";
import styled from "styled-components";

export const CadastroUser = styled(Cadastro)`
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 10px;
    width: 300px;
    margin: auto;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .1);
    background-color: white;
    
    p {
        margin-bottom: 20px;
        opacity: .8;
    }
    
    h2 {
        margin: 20px 0px 10px 0px;
        font-size: 33px;
        color: #f5af11;
        text-shadow: 0px 0px 0px rgba(0, 0, 0, .1);
    }

    h2, p {
        text-align: center;
    }
`