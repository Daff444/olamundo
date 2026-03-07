'use client'
import "./Listagem.css"


function Listagem() {

    const listaAves = [

        {
            nome: "Arara Azul",
            cor: "Azul e amarelo",
            especie: "Anodorhynchus hyacinthinus",
            habitat: "Florestas tropicais e cerrados",
            alimentacao: "Frutas, sementes e castanhas"
        },
        {
            nome: "Tucano",
            cor: "Preto com bico laranja e amarelo",
            especie: "Ramphastos toco",
            habitat: "Florestas tropicais",
            alimentacao: "Frutas, insetos e pequenos vertebrados"
        },
        {
            nome: "Beija-flor",
            cor: "Verde metálico",
            especie: "Trochilidae",
            habitat: "Jardins e florestas",
            alimentacao: "Néctar e pequenos insetos"
        },
        {
            nome: "Coruja-buraqueira",
            cor: "Marrom com manchas brancas",
            especie: "Athene cunicularia",
            habitat: "Campos e áreas abertas",
            alimentacao: "Insetos e pequenos roedores"
        },
        {
            nome: "Pardal",
            cor: "Marrom e cinza",
            especie: "Passer domesticus",
            habitat: "Áreas urbanas e rurais",
            alimentacao: "Sementes e restos alimentares"
        },
        {
            nome: "Flamingo",
            cor: "Rosa",
            especie: "Phoenicopterus roseus",
            habitat: "Lagos e lagoas salinas",
            alimentacao: "Algas e pequenos crustáceos"
        },
        {
            nome: "Águia",
            cor: "Marrom escuro",
            especie: "Aquila chrysaetos",
            habitat: "Montanhas e campos abertos",
            alimentacao: "Pequenos mamíferos e aves"
        },
        {
            nome: "Canário",
            cor: "Amarelo",
            especie: "Serinus canaria",
            habitat: "Ilhas e áreas arborizadas",
            alimentacao: "Sementes"
        },
        {
            nome: "Pinguim",
            cor: "Preto e branco",
            especie: "Aptenodytes forsteri",
            habitat: "Regiões polares",
            alimentacao: "Peixes e krill"
        },
        {
            nome: "Garça-branca",
            cor: "Branca",
            especie: "Ardea alba",
            habitat: "Áreas alagadas e margens de rios",
            alimentacao: "Peixes e anfíbios"
        },
        {
            nome: "Papagaio",
            cor: "Verde",
            especie: "Amazona aestiva",
            habitat: "Florestas tropicais",
            alimentacao: "Frutas e sementes"
        },
        {
            nome: "Falcão-peregrino",
            cor: "Cinza e branco",
            especie: "Falco peregrinus",
            habitat: "Montanhas e áreas urbanas",
            alimentacao: "Outras aves"
        },
        {
            nome: "João-de-barro",
            cor: "Marrom avermelhado",
            especie: "Furnarius rufus",
            habitat: "Campos e áreas urbanas",
            alimentacao: "Insetos"
        },
        {
            nome: "Sabiá-laranjeira",
            cor: "Marrom e laranja",
            especie: "Turdus rufiventris",
            habitat: "Jardins e florestas",
            alimentacao: "Frutas e insetos"
        },
        {
            nome: "Urubu",
            cor: "Preto",
            especie: "Coragyps atratus",
            habitat: "Áreas abertas e urbanas",
            alimentacao: "Carcaças"
        },
        {
            nome: "Maritaca",
            cor: "Verde",
            especie: "Psittacara leucophthalmus",
            habitat: "Florestas e áreas urbanas",
            alimentacao: "Frutas e sementes"
        },
        {
            nome: "Gavião-carijó",
            cor: "Cinza e marrom",
            especie: "Rupornis magnirostris",
            habitat: "Campos e florestas",
            alimentacao: "Pequenos animais"
        },
        {
            nome: "Andorinha",
            cor: "Azul escuro e branco",
            especie: "Hirundo rustica",
            habitat: "Áreas abertas",
            alimentacao: "Insetos"
        },
        {
            nome: "Pica-pau",
            cor: "Preto, branco e vermelho",
            especie: "Colaptes campestris",
            habitat: "Florestas e campos",
            alimentacao: "Insetos"
        },
        {
            nome: "Gaivota",
            cor: "Branca e cinza",
            especie: "Larus dominicanus",
            habitat: "Regiões costeiras",
            alimentacao: "Peixes e restos"
        },
        {
            nome: "Albatroz",
            cor: "Branco e preto",
            especie: "Diomedea exulans",
            habitat: "Oceanos",
            alimentacao: "Peixes e lulas"
        },
        {
            nome: "Pelicano",
            cor: "Branco e cinza",
            especie: "Pelecanus occidentalis",
            habitat: "Regiões costeiras",
            alimentacao: "Peixes"
        },
        {
            nome: "Cacatua",
            cor: "Branca",
            especie: "Cacatua galerita",
            habitat: "Florestas e savanas",
            alimentacao: "Sementes e frutas"
        },
        {
            nome: "Ema",
            cor: "Cinza e marrom",
            especie: "Rhea americana",
            habitat: "Campos e cerrados",
            alimentacao: "Plantas e insetos"
        },
        {
            nome: "Avestruz",
            cor: "Preto e branco",
            especie: "Struthio camelus",
            habitat: "Savanas",
            alimentacao: "Plantas e sementes"
        },
        {
            nome: "Pato",
            cor: "Variada",
            especie: "Anas platyrhynchos",
            habitat: "Lagos e rios",
            alimentacao: "Plantas aquáticas e insetos"
        },
        {
            nome: "Cisne",
            cor: "Branco",
            especie: "Cygnus olor",
            habitat: "Lagos",
            alimentacao: "Plantas aquáticas"
        },
        {
            nome: "Ganso",
            cor: "Branco e cinza",
            especie: "Anser anser",
            habitat: "Lagos e campos",
            alimentacao: "Gramas e plantas"
        },
        {
            nome: "Codorna",
            cor: "Marrom",
            especie: "Coturnix coturnix",
            habitat: "Campos",
            alimentacao: "Sementes e insetos"
        },
        {
            nome: "Perdiz",
            cor: "Marrom e cinza",
            especie: "Rhynchotus rufescens",
            habitat: "Campos",
            alimentacao: "Sementes e insetos"
        },
        {
            nome: "Cardeal",
            cor: "Vermelho",
            especie: "Paroaria coronata",
            habitat: "Áreas arborizadas",
            alimentacao: "Sementes"
        },
        {
            nome: "Sanhaço",
            cor: "Azul e cinza",
            especie: "Thraupis sayaca",
            habitat: "Jardins e florestas",
            alimentacao: "Frutas"
        },
        {
            nome: "Rouxinol",
            cor: "Marrom",
            especie: "Luscinia megarhynchos",
            habitat: "Florestas",
            alimentacao: "Insetos"
        },
        {
            nome: "Tico-tico",
            cor: "Marrom e cinza",
            especie: "Zonotrichia capensis",
            habitat: "Campos e jardins",
            alimentacao: "Sementes"
        },
        {
            nome: "Gralha-azul",
            cor: "Azul",
            especie: "Cyanocorax caeruleus",
            habitat: "Florestas de araucária",
            alimentacao: "Sementes e insetos"
        },
        {
            nome: "Tangará",
            cor: "Colorido",
            especie: "Chiroxiphia caudata",
            habitat: "Florestas tropicais",
            alimentacao: "Frutas"
        },
        {
            nome: "Mutum",
            cor: "Preto",
            especie: "Crax fasciolata",
            habitat: "Florestas",
            alimentacao: "Frutas e sementes"
        },
        {
            nome: "Aracuã",
            cor: "Marrom",
            especie: "Ortalis guttata",
            habitat: "Florestas",
            alimentacao: "Frutas e folhas"
        },
        {
            nome: "Uirapuru",
            cor: "Marrom",
            especie: "Cyphorhinus arada",
            habitat: "Florestas amazônicas",
            alimentacao: "Insetos"
        },
        {
            nome: "Saíra-sete-cores",
            cor: "Multicolorida",
            especie: "Tangara seledon",
            habitat: "Florestas tropicais",
            alimentacao: "Frutas e insetos"
        }
    ]

    return (
        <div>
            <h1>Listagem de aves bonitas</h1>

            <hr/>

            {
                listaAves.map(
                    item => <p>{item.nome}, da espécie {item.especie}, vive em {item.habitat} e se alimementa de {item.alimentacao}.</p>
                )
            }


        </div>
    );
}

export default Listagem;


