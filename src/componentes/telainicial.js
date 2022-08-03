import styled from "styled-components"
import logo from "../assets/Group 8.png"
import {Link} from "react-router-dom"
//Falta o espaçamento do placeholder e colocar uma letra maior e saber desestilizar um button
function TelaInicial(){
    return(
        <Conteudo>
            <img src={logo} alt="-"/>
            <form>
            <input type="email" placeholder="email" required/>
            <input type="password" placeholder="senha" required/>
            <Link to="/habitos">
            <button type="submit" ><p>Entrar</p></button>
            </Link>
            </form>
            <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>  
        </Conteudo>
    )
}

const Conteudo = styled.div`
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

export default TelaInicial
