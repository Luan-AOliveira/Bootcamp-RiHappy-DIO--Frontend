/* Exercicio - Cálculo de Valor de uma Viagem
const valorCombustivel = 5.79;

const mediaCombustivel = 12;

const distencia = 1580;

const combustivelConsumido = distencia / mediaCombustivel;
const valorGasto = combustivelConsumido * valorCombustivel;

console.log(valorGasto.toFixed(2));
*/



//Exercicio - Incremente do Calculo de Valor de uma Viagem
const valorGasolina = 6.66;

const valorEtanol = 5.79;

const tipoCombustivel = 'Gasolina';

const mediaCombustivel = 10;

const distenciaKM = 100;

const combustivelConsumido = distenciaKM / mediaCombustivel;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = combustivelConsumido * valorEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = combustivelConsumido * valorGasolina;
    console.log(valorGasto.toFixed(2));
}




//Exercicio - Media de Notas
const nota1 = 5;
const nota2 = 8;
const nota3 = 7;

const calculaMedia = (nota1 + nota2 + nota3) / 3;
console.log(calculaMedia.toFixed(1));

if (calculaMedia === 5) {
    console.log("Reprovado");
} else if (calculaMedia >= 5 && calculaMedia <= 7) {
    console.log("Recuperação");
} else {
    console.log("Passou de Semestre");
}



//Exercicio - Calculo do IMC
const peso = 90;
const altura = 1.80;

const IMS = peso / Math.pow(altura, 2);
console.log(IMS.toFixed(2));

if (IMS < 18.5) {
    console.log("Abaixo do Peso");
} else if (IMS >= 18.5 && IMS <= 25) {
    console.log("Peso Normal");
} else if (IMS >= 25 && IMS <= 30) {
    console.log("Acima do Peso");
} else if (IMS >= 30 && IMS <= 40) {
    console.log("Obeso");
} else if (IMS > 40) {
    console.log("Obesidade Grave");
}



//Exercicio Vaor Pago de um Produto
const precoProduto = 100;
const formaPagamento = '3x'

if (formaPagamento === 'Debito') {
    console.log("0 valor do desconto em Debito ficara: " + (precoProduto - (precoProduto * 0.10)))
} else if (formaPagamento === 'Pix') {
    console.log("0 valor do desconto no Pix ficara: " + (precoProduto - (precoProduto * 0.15)))
} else if (formaPagamento === '2x') {
    console.log("0 valor em 2x ficara: " + precoProduto)
} else {
    console.log("0 valor em mais de 2x com juros ficara: " + (precoProduto + (precoProduto * 0.10)))
}



//Function - Função
function sayMyName(name) {
    return 'Your name is: ' + name;
}

sayMyName('Luan');
sayMyName('Mine');
//

function quadrado(valor) {
    return valor * valor;
}

quadrado(10);
console.log(quadrado(10) + quadrado(10));

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);
//

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = valor * (percentualJuros / 100);
    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));
//


//Organizar Funções com Exemplo pratico - Exercicio feito anteriormente do IMC
function calcularIMC(pesos, alturas) {
    return pesos / Math.pow(alturas, 2);
}

function classificarIMC(IMC) {
    if (IMC < 18.5) {
        return "Abaixo do Peso";
    } else if (IMC >= 18.5 && IMC <= 25) {
        return "Peso Normal";
    } else if (IMC > 25 && IMC <= 30) {
        return "Acima do Peso";
    } else if (IMC > 30 && IMC <= 40) {
        return "Obeso";
    } else if (IMC > 40) {
        return "Obesidade Grave";
    }
}

function main() {
    const pesos = 90;
    const alturas = 1.80;

    const IMC = calcularIMC(pesos, alturas);

    console.log('IMC: ' + IMC.toFixed(2));
    console.log(classificarIMC(IMC));
}

main();



//Exercicio - Função Verificaridade 
//Exercicio - Invocando Função dentro de Outra Função
function verificarIdade(idade) {

    if (idade < 18) {
        console.log(sayMyName('Luan') + " é Menor de idade");
    } else if (idade >= 18) {
        console.log("Maior de idade");
    }
}

verificarIdade(5);



//Exercicio - Funções para calcular preço
function calcularPreco(precoProduto, formaPagamento) {
    if (formaPagamento === 'Debito') {
        return precoProduto - (precoProduto * 0.10);
    } else if (formaPagamento === 'Pix') {
        return precoProduto - (precoProduto * 0.15);
    } else if (formaPagamento === '2x') {
        return precoProduto;
    } else {
        return precoProduto + (precoProduto * 0.10);
    }
}

function exibirPreco(precoProduto, formaPagamento) {
    const precoFinal = calcularPreco(precoProduto, formaPagamento);
    console.log('O valor com a forma de pagamento ' + (formaPagamento) + ' será: ' + (precoFinal.toFixed(2)));
}

const preco = 100;
const pagamento = '3x';
exibirPreco(preco, pagamento);



//Orientação a Objetos
//Classe - Definição
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
//Instancia - Objeto
const vitor = new Pessoa('Vitor', 25);
console.log(vitor);
vitor.descrever();

const Renan = new Pessoa('Renan', 25);


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

compararPessoas(vitor, Renan);

//Exercicio - Crie uma classe para representar carros
class Carro {
    marca;
    cor;
    gastoCombustivel;

    constructor(marca, cor, gastoCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustivel = gastoCombustivel;
    }

    calcularGastoDePercurso(distanciaEmKM, precoCombustivel) {
        return distanciaEmKM * this.gastoCombustivel * precoCombustivel;
    }

    descrever() {
        console.log(`A marca do carro é ${this.marca} a cor é ${this.cor} e o consumo por KM é ${this.gastoCombustivel}`);
    }
}

const uno = new Carro('Fiat', 'Prata', 1 / 12);
console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new Carro('Fiat', 'Preto', 1 / 5);
console.log(palio.calcularGastoDePercurso(50, 5));


//Exercicio IMC com Classe e Objeto
class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (this.altura ** 2);
    }

    classificarIMC() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 25) {
            return "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            return "Sobrepeso";
        } else if (imc >= 30 && imc < 40) {
            return "Obesidade";
        } else {
            return "Obesidade grave";
        }
    }
}


const Luan = new Pessoa('Luan', 90, 1.80);

console.log(`${Luan.nome} tem um IMC de ${Luan.calcularIMC().toFixed(2)} e está classificado como: ${Luan.classificarIMC()}`);



//Array - Lista
const nome = 'Luan Alves Oliveira'

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}


//Exercicio - For Lista / Media notas - Aprendendo a debugar
const notas = [];

notas.push(5);
notas.push(10);
notas.push(10);
notas.push(8);
notas.push(8);
notas.push(8);
notas.push(6);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i]
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media.toFixed(2));


//Exercicio - For Lista / Dado um número imprima a sua Tabuada - Aprendendo a debugar
const numero = 5;

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    console.log(`${numero} x ${numeros[i]} = ${numero * numeros[i]}`);
}


//Exercicio - For Lista / Percorra a lista e imprima apenas os números pares encontrados: - Aprendendo a debugar
const numbers = [3, 7, 12, 25, 8, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(`Número par encontrado: ${numbers[i]}`);
    }
}