import Pagamento from "../produtos/Pagamento";
import Botao from "./Botao";

export default function Produtos(){
    return(
        <div>           
            <h2> Achados Shopee </h2>
            <br/>
            <p> Sabonete <Botao/> </p>
            <p> makita <Botao/> </p>
            <p> Cloridato de potassio <Botao/> </p>
            <p> tarja preta <Botao/></p>
            <br/>
            <Pagamento/>
        </div>
        )
    }


