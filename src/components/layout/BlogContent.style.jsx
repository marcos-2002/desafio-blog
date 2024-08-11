import styled from "styled-components";
import BlogContent from "./BlogContent";


export const BlogContentStyle = styled(BlogContent)`
    & div {
        width: 650px;
        height: 500px;
        background-color: white;
    }

    & div h2 {
        border-radius: 10px 10px 0px 0px;
        background-color: #f5ca11;
        padding: 5px;
    }

    & div h3 {
        background-color: #f5cb1155;
        padding: 3px 5px;
    }

    & div p {
        white-space: wrap;
        overflow: visible;
        text-overflow: clip;
        max-width: none;
        font-size: 1em;
        padding: 10px 30px;
        line-height: 25px;
    }

    & div button {
        position: fixed;
        top: 0;
        right: 0;
        margin-top: 3px;
        margin-right: 3px;
        background-color: #f5eb63;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.589);
    }

    & div button:hover {
        background-color: #f5e611;
    }

    @media(max-width: 670px){
        & div {
            width: 450px;
            height: 500px;
        }
    }

    @media(max-width: 460px){
        & div {
            width: 300px;
            height: 500px;
        }
    }
`