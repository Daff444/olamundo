'use client'

import { useEffect, useState } from "react";
import Autenticacao from "../autenticacao/page";


function Carros() {

    const [autenticado, setAutenticado] = useState(false)
    const [exibeListagem, setExibeListagem] = useState(true)

    const [nome, setNome] = useState("")
    const [marca, setMarca] = useState("")
    const [valor, setValor] = useState()

    const [listaCarros, setListaCarros] = useState([
        {
            nome: "Civic",
            marca: "Honda",
            cor: "Preto",
            valor: 145000
        },
        {
            nome: "Corolla",
            marca: "Toyota",
            cor: "Branco",
            valor: 150000
        },
        {
            nome: "Onix",
            marca: "Chevrolet",
            cor: "Prata",
            valor: 85000
        },
        {
            nome: "HB20",
            marca: "Hyundai",
            cor: "Vermelho",
            valor: 82000
        },
        {
            nome: "Gol",
            marca: "Volkswagen",
            cor: "Azul",
            valor: 75000
        },
        {
            nome: "Compass",
            marca: "Jeep",
            cor: "Cinza",
            valor: 185000
        },
        {
            nome: "Renegade",
            marca: "Jeep",
            cor: "Branco",
            valor: 130000
        },
        {
            nome: "Kicks",
            marca: "Nissan",
            cor: "Laranja",
            valor: 120000
        },
        {
            nome: "Creta",
            marca: "Hyundai",
            cor: "Preto",
            valor: 135000
        },
        {
            nome: "Tracker",
            marca: "Chevrolet",
            cor: "Vermelho",
            valor: 140000
        }
    ])

    function salvar(e) {
        e.preventDefault()

        const objeto = {
            nome: nome,
            marca: marca,
            cor: "Preto",
            valor: valor
        }

        //listaCarros.push(objeto)
        setListaCarros(listaCarros.concat(objeto))
    }

    useEffect(() => {

        const logado = localStorage.getItem("logado")
        if (logado == "true") {
            setAutenticado(true)
        }
    }, [])

    return (
        <div>

            <h1>Lista de Carros</h1>
            <hr />

            <button onClick={() => setExibeListagem(true)} className="btn btn-primary">Listagem</button>
            
            {
                autenticado == true ?
                     <button onClick={() => setExibeListagem(false)} className="btn btn-success mx-4">Cadastro</button>
                :
                <p></p>
            }
            
                {
                exibeListagem == true ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Cor</th>
                                <th scope="col">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listaCarros.map(
                                    item => <tr>
                                        <td>{item.nome}</td>
                                        <td>{item.marca}</td>
                                        <td>{item.cor}</td>
                                        <td>{item.valor}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    :
                        <form onSubmit={salvar}>

                            <p>Digite o nome do carro:</p>
                            <input onChange={e => setNome(e.target.value)} />

                            <p>Digite a marca:</p>
                            <input onChange={e => setMarca(e.target.value)} />

                            <p>Digite o valor:</p>
                            <input onChange={e => setValor(e.target.value)} />
                            <br />
                            <button>Salvar</button>

                        </form>
                    } 
            
        
        </div >
    );
}

export default Carros;

