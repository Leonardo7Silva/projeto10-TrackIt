import Topper from "../habitos/Topper";
import Footer from "../habitos/footer";
import styled from "styled-components";
import CardDia from "./cardDia";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react"
import UserContext from "../context/userContext";
import dayjs from "dayjs";

export default function Hoje(){
    let now = dayjs();
    let date = now.date();
    let month = now.month();
    let day = now.format("dddd");
    const [habitosDoDia, setHabitosDoDia] = useState([])
    const {total, setTotal, contador, setContador} = useContext(UserContext);
    const porcentagem = (contador/total)*100
    const auth = JSON.parse(localStorage.getItem("trackit"));
    const config = {
        headers: {
            "Authorization": `Bearer ${auth.token}`
        }
    }
    
    function addContador(){
        if (habitosDoDia.length > 0){
            let aux6 = 0
            habitosDoDia.map((value)=> {
                if(value.done){
                    aux6 = aux6 + 1
                }})
            return setContador(aux6);
        }else return;
    }

    function marcarHabito(idHabito, done){

        if(done){
            const requi = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}/uncheck`,{},config)
            return requi.then(() => {setContador(contador - 1); listarHabitosDia()});
        }else{
        const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}/check`,{},config);
        requisicao.then(() => {setContador(contador + 1);listarHabitosDia()})
        }
        
    }

    function listarHabitosDia(){
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        requisicao.then((res)=>{
            const aux = res.data;
            setTotal(aux.length);
            setHabitosDoDia(aux);
        })
    }

    useEffect(addContador,[]);
    useEffect(listarHabitosDia,[]);


    return(
        <>
        <Fundo>
            <Topper/>
            <ConteudoAplicacao>
            <div>
                <p>{`${day}, ${date}/${month + 1}`}</p>
                {porcentagem > 0 ? <h2>{`${porcentagem}% dos hábitos concluídos`}</h2> : <h6>Nenhum hábito concluído ainda</h6> }
            </div>

            {habitosDoDia.length === 0 ? <p>Não há habitos no dia de hoje!</p> :
            habitosDoDia.map((value, index) => <CardDia 
            key={index} 
            id={value.id}
            titulo={value.name}
            done={value.done}
            sequenciaAtual={value.currentSequence}
            maiorSequencia={value.highestSequence}
            marcarHabito={marcarHabito}
            addContador={addContador}
            listarHabitosDia={listarHabitosDia}
            />  ) 
            }
            
            </ConteudoAplicacao>
            <Footer/>
        </Fundo>
        </>
    );
}

const Fundo = styled.div`
    width: 100vw;
    height: 130vh;
    min-height: 100vh;
    background-color: #f2f2f2;
`


const ConteudoAplicacao = styled.div`
    width: 90vw;
    height: auto;
    margin: 11vh auto;

    h2{
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #8FC549;
    }

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
        flex-direction: column;
        justify-content: center;

    }

    div:nth-child(1) p{
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }

    h6{
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #666666;
    }
`