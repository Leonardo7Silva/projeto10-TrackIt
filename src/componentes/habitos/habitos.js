import styled from "styled-components"
import Topper from "./Topper"
import Footer from "./footer"
import {CriadorDeHabito} from "./criadorDeHabito"
import { useEffect, useState } from "react"
import {HabitoExistente} from "./habitoExistente"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Habitos(){
    const [aparecerCriacao, setAparecerCriacao] = useState(false)
    const auth = JSON.parse(localStorage.getItem("trackit"));
    const [nome,setNome] = useState("");
    const [days, setDays] = useState([]);
    const [habitos, setHabitos] = useState([])
    const navigate = useNavigate;
    const config = {
        headers: {
            "Authorization": `Bearer ${auth.token}`
        }
    }

    function criarHabito(event){
        event.preventDefault();
        if (days.length === 0){
           return alert("Marque pelo menos um dia!");
        }

        const body = {
            name: nome,
            days: days
        }

        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
        requisicao.then((res)=> {
            let aux = [...habitos, res.data];
            setDays([]);
            setNome("");
            setHabitos(aux);
            setAparecerCriacao(false);
        })

        requisicao.catch((res) => {alert(`Deu ruim! Código: ${res.status}`)})
    }

    function adicionarNumero(Number){
        let aux = days.filter((value)=> value === Number)
        if (aux.length === 0){
            let aux3 = [...days, Number]
            return setDays(aux3.sort());
        }else { 
            let aux2 = days.filter((value) => value !== Number)
            return setDays(aux2);
        }
    }

    function listarHabitos(){
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        setHabitos([])
        requisicao.then(res=>{
            let aux = res.data
            setHabitos(aux)
        })

    }

   

    function deletarHabito(idDoDelete){
        const requisicao = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idDoDelete}`,config)
        requisicao.then(()=> listarHabitos() )}
    
    
    useEffect(listarHabitos, [])


    return (
        <>
        {console.log(habitos)}
        
        <Fundo>
            <Topper/>
            <ConteudoAplicacao>
            <div>
                <p>Meus hábitos</p>
                <button onClick={()=> setAparecerCriacao(true) }><p>+</p></button>
            </div>
            {aparecerCriacao ? <CriadorDeHabito
            nome={nome}
            days={days}
            setAparecerCriacao={setAparecerCriacao}
            setNome={setNome}
            adicionarNumero={adicionarNumero}
            criarHabito={criarHabito}
            /> : ""}

            { habitos.length === 0 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> :
            habitos.map((value,index)=><HabitoExistente key={index} id={value.id} habitos={value.days} titulo={value.name} deletarHabito={deletarHabito}/>)}
            
            
            
            </ConteudoAplicacao>
            <Footer/>
        </Fundo>
        </>
    )
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