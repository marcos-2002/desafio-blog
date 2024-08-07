import Login from "./Login";
import styled from "styled-components";

export const LoginUser = styled(Login)`
    padding: 10px;
    border: 1px solid black;
    display: inline-block;
    border-radius: 3px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    h1, p {
        text-align: center;
    }
`