document.writeln('OLÁ, MUNDO!!');

window.alert("OLÁ MUNDO, SEU LINDO!");

document.getElementById('titulo').innerHTML = "Olá mundo JavaScript";

let nomePrompt = window.prompt("Olá Aluno JavaScript, qual o seu nome?");

document.getElementById('nomeAluno').innerHTML =
    "O nome do aluno javascript é: " + nomePrompt;

let resposta = window.confirm("Você gosta de JavaScript?");

if (resposta) {

    document.getElementById('nomeAluno').innerHTML =
        "O aluno gosta de JavaScript";

} else {

    document.getElementById('nomeAluno').innerHTML =
        "O aluno não gosta de JavaScript";

}

Function exibenomealuno () {document.getElementById('inputNomeAluno').value;                                                                                                              

}

document.getElementById("resposta").innerHTML = "O nome do aluno digitado foi: + inputAluno"

document.getElementById("resposta").style.backgroundImage = "linear-Gradient
(to right, red, yellow)";
