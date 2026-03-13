'use client'

import { useEffect, useState } from "react";

function Login() {

    const [aunteticado, setAutenticado] = useState(false)

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    function autenticar() {
        if (usuario == "admin" && senha == "123123") {
            alert("Você se conectou")
            localStorage.setItem("logado", true)
            setAutenticado(true)
        } else {
            alert("Erro! Algum dado está errado")
        }
    };
    function desconectar() {
        alert("Desconectado com sucesso!")
        localStorage.removeItem("logado")
        setAutenticado(false)
    }

    useEffect( () => {

        const logado = localStorage.getItem("logado")
        if(logado == "true"){
            setAutenticado(true)
        }

    },[] )

    return (
        <div>

            {
                aunteticado == false ?
                    <div>
                        <h1> Login </h1>
                        <p> Digite seu usuário: </p>
                        <input onChange={e => setUsuario(e.target.value)} />

                        <br />

                        <p> Digite sua senha: </p>
                        <input onChange={e => setSenha(e.target.value)} type="password" />

                        <br />
                        <br />

                        <button onClick={autenticar} > Entrar </button>
                    </div>
                :
                    <div>
                        <p> Você já está logado </p>
                        <button onClick={desconectar} > Sair da conta </button>
                    </div>
            }
        </div>
    )
}

export default Login;


