import { useNavigate } from "react-router-dom";
import Topper from "./habitos/Topper";
import Footer from "./habitos/footer";


const SEC = 1000;
const MIN_5 = SEC * 60 * 5;
const MIN_1 = SEC * 60 * 1;

function renderError() {
  localStorage.clear("trackit");
  return <h1>VOCÊ NÃO É AUTORIZADO</h1>;
}

export default function PaginaPrivada({ children }) {
  const navigate = useNavigate();


  const auth = JSON.parse(localStorage.getItem("trackit"));

  if (!auth) {
    return renderError();
  }

  const now = +new Date();
  const timeLogged = auth.timestamp;

  if (now - timeLogged <= MIN_1) {
    return (
      <>
        <Topper/>
        {children}
        <Footer/>
      </>
    );
  } else {
    //navigate("/");
    renderError();
  }
}
