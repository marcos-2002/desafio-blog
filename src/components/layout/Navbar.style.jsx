import styled from "styled-components";
import Navbar from "./Navbar";

export const NavbarStyled = styled(Navbar)`

    background-color: #f5ca11;
    margin-bottom: 30px;
    padding: 5px 30px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    h1 a:hover {
        text-decoration: none;
    }

    & a{
        margin-right: 20px;
        color: black;
        text-decoration: none;
    }

    & a:hover {
        text-decoration: underline;
        cursor: pointer;
    }

`