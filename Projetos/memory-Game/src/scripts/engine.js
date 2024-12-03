const emojis = [
    "👺", "👺", "🤖", "🤖", "👻", "👻", "⛷️", "⛷️",
    "🎨", "🎨", "🪭", "🪭", "👑", "👑", "💍", "💍",
];
let openCards = [];

// Embaralhar os emojis
let shuffleEmojis = emojis.sort(() => Math.random() - 0.5);

// Criar os elementos do jogo
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

// Manipular clique nos cartões
function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

// Verificar correspondência
function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];

    // Verificar vitória
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você venceu!");
    }
}