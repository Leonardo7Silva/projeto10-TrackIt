import { useEffect, useState } from "react"


export default function Dia({nome , idL, habitos}){

    const [marcacao, setMarcacao] = useState("desmarcado")

    useEffect(()=>{
        let aux = habitos.filter((value)=> value === idL)
        if (aux.length !== 0){
            setMarcacao("marcado")
        }},[])
    
    



    return (
        <>
        <span className={`checkbox ${marcacao}`}><p>{nome}</p></span>
        </>
    )
}

