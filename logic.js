const form = document.getElementById("forms");

const cpfsCadastrados = ["12345678900", "11111111111"];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.getElementById("quintal").value;
    let pet = document.getElementById("pet").value;
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;

    if (nome.length < 3) return alert("Nome curto demais")
    if (idade < 17) return alert("Idade inválida")
    if (moradia == 0) return alert("Selecione o tipo de moradia")
    if (quintal == 0) return alert("Selecione se tem quintal")
    if (pet == 0) return alert("Selecione se já teve pets")
    if (horas == 0) return alert("Selecione quantas horas fica fora de casa")
    if (motivo.length < 10) return alert("Motivo curto demais")

    document.getElementById("enviar").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome" + nome;
    alert("Formulário enviado!");

});