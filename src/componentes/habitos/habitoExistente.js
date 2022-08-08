import styled from "styled-components"
import Dia2 from "./dia2"
import { Botoes } from "./criadorDeHabito"
import { useState } from "react"

function HabitoExistente({habitos, titulo, deletarHabito, id}){
    const [confirmar, setConfirmar] = useState(true)
 return(<>
    <Criacao>
    <p>{titulo}</p>
    <ion-icon name="trash-outline" onClick={()=>setConfirmar(false)} ></ion-icon>
    <div className="dias">
        <Dia2 nome={"D"} idL={0} habitos={habitos}/>
        <Dia2 nome={"S"} idL={1} habitos={habitos}/>
        <Dia2 nome={"T"} idL={2} habitos={habitos}/>
        <Dia2 nome={"Q"} idL={3} habitos={habitos}/>
        <Dia2 nome={"Q"} idL={4} habitos={habitos}/>
        <Dia2 nome={"S"} idL={5} habitos={habitos}/>
        <Dia2 nome={"S"} idL={6} habitos={habitos}/>
    </div>
    { confirmar ? "" : 
    <Botoes>
        <span onClick={()=>{setConfirmar(true)}}><p>Cancelar</p></span> 
        <button onClick={()=>{deletarHabito(id);setConfirmar(true)}}><p>Confirmar</p></button>
    </Botoes> }
    </Criacao>
 </>)   
}

const Criacao = styled.div`
    width: 100%;
    height: auto;
    max-width: 85vw;
    margin-bottom: 1vh;
    background-color: #ffffff;
    padding-top: 1vh;
    padding-left: 4vw;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    position: relative;
   
    ion-icon{
        font-size: 20px;
        color: #666666;
        position: absolute;
        right: 3vw;
        top: 1vh;
        cursor: pointer;
    }
    .dias{
        width: 81vw;
        height: 13%;
        display: flex;
        align-items: center;
        justify-content: left;
        margin-top: 1vw;
        margin-bottom: 2vh;
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
export {Criacao, HabitoExistente}