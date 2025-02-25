document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("cadastro-form");
    const tabela = document.querySelector("#dados-tabela tbody");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        if (nome && email) {
            adicionarLinha(nome, email);
            form.reset();
        }
    });

    function adicionarLinha(nome, email) {
        const linha = document.createElement("tr");
        linha.innerHTML = `<td>${nome}</td><td>${email}</td>`;
        tabela.appendChild(linha);
    }

   
    document.querySelectorAll("tr").forEach((th, index) => {
        th.addEventListener("click", function() {
            ordenarTabela(index);
        });
    });

    function ordenarTabela(coluna) {
        const linhas = Array.from(tabela.querySelectorAll("tr"));
        const ordemCrescente = this.asc = !this.asc;

        linhas.sort((a, b) => {
            const dadoA = a.children[coluna].textContent.trim().toLowerCase();
            const dadoB = b.children[coluna].textContent.trim().toLowerCase();
            return ordemCrescente ? dadoA.localeCompare(dadoB) : dadoB.localeCompare(dadoA);
        });

        linhas.forEach(linha => tabela.appendChild(linha));
    }
});
