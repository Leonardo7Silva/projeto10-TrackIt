import styled from "styled-components"
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function Footer(){
    const porcentagem = 66
    return(
        <Foot>
            <Link to="/habitos">
            <p>Habitos</p>
            </Link>
            <div>
            <CircularProgressbar 
            value={porcentagem} 
            text="Hoje"
            background={true}
            backgroundPadding={4}
            strokeWidth={7}
            styles={buildStyles({
                textSize: "18px",
                pathColor: `#fff`,
                textColor: "#fff",
                backgroundColor: "#52B6FF",
                trailColor: "#52B6FF"

            })}/>
            </div>
            <Link to="/historico">
            <p>Histórico</p>
            </Link>

        </Foot>
    )
}

const Foot = styled.div`
    width: 100%;
    height: 11vh;
    min-height: 70px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;

    p{
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
        margin: 0 3vw;
    }
    div{
        width: 27vw;
        min-height: 120px;
        min-width: 120px;
        height: 25vw;
        margin-bottom: 10vh;
    }
`