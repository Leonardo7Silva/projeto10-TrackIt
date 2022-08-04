import styled from "styled-components";

const ConteudoInicial = styled.div`
    width: 80vw;
    height: 100vh;
    margin: 11vh auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 48vw;
        height: 27vh;
        margin-bottom: 5vh;
    }
    
    input {
        width: 100%;
        height: 7vh;
        min-height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 1vh;
        padding: 0 10px;
        box-sizing: border-box;
    }

    input::placeholder{
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }

    button {
        width: 100%;
        height: 7vh;
        background: #52B6FF;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.5s;
        margin-bottom: 3vh;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
    }
    button:active{
        transform: scale(0.9);
    }

    button p{
        font-weight: 400;
        font-size: 21px;
        line-height: 26px;
        color: #FFFFFF;
        text-decoration-line: none;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }`


export default ConteudoInicial;

