import Login from "./Login";
import styled from "styled-components";

export const LoginUser = styled(Login)`
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 10px;
    margin: auto;
    width: 300px;
    background-color: white;

    box-shadow: 0px 0px 5px rgba(0, 0, 0, .1);

    h1 {
        margin: 20px 0px 10px 0px;
        color: #f5af11;
        text-shadow: 0px 0px 0px rgba(0, 0, 0, .1);
    }
    
    h1, p {
        text-align: center;
    }

    p {
        margin-bottom: 20px;
        opacity: .8;
    }

    a {
        color: black;
    }
`