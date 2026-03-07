function Equipamentos() {

    const listaEquipamentos = [
        {
            nome: "Chave de fenda",
            preco: 8.5,
            observacao: "Serve para por em fendas"
        },
        {
            nome: "Serrote",
            preco: 29.9,
            observacao: "Serra coisas que terminam com ote"
        },
        {
            nome: "Martelo",
            preco: 15.25,
            observacao: "Martela o martelão"
        }
    ]


    return (
        <div>
            <h1>Listagem de Equipamentos</h1>

            
            <hr/>
            <ul>
                <li><strong>Item:</strong> {listaEquipamentos[0].nome} R$ <strong>{listaEquipamentos[0].preco}</strong> ({listaEquipamentos[0].observacao}) </li>
                <li><strong>Item:</strong> {listaEquipamentos[1].nome} R$ <strong>{listaEquipamentos[1].preco}</strong> ({listaEquipamentos[1].observacao})</li>
                <li><strong>Item:</strong> {listaEquipamentos[2].nome} R$ <strong>{listaEquipamentos[2].preco}</strong> ({listaEquipamentos[2].observacao}) </li>
            </ul>

        </div>
    );
}

export default Equipamentos;


