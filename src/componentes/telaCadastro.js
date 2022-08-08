import logo from "../assets/Group 8.png"
import {Link, useNavigate} from "react-router-dom"
import ConteudoInicial from "./styledComuns";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";


export default function TelaCadastro(){

    const navigate = useNavigate();
    const [carregamento, setCarregamento] = useState(false)

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [imagem, setImagem] = useState("");

    function fazerCadastro(event){
        event.preventDefault();
        setCarregamento(!carregamento);
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",{
            email: email,
            name: nome,
            image: imagem,
            password: senha
        })

        requisicao.then(()=> navigate("/"))
    }

    

    return(
        <>
        <ConteudoInicial>
            <img src={logo} alt="-"/>
            <form onSubmit={fazerCadastro}>
            <input type="email" placeholder="email" value={email} onChange={e=> setEmail(e.target.value)} required/>
            <input type="password" placeholder="senha" value={senha} onChange={e=> setSenha(e.target.value)} required/>
            <input type="text" placeholder="nome" value={nome} onChange={e=> setNome(e.target.value)} required/>
            <input type="text" placeholder="foto" value={imagem} onChange={e=> setImagem(e.target.value)} required/>
            <button type="submit" > { carregamento ? <ThreeDots color="#ffffff" height={80} width={80}/> : <p>Cadastrar</p>}</button>
            </form>
            <Link to="/"><p>Já tem uma conta? Faça login!</p></Link>  
        </ConteudoInicial>
        </>
    );
}


