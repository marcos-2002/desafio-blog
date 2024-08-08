import Input from "./Input";
import styled from "styled-components";

export const InputForm = styled(Input)`
    font-size: 1.4em;
    padding: 10px;

    & label {
        /* color: #333; */
        color: #f5af11;
        text-shadow: 0px 0px 0px rgba(0, 0, 0, .7);
    }

    & input {
        width: 270px;
        height: 30px;
        margin-top: 10px;
        padding-left: 5px;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }

    & input:focus {
        outline: 0;
    }
`