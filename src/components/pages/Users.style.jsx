import styled from "styled-components";
import Users from "./Users";

export const UsersStyle = styled(Users)`
    display: flex;
    flex-direction: row;
    
    & div {
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 10px;
        margin: 20px 25px;
        width: 171px;
        height: 100px;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, .1);
    }

    & h4 {
        color: black;
        font-size: 1.2em;
        background-color: #f5eb63;
        padding: 10px;
        border-radius: 10px 10px 0px 0px;
    }
`