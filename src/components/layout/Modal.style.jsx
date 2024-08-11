import styled from "styled-components";
import Modal from "./Modal";

export const ModalStyle = styled(Modal)`
       position: fixed;
       top: 0;
       bottom: 0;
       right: 0;
       left: 0;
       background: rgba(0, 0, 0, 0.541);
       z-index: 9999;
       width: 100vw;
       height: 100vh;

    & div {
        width: 650px;
        height: 500px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
    }

`