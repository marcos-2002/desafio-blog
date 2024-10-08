import styled from "styled-components";
import Button from "../layout/Button";

export const ButtonForm = styled.button`
    background-color: #f5e611;
    width: 279px;
    padding: 7px 15px;
    border-radius: 2px;
    font-size: 1em;
    border: 1px solid rgba(0, 0, 0, .2);
    margin: 15px 10px;
    cursor: pointer;

    &:hover{
        background-color: #f5ca11;
    }
`

export const ButtonRemove = styled(Button)`
    background-color: #f5e611;
    width: 150px;
    padding: 7px 15px;
    border-radius: 2px;
    font-size: 1em;
    border: 1px solid rgba(0, 0, 0, .2);
    margin: 15px 10px;
    cursor: pointer;

    &:hover{
        background-color: #f5ca11;
    }
`