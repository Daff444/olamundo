'use client'

import { useState } from "react";

function Autenticacao() {

    const [autenticado, setAutenticado] = useState(false)

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function autenticar(e) {
        e.preventDefault()

        const objeto = {

            email: email,
            senha: senha
        }

        console.log(objeto)

        //MANIPULAÇÃO DE STRING

        if (objeto.email.length < 3) {
            alert("Usuário muito curto")
            return
        }

        if (objeto.email.length > 100) {
            alert("Usuário muito longo")
            return
        }

        if (objeto.email.includes("@") == false || objeto.email.includes(".") == false) {
            alert("O email deve ter um @ e um ponto")
            return
        }


        if (objeto.email == "adimin@adimin.com" && objeto.senha == "123123") {
            alert("Login concluído com sucesso")
            setAutenticado(true)
        } else {
            alert("Email ou senha inválidos..")
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <hr />

            <form onSubmit={autenticar} >

                <p>Digite seu E-mail:</p>
                <input onChange={e => setEmail(e.target.value)} />
                <p>Digite sua senha:</p>
                <input onChange={e => setSenha(e.target.value)} type="password" />

                <br />
                <button>Entrar</button>

            </form>

            <hr />

            {
                //OPERADOR TERNÁRIO
                autenticado == true ?
                    <div>
                        <h1>Painel administrativo</h1>
                        <p>Você está logado lindamente</p>
                        <button onClick={() => setAutenticado(false)}>Sair</button>
                    </div>
                :
                    <p>Você ainda não está logado</p>
            }
        
        </div>


    );
}

export default Autenticacao;
