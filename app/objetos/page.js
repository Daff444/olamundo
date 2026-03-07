'use client'
function Objetos() {

    const numeros = [1,2,4,5,6,7]
    const nomes = ["Daf","Maria","Rafa"]
    


    const usuario = {
        nome: "Dafne",
        dataNascimento: "17/04/2002",
        idade: 24,
        admin: true

    }
    
    const listaUsuarios = [
        {
            id: 7,
            nome: "Dafne",
            email: "daf.daf@daf.br"
        },
        {
            id: 9,
            nome: "Daf",
            email: "daf1.daf@senac.br"
        },
        {
            id: 13,
            nome: "Helena",
            email: "Helena.marti@senac.br"
        }
    ]

    console.log(listaUsuarios)

    return (
        <div>
            <h1>Objetos em JavaScript</h1>
            <p>Conhecendo o famoso JSON, a estrutura mais usada da programação</p>
            <p>Seja bem-vindo {usuario.nome} voce nasceu em{usuario.dataNascimento} e tem {usuario.idade} anos.</p>
            <p>Top 5 melhores números: {numeros[1]}</p>
            <p>Top 3 usuarios: {listaUsuarios[1].nome} </p>
        </div>

    );
}

export default Objetos;


