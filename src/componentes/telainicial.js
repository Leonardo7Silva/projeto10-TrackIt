import logo from "../assets/Group 8.png"
import {Link, useNavigate} from "react-router-dom"
import ConteudoInicial from "./styledComuns"
import { useState } from "react";
import axios from "axios";


function TelaInicial({resposta, setResposta}){

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    function fazerLogin(event){
        event.preventDefault();
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",{
            email: email,
            password: senha
        })

        requisicao.then((res)=> {setResposta(res.data); navigate("/habitos")})
    }



    return(
        <ConteudoInicial>
            <img src={logo} alt="-"/>
            <form onSubmit={fazerLogin}>
            <input type="email" placeholder="email" value={email} onChange={e=> setEmail(e.target.value)} required/>
            <input type="password" placeholder="senha" value={senha} onChange={e=> setSenha(e.target.value)} required/>
            <button type="submit" ><p>Entrar</p></button>
            </form>
            <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>  
        </ConteudoInicial>
    )
}



export default TelaInicial
