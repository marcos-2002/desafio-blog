import styled from "styled-components";
import TextArea from "./TextArea";

export const TextAreaForm = styled(TextArea)`

    padding-left: 10px;

    & label {
        color: #f5af11;
        text-shadow: 0px 0px 0px rgba(0, 0, 0, .7);
        font-size: 1.2em;
    }

    & textArea {
        padding: 5px 10px;
        margin-top: 15px;
    }

    & textArea:focus{
        outline: 0;
    }
`