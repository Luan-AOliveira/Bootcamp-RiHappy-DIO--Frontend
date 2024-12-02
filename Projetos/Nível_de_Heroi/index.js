// Passo 1: Criar as variáveis para armazenar o nome e a experiência (XP) do herói
let nome = prompt("Digite o nome do herói:"); // Solicita o nome do herói
let xp = parseInt(prompt("Digite a quantidade de XP do herói:")); // Solicita a XP e converte para número

// Passo 2: Inicializar a variável que armazenará o nível do herói
let nivel;

// Passo 3: Usar estruturas de decisão (if/else) para determinar o nível com base na XP
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
} else if (xp <= 5000) {
    nivel = "Prata";
} else if (xp <= 7000) {
    nivel = "Ouro";
} else if (xp <= 8000) {
    nivel = "Platina";
} else if (xp <= 9000) {
    nivel = "Ascendente";
} else if (xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Passo 4: Exibir a mensagem final no console
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);