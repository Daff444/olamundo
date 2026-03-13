'use client'
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
const supabase = createClient('https://hwcapwfvetdinljskqqu.supabase.co', 'sb_publishable_PE4Ib4AkCPdmzA0_4amQBw_96TJakC-')


function Livros() {

    const [livros, setLivros] = useState([])
    const [titulo, setTitulo] = useState("")
    const [autor, setAutor] = useState("")
    const [editora, setEditora] = useState("")
    const [preco, setPreco] = useState("")
    const [descricao, setDescricao] = useState("")
    const [idioma, setIdioma] = useState("")
    const [categoria, setCategoria] = useState("")
    const [paginas, setPaginas] = useState("")
    const [acabamento, setAcabamento] = useState("")
    const [origem, setOrigem] = useState("")



    async function buscar() {

        const { data, error } = await supabase
            .from('livros')
            .select()
        console.log(data)
        setLivros(data)

    };

    async function salvar() {
        const objeto = {
            titulo: titulo,
            autor: autor,
            editora: editora,
            preco: preco.replaceAll(",", "."),
            //.replaceAll("R$", "")
            descricao: descricao,
            idioma: idioma,
            categoria: categoria,
            numero_paginas: paginas,
            acabamento: acabamento,
            origem: origem
        }

        const { error } = await supabase
            .from('livros')
            .insert(objeto)

        console.log(error)

        if (error == null) {
            alert("Livro cadastrado com sucesso!")
            setTitulo("")
            setAutor("")
            setPreco("")
            setEditora("")
            setDescricao("")
            setIdioma("")
            setCategoria("")
            setPaginas("")
            setAcabamento("")
            setOrigem("")
        } else {
            alert("Dados inválidos, verifique os campos e tente novamente...")
        }

    }

    // useEffect é chamado apenas ao iniciar a página, uma vez

    useEffect(() => {
        buscar()
    }, []);

    return (
        <div>
            <h1> Dados dos livros que vieram do banco </h1>
            <hr />

            <p>Digite o título do livro:</p>
            <input value={titulo} onChange={e => setTitulo(e.target.value)} />
            <br />
            <p>Digite o autor do livro:</p>
            <input value={autor} onChange={e => setAutor(e.target.value)} />
            <br />
            <p>Digite o preço do livro:</p>
            <input value={preco} onChange={e => setPreco(e.target.value)} />
            <br />
            <p>Digite a editora do livro:</p>
            <input value={editora} onChange={e => setEditora(e.target.value)} />
            <br />
            <p>Digite a descrição livro:</p>
            <input value={descricao} onChange={e => setDescricao(e.target.value)} />
            <br />
            <p>Digite o idioma do livro:</p>
            <input value={idioma} onChange={e => setIdioma(e.target.value)} />
            <br />
            <p>Digite a categoria do livro:</p>
            <input value={categoria} onChange={e => setCategoria(e.target.value)} />
            <br />
            <p>Digite o número de páginas do livro:</p>
            <input value={paginas} onChange={e => setPaginas(e.target.value)} />
            <br />
            <p>Digite o acabamento do livro:</p>
            <input value={acabamento} onChange={e => setAcabamento(e.target.value)} />
            <br />
            <p>Digite a origem do livro:</p>
            <input value={origem} onChange={e => setOrigem(e.target.value)} />
            <br /><br />

            <button onClick={salvar} >Salvar livros</button>
            <br /><br />
            <hr />


            {/* <button onClick={buscar} >Carregar livros</button> */}

            <ul>
                {

                    livros.length == 0 ?
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        :
                        livros.map(
                            item => <li>Título: {item.titulo} escrito por: {item.autor} por R${item.preco}</li>
                        )
                }
            </ul>

        </div>
    );
}

export default Livros;

