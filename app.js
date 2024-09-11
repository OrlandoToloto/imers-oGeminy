/**
 * Função para pesquisar e exibir resultados.
 *
 * Esta função busca um elemento HTML com o ID "resultados-pesquisa" e o preenche com os resultados da pesquisa. 
 * Os dados a serem exibidos são esperados em um array de objetos chamado `dados`, onde cada objeto possui as propriedades `titulo`, `descricao` e `link`.
 * A função itera sobre os dados, cria elementos HTML para cada resultado e os adiciona ao elemento "resultados-pesquisa".
 *
 * @example
 * pesquisar(); // Executa a pesquisa e exibe os resultados
 */
function pesquisar() {
    // Obtém o elemento HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);

    if (!campoPesquisa) {
        section.innerHTML = "<p>nada foi encontrado. Escreva o nome de um atleta<p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre os dados e constrói o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //aqui nesse if testa oq foi escrito no campo de pesquisa, seja pelo nome ou parte da descrição escrita
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
        // console.log(dado.titulo.includes(campoPesquisa))

    }
if (!resultados){
resultados = "<p>Nada foi encontrado<p>"
}
    // Atualiza o conteúdo HTML do elemento section
    section.innerHTML = resultados;
}
