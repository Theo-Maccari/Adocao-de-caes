document.getElementById("forms").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("email").value;
    let cidade = document.getElementById("email").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.getElementById("quintal").value;
    let pet = document.getElementById("pet").value;
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;

    if (nome.length < 3) return alert("Nome curto demais")
    if (idade < 17) return alert("Idade inválida")

        document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome" + nome;

});