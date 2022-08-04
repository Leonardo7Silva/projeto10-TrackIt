import styled from "styled-components"
import Dia from "./dia"

export default function CriadorDeHabito(){



    return(
        <>
            <Criacao>
                <input type="text" placeholder="Nome do hábito" required></input>
                <div className="dias">
                    <Dia nome={"D"}/>
                    <Dia nome={"S"}/>
                    <Dia nome={"T"}/>
                    <Dia nome={"Q"}/>
                    <Dia nome={"Q"}/>
                    <Dia nome={"S"}/>
                    <Dia nome={"S"}/>
                </div>
                <Botoes><span><p>Cancelar</p></span> <button><p>Salvar</p></button></Botoes>
            </Criacao> 
        </>
    )
}

const Criacao = styled.div`
    width: 100%;
    height: auto;
    
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3vh;
    border-radius: 5px;

    input {
        width: 81vw;
        height: 13%;
        min-height: 45px;
        border: 1px solid #D4d4d4;
        border-radius: 5px;
        margin-bottom: 1vh;
        padding: 0 10px;
        box-sizing: border-box;
        font-size: 19px;
        color: #666666;
        
    }

    input::placeholder{
        font-weight: 400;
        font-size: 19px;
        line-height: 25px;
        color: #DBDBDB;
    }
    .dias{
        width: 81vw;
        height: 13%;
        display: flex;
        align-items: center;
        justify-content: left;
        margin-top: 1vw;
        margin-bottom: 2vh;
        cursor: pointer;
    }
    .dias span{
        height: 30px;
        width: 30px;
        border: 1px solid #D4D4D4;
        margin-right: 1vw;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    .marcado{
        background-color: #cfcfcf;
    }

    .marcado p{
        color: #ffffff; 
    }

    .desmarcado{
        background-color: #ffffff;
    }

    .desmarcado p{
        color: #dbdbdb; 
    }
`

const Botoes = styled.div`
    width: 81vw;
    height: 13%;
    min-height: 45px;
    margin: 2vh 0;
    display: flex;
    justify-content: end;
    align-items: center;

    span{
        margin: 0 5vw;
    }

    span p{
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        color: #52B6FF;
    }

    button {
        width: 25vw;
        height: 6vh;
        background: #52B6FF;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.5s;
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
        font-size: 18px;
        line-height: 26px;
        color: #FFFFFF;
        text-decoration-line: none;
    }
`