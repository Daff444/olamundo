'use client'
import { useState } from "react";

function Estados() {

    //const nome = "Dafne"
    const [nome, serNome] = useState("")
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("")

    function salvar(){
        alert("O nome é "+nome+ "a senha é "+senha+"e o e-mail é "+email)
    }


    return (

        <div>
            <h1>Programação em React com estados</h1>

            <p>Digite o seu nome:</p>
            <input onChange={ e => setNome(e.target.value) } />

    
            <p>Digite a sua senha:</p>
            <input type="password" onChange={ e => setSenha(e.target.value) } />

            <p>Digite o seu e-mail:</p>
            <input type="email" onChange={ e => setEmail(e.target.value) } />


            <button onClick={salvar}>Salvar</button>

            



        </div>

    );
}

export default Estados;