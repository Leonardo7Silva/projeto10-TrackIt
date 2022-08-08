import { useState } from "react";

export default function Dia({nome, adicionarNumero, idL}){
    const [marcador, SetMarcador] = useState("desmarcado");

    function enviarDia(){
        if (idL === 0){
            return adicionarNumero(0);
        }
        else if (idL === 1){
            return adicionarNumero(1);
        }else if (idL === 2){
            return adicionarNumero(2);
        }
        else if (idL === 3){
            return adicionarNumero(3);
        }else if (idL === 4){
            return adicionarNumero(4);
        }
        else if (idL === 5){
            return adicionarNumero(5);
        }else if (idL === 6){
            return adicionarNumero(6);
        }
    }

    function marcarDia(string){
        if(string === "desmarcado"){
            return SetMarcador("marcado");
        } else if(string === "marcado"){
            return SetMarcador("desmarcado");
        }
    }


    return (
        <span className={`checkbox ${marcador}`} onClick={()=>{marcarDia(marcador); enviarDia()}}><p>{nome}</p></span>
    )
}

