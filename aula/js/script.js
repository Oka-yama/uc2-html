// Função para verificar idade
function verificarIdade() {
    let idade = parseInt(document.getElementById('idade').value);
    if (idade < 18) {
        alert("Para viajar sozinho, é necessário ser maior de idade");
    }
}

function enviarFormulario(event) {
    // a linha abaixo não
    event.preventDefault();
    // capturar os dados do formulário
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let destino = document.getElementById("destino").value;
    let tipodeViagem = document.getElementById("tipo").value;
    let dtIda = document.getElementById("dataIda").value;
    let dtVolta = document.getElementById("dataVolta").value;

    // selecionar uma div para exibir o resultado
    let resultado = document.getElementById("resultado");

    // exibindo na tela
    resultado.innerHTML = `<div class="card p-3 mt-3">
        <h4>Dados do cadastro</h4>
        <h5>Dados pessoais</h5>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>E-mail</strong> ${email}</p>
            <p><strong>Idade</strong> ${idade}</p>
            <p><strong>Contato:</strong> ${telefone}</p>
            <h5>Preferências de Viagem</h5>
            <p><strong>Destino:</strong> ${destino}</p>
            <p><strong>Tipo de destino:</strong> ${tipodeViagem}</p>
            <p><strong>Data da ida:</strong> ${dtIda}</p>
            <p><strong>Data da volta:</strong> ${dtVolta}</p>`;
}