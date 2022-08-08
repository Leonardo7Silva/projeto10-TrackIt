import { useEffect, useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../context/userContext";



export default function CardDia({id, titulo, done, sequenciaAtual, maiorSequencia, marcarHabito, addContador}){
    const {contador, setContador} = useContext(UserContext);

    useEffect(()=>addContador(done),[])
    

    return(
        <>
        {console.log(id, done)}
        <CartaDia feito={done}>
            <h4>{titulo}</h4>
            <div className="cachorro"><h6>Sequência atual:</h6> <h5>{sequenciaAtual} dias</h5></div>
            <div className="cachorro"><h6>Seu recorde:</h6> <h5>{maiorSequencia} dias</h5></div>
            <ion-icon name="checkbox" onClick={()=> marcarHabito(id, done)}></ion-icon>
        </CartaDia>
        </>
    );
}

const CartaDia = styled.div`
    width: 100%;
    height: auto;
    min-height: 94px;
    max-width: 85vw;
    margin-bottom: 1vh;
    background-color: #ffffff;
    padding-top: 1vh;
    padding-left: 4vw;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    .cachorro {
        display: flex ;
        align-items: center;
    }

    h4{
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 1vh;
    }
    h5{
        margin-left: 5px;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: ${props => props.feito ? "#8FC549" : "#666666"};
    }

    h6{
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: "#666666";
    }
    ion-icon{
        font-size: 80px;
        color: ${props => props.feito ? "#8FC549" : "#EBEBEB"};
        position: absolute;
        right: 4vw;
        top: 10px;
        cursor: pointer;
    }
`

