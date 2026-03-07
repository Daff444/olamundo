export default function AdminiPrest(){
  return(
    <div class="container-fluid">
        <div class="row">

            <div class="col-2 menuLateral">
                <div class="text-center mt-5">
                    <img src="https://placehold.co/40" />
                    <h1 class="fs-5"> Service Hub </h1>
                </div>


                <div class="list-group list-group-flush fs-5">
                    <a href="#" class="list-group-item list-group-item-action">Perfil</a>
                    <a href="#" class="list-group-item list-group-item-action">Descrição</a>
                    <a href="#" class="list-group-item list-group-item-action">Demandas finalizadas</a>
                </div>

                <div class="text-center menuLateralPerfil">
                    <img class="me-2" src="https://placehold.co/40" />
                    <div class="btn-group dropend">
                        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown">Perfil</button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Editar</a></li>
                            <li><a class="dropdown-item" href="#">Sair</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <!-- Conteúdo principal --> */}
            <div class="col-9">
                {/* <!-- Introdução --> */}
                <div class="mt-5">
                    <h2>Painel administrativo</h2>
                    <hr />
                </div>
                {/* <!-- Pesquisa e filtro --> */}
                <div class="row">
                    <div class="col-4">

                        <div class="input-group mb-3">
                            <input class="form-control" placeholder="Pesquisar.."/>
                            <button class="btn btn-outline-secondary">🔎</button>
                        </div>

                    </div>

                    <div class="col-4"></div> {/* Para criar espaço vazio entre as colunas*/}

                    <div class="col-4">
                        <select class="form-select">
                            <option selected disabled> Filtro </option>
                            <option value="1"> Ativo </option>
                            <option value="2"> Finalizado </option>
                        </select>
                    </div>

                </div>
                {/* <!-- Cadastro --> */}
                <div class="text-end my-5">
                    
                    <button class="btn btn-secondary me-3" data-bs-toggle="modal" data-bs-target="#exampleModal" >Todas demandas</button>
                    <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Criar novo portfólio</button>

                </div>

                {/* Tabela */}
                <div>
                    <table class="table table-striped">
                        <thead> 
                            <tr class="table-dark "> 
                                <th scope="col">Nome</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Visualização</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Luiz</th>
                                <td>Problema na porta</td> {/* td: coluna*/}
                                <td> Marceneiro </td>
                                <td><button>❌</button> <button>👁‍🗨</button></td>
                            </tr>
                            <tr>
                                <th scope="row">Rafa</th>
                                <td>Pia quebrada</td>
                                <td> Encanador </td>
                                <td><button>❌</button> <button>👁‍🗨</button></td>

                            </tr>
                            <tr>
                                <th scope="row">Conrado</th>
                                <td>Buraco na parede</td>
                                <td> Pedreiro </td>
                                <td><button>❌</button> <button>👁‍🗨</button></td>

                            </tr>
                            <tr>
                                
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        </div>

      


    </div>
  )
}



