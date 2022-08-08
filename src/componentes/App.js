import {BrowserRouter,Route , Routes} from "react-router-dom"
import TelaInicial from "./telainicial"
import TelaCadastro from "./telaCadastro"
import Habitos from "../componentes/habitos/habitos.js"
import Historico from "./historico"
import { useEffect, useState } from "react"
import Hoje from "./hoje/hoje"
import UserContext from "./context/userContext"


export default function App(){
    const [resposta, setResposta] = useState({})
    const [contador, setContador] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        localStorage.setItem("trackit", JSON.stringify({...resposta, timeStamp: +new Date()}))
    },[resposta])

    return (
    <>
        <UserContext.Provider value={{total, setTotal, contador, setContador}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaInicial setResposta={setResposta} resposta={resposta}/>}/>
                <Route path="/cadastro" element={<TelaCadastro/>}/> 
                <Route path="/habitos" element={<Habitos/>}/> 
                <Route path="/historico" element={<Historico/>}/> 
                <Route path="/hoje" element={<Hoje/>}/> 
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    </>
    )
}