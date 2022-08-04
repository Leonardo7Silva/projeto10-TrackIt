import {BrowserRouter,Route , Routes} from "react-router-dom"
import TelaInicial from "./telainicial"
import TelaCadastro from "./telaCadastro"
import Habitos from "../componentes/habitos/habitos.js"
import Historico from "./historico"
import { useState } from "react"


export default function App(){
    const [resposta, setResposta] = useState({})

    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaInicial setResposta={setResposta} resposta={resposta}/>}/>
                <Route path="/cadastro" element={<TelaCadastro/>}/> 
                <Route path="/habitos" element={<Habitos resposta={resposta}/>}/> 
                <Route path="/historico" element={<Historico/>}/>   
            </Routes>
        </BrowserRouter>
    </>
    )
}