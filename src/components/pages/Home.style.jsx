import styled from "styled-components";
import Home from "./Home";

export const HomeStyle = styled(Home)`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    & div.blogs {
        width: 250px;
        height: 120px;
        margin: 20px 25px;
        border: 1px solid black;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, .2);
        box-shadow: 0px 0px 2px rgba(0, 0, 0, .1);
    }

    & div h2.h2Blog {
        border-radius: 10px 10px 0px 0px;
        background-color: #f5eb63;
        padding: 5px;
    }

    & div p.pBlog {
        padding: 5px;
        text-align: justify;
        font-size: 1.1em;
        max-width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    & div button.buttonBlog {
        background-color: #f5e611;
        border: 1px solid rgba(0, 0, 0, .2);
        font-size: 1.1em;
        margin: 7px 5px;
        padding: 3px 7px;
        border-radius: 3px;
    }

    & div button.buttonBlog:hover {
        cursor: pointer;
        background-color: #f5ca11;
    }

    & div.modal {
        width: 100%;
        height: 100%;
        margin: 0;
        border-radius: 0px;
        border: none;
        box-shadow: none;
    }
`