import styled from "styled-components"
import logotipo from "../../assets/TrackIt.png"

export default function Topper({perfil}){
   return(
      <>
         <Top>
            <img src={logotipo} alt="-"/>
            <img src={perfil} alt="-"/>
         </Top>
      </>
   ) 
}

const Top = styled.div`
   width: 100%;
   height: 11vh;
   min-height: 70px;
   background: #126BA5;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: fixed;
   top: 0;
   left: 0;

   img {
      width: 30%;
      height: 45%;
      margin: 0 5vw;
   }

   img:nth-child(2){
      width: 51px;
      height: 51px;
      border-radius: 98px;
   }

`