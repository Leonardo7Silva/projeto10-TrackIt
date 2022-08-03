import styled from "styled-components"
import Topper from "./Topper"
import Footer from "./footer"

export default function Habitos(){
    const perfil = "https://criticalhits.com.br/wp-content/uploads/2021/09/Screenshot-2021-09-02-at-04-12-18-Genshin-Impact-Aloy-jpg-JPEG-Image-1280-%C3%97-720-pixels.png"
    return (
        <>
        <Fundo>
            <Topper perfil={perfil}/>
            <Footer/>
        </Fundo>
        </>
    )
}

const Fundo = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f2f2f2;
`