import styled from "styled-components";
import Blog from "./Blog";

export const BlogStyle = styled(Blog)`
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 10px;
    margin: auto;
    width: 573px;
    background-color: white;

    h1 {
        margin: 20px 0px 0px 10px;
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
`