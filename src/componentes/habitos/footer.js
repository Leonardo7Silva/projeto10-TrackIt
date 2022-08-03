import styled from "styled-components"

export default function Footer(){
    return(
        <Foot>
            <p>Habitos</p>
            <p>Histórico</p>
        </Foot>
    )
}

const Foot = styled.div`
    width: 100%;
    height: 11vh;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;

    p{
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }
`