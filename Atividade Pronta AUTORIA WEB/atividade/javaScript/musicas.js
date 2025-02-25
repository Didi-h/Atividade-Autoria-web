document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("musica-form");
    const tabela = document.querySelector("#musica-table tbody");
    const cabecalhos = document.querySelectorAll("#musica-table thead th");

    let ordemAscendente = true;  

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const titulo = document.getElementById("titulo").value;
        const artista = document.getElementById("artista").value;
        const link = document.getElementById("link").value;

        if (titulo && artista && link) {
            adicionarLinha(titulo, artista, link);
            form.reset();
        }
    });

    function adicionarLinha(titulo, artista, link) {
        const newRow = tabela.insertRow();
        newRow.innerHTML = `
            <td>${titulo}</td>
            <td>${artista}</td>
            <td><a href="${link}" target="_blank">Ouvir</a></td>
        `;
    }

    
    cabecalhos.forEach((th, index) => {
        th.addEventListener("click", function () {
            ordenarTabela(index);
        });
    });

    function ordenarTabela(coluna) {
        let linhas = Array.from(tabela.rows);

       
        linhas.sort((a, b) => {
            let dadoA = a.cells[coluna].textContent.trim().toLowerCase();
            let dadoB = b.cells[coluna].textContent.trim().toLowerCase();
            return ordemAscendente ? dadoA.localeCompare(dadoB) : dadoB.localeCompare(dadoA);
        });

        
        ordemAscendente = !ordemAscendente;

        
        linhas.forEach(linha => tabela.appendChild(linha));
    }
});
