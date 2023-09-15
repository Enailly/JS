//atribui o valor da tag h1 para a variável titulo
let titulo = document.querySelector("h1");
//mostra no console do navegador a variável título
console.log(titulo);
//modifica o valor do título para a frase "Fica grandão birlllll"-
titulo.textContent = "Professor caio escreveu algo aqui";
//----------aqui vamos mexer na tabela de imc------
//---------- armazena no ARRAY paciente as informações de toos os pacientes
let pacientes = document.querySelectorAll(".paciente");
//console.log(paciente); 
//loop for para percorrer o ARRAY


for(let i = 0; i < pacientes.length; i++){
    let paciente = pacientes[i];
    console.log(paciente);

// armazena somente as colunas de peso e altura
let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");
//armazena somente as informações de texto de peso e altura 
let peso = tdPeso.textContent;
let altura = tdAltura.textContent; 

//acessa a coluna imc e altera o valor para o resultado do cálculo
let tdImc = paciente.querySelector(".info-imc");

//validação dos dados
let pesoEhValido = true;
let alturaEhValido = true; 


if(peso < 0 || peso > 1000){
    console.log("peso inválido!!!1!");
    tdImc.textContent = "peso inválido!!!1!";
    pesoEhValido = false; 
}
if(peso < 0 || altura > 3){
    console.log("altura inválido!!!1!");
    tdAltura.textContent = "altura inválido!!!1!";
    alturaEhValido = false;
}

if(pesoEhValido === true && alturaEhValido === true){
    //realiza o calculo do imc
    let imc = peso / (altura * altura);
    console.log(imc);
    tdImc.textContent = imc.toFixed(2);
} else {
    //informa que os valores informados para peso e/ou altura estão incorretos 
    tdImc.textContent = "Peso e/ou altura inválidos!";
}
}

