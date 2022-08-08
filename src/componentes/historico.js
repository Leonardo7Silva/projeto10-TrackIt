import styled from "styled-components"
import Topper from "./habitos/Topper"
import Footer from "./habitos/footer"


export default function Historico(){
    
    const auth = JSON.parse(localStorage.getItem("trackit"));
    const perfil = auth.image

    return (
        <>
        <Fundo>
            <Topper perfil={perfil}/>
            <ConteudoAplicacao>
            <div>
                <p>Histórico</p>
            </div>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </ConteudoAplicacao>
            <Footer/>
        </Fundo>
        </>
    )
}

const Fundo = styled.div`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    background-color: #f2f2f2;
`
const ConteudoAplicacao = styled.div`
    width: 90vw;
    height: auto;
    margin: 11vh auto;

    p{
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }

    div:nth-child(1){
        width: 100%;
        height: 11vh;
        min-height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    div:nth-child(1) p{
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    div:nth-child(1) button{
        width: 11vw;
        height: 45%;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: all 0.5s;
        display:flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
    button:active{
        transform: scale(0.9);
    }
    div:nth-child(1) button p{
        font-weight: 400;
        font-size: 27px;
        line-height: 34px;
        color: #FFFFFF;
    }
`