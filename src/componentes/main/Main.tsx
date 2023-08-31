import Filme from "../filme/Filme";
import './Main.css'
export default function Main(){
    return(
        <main className="content-main">
            <Filme titulo="barbie" sinopse="depois de ser expulsa..." imagem="./barbie.png"/>
            <Filme titulo="transformas" sinopse="maquinas em formas de triangulo" imagem="./barbie.png"/>
        </main>
    )
}