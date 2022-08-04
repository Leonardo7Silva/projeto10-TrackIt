import { useState } from "react";

export default function Dia({nome}){
    const [marcador, SetMarcador] = useState("desmarcado");

    function marcarDia(string){
        if(string === "desmarcado"){
            return SetMarcador("marcado");
        } else if(string === "marcado"){
            return SetMarcador("desmarcado");
        }
    }


    return (
        <span className={`checkbox ${marcador}`} onClick={()=>marcarDia(marcador)}><p>{nome}</p></span>
    )
}

