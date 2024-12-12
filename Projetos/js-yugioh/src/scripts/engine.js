const state = {
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points"),
    },

    cardSprits: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },

    fieldCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },

    actions: {
        button: document.getElementById("next-duel"),
    },
}


const playersSides = {
    player1: "player-cards",
    computer: "computer-cards",
}


const pathImages = "./src/assets/icons/";

const cardData = [{
        id: 0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
        WinOf: [1],
        LoseOf: [2],
    },

    {
        id: 1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        WinOf: [2],
        LoseOf: [0],
    },

    {
        id: 2,
        name: "Exodia",
        type: "Scissors",
        img: `${pathImages}exodia.png`,
        WinOf: [0],
        LoseOf: [1],
    },
]


async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}


async function createCardImage(IdCard, fieldSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", IdCard);
    cardImage.classList.add("card");


    if (fieldSide === playersSides.player1) {
        cardImage.addEventListener("mouseover", () => {
            drawSelectCard(IdCard);
        });

        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"));
        });
    }


    return cardImage;
}


async function setCardsField(cardId) {
    await removeAllCardsImages();

    let computerCardId = await getRandomCardId();

    state.fieldCards.player.style.display = "block";
    state.fieldCards.computer.style.display = "block";

    state.cardSprits.avatar.src = ""
    state.cardSprits.name.innerText = ""
    state.cardSprits.type.innerText = ""

    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src = cardData[computerCardId].img;

    let duelResults = await checkDuelResults(cardId, computerCardId);

    await updateScore();
    await drawButton(duelResults);
}


async function drawButton(text) {
    state.actions.button.innerText = text.toUpperCase();
    state.actions.button.style.display = "block";
}


async function updateScore() {
    state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`
}


async function checkDuelResults(playerCardId, computerCardId) {
    let duelResults = "Draw";

    const playerCard = cardData[playerCardId];
    const computerCard = cardData[computerCardId];

    if (playerCard.WinOf.includes(computerCard.id)) {
        duelResults = "win";
        await playAudio(duelResults)
        state.score.playerScore++;
    } else if (playerCard.LoseOf.includes(computerCard.id)) {
        duelResults = "lose";
        await playAudio(duelResults)
        state.score.computerScore++;
    }

    return duelResults;
}



async function removeAllCardsImages() {
    let cards = document.querySelector("#computer-cards");
    let imgElements = cards.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());

    cards = document.querySelector("#player-cards");
    imgElements = cards.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());
}



async function drawSelectCard(index) {
    state.cardSprits.avatar.src = cardData[index].img;
    state.cardSprits.name.innerText = cardData[index].name;
    state.cardSprits.type.innerText = "Attibute : " + cardData[index].type;
}


async function drawCards(cardNumbers, fieldSide) {
    for (let i = 0; i < cardNumbers; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);


        document.getElementById(fieldSide).appendChild(cardImage);
    }
}


async function resetDuel() {
    state.cardSprits.avatar.src = "";
    state.actions.button.style.display = "none";

    state.fieldCards.player.style.display = "none"
    state.fieldCards.computer.style.display = "none"

    init()
}


async function playAudio(status) {
    const audio = new Audio(`./src/assets/audios/${status}.wav`)
    audio.volume = 0.2;
    audio.play();
}


function init() {
    const bgm = document.getElementById("bgm");
    bgm.volume = 0.01;
    bgm.play()

    state.fieldCards.player.style.display = "none";
    state.fieldCards.computer.style.display = "none";

    drawCards(5, playersSides.player1);
    drawCards(5, playersSides.computer);
}

init();