import {BrowserRouter,Route , Routes} from "react-router-dom"
import TelaInicial from "./telainicial"
import TelaCadastro from "./telaCadastro"
import Habitos from "../componentes/habitos/habitos.js"

export default function App(){
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaInicial/>}/>
                <Route path="/cadastro" element={<TelaCadastro/>}/> 
                <Route path="/habitos" element={<Habitos/>}/>   
            </Routes>
        </BrowserRouter>
    </>
    )
}