// Definieer een kaartendeck
const deck = [
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
];

// Functie om een willekeurige kaart uit het dek te trekken
function drawCard() {
    const index = Math.floor(Math.random() * deck.length);
    const card = deck.splice(index, 1)[0];
    return card;
}

// Functie om de waarde van een kaart te berekenen
function cardValue(card) {
    if (card === 'A') return 11; // Aas kan 11 of 1 zijn
    if (['K', 'Q', 'J'].includes(card)) return 10; // Koning, koningin en boer zijn 10
    return parseInt(card);
}

// Initaliseer de spelers en hun scores
let playerHand = [];
let dealerHand = [];
let playerScore = 0;
let dealerScore = 0;

// Verwijzingen naar HTML-elementen
const playerCardsElement = document.getElementById('player-cards');
const dealerCardsElement = document.getElementById('dealer-cards');
const playerScoreElement = document.getElementById('player-score');
const dealerScoreElement = document.getElementById('dealer-score');
const dealButton = document.getElementById('deal-button');
const hitButton = document.getElementById('hit-button');
const standButton = document.getElementById('stand-button');

// Functie om het spel te starten
function startGame() {
    // Reset het kaartendeck en handen
    deck.splice(0, deck.length);
    deck.push(
        '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
        '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
        '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
        '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
    );
    playerHand = [];
    dealerHand = [];
    playerScore = 0;
    dealerScore = 0;

    // Wis de kaarten op het scherm
    playerCardsElement.innerHTML = '';
    dealerCardsElement.innerHTML = '';
    playerScoreElement.textContent = 'Score: 0';
    dealerScoreElement.textContent = 'Score: 0';

    // Deel de eerste twee kaarten aan de speler en dealer
    for (let i = 0; i < 2; i++) {
        playerHand.push(drawCard());
        dealerHand.push(drawCard());
    }

    // Bereken de scores en update het scherm
    playerScore = calculateScore(playerHand);
    dealerScore = calculateScore(dealerHand);
    playerScoreElement.textContent = `Score: ${playerScore}`;
    dealerScoreElement.textContent = `Score: ${dealerScore}`;

    // Toon de kaarten op het scherm
    renderCards(playerHand, playerCardsElement);
    renderCards([dealerHand[0], 'back'], dealerCardsElement);

    // Schakel de knoppen in/uit
    dealButton.disabled = true;
    hitButton.disabled = false;
    standButton.disabled = false;
}

// Functie om kaarten op het scherm te tonen
function renderCards(hand, targetElement) {
    hand.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = card;
        targetElement.appendChild(cardElement);
    });
}

// Functie om de score van een hand te berekenen
function calculateScore(hand) {
    let score = 0;
    let aceCount = 0;

    for (const card of hand) {
        const value = cardValue(card);
        score += value;
        if (card === 'A') {
            aceCount++;
        }
    }

    // Als er azen zijn en de score te hoog is, verminder dan de waarde van azen
    while (aceCount > 0 && score > 21) {
        score -= 10;
        aceCount--;
    }

    return score;
}

// Functie om een kaart aan de speler toe te voegen
function hit() {
    playerHand.push(drawCard());
    playerScore = calculateScore(playerHand);
    playerScoreElement.textContent = `Score: ${playerScore}`;
    renderCards([playerHand[playerHand.length - 1]], playerCardsElement);

    // Controleer of de speler heeft verloren
    if (playerScore > 21) {
        endGame(false);
    }
}

// Functie om het spel te beëindigen
function endGame(playerWins) {
    hitButton.disabled = true;
    standButton.disabled = true;
    dealButton.disabled = false;

    // Onthul de tweede kaart van de dealer
    dealerCardsElement.removeChild(dealerCardsElement.lastChild);
    renderCards(dealerHand, dealerCardsElement);
    dealerScoreElement.textContent = `Score: ${dealerScore}`;

    // Bepaal de winnaar en toon een bericht
    setTimeout(function () {
        if (playerWins || (dealerScore > 21 && playerScore <= 21) || (playerScore <= 21 && playerScore > dealerScore)) {

            alert('Gefeliciteerd! Je hebt gewonnen!');
        } else if (playerScore === dealerScore) {
            alert('Het is gelijkspel!');
        } else {
            alert('De dealer heeft gewonnen.');
        }
    }, 1000);
}

// Deel-knop
dealButton.addEventListener('click', startGame);

// Hit-knop
hitButton.addEventListener('click', () => {
    hit();
});

// Stand-knop
standButton.addEventListener('click', () => {
    while (dealerScore < 17) {

        dealerHand.push(drawCard());

        dealerScore = calculateScore(dealerHand);
        renderCards([dealerHand[dealerHand.length - 1]], dealerCardsElement);
    }
    endGame(true);
});

// Start het spel bij het laden van de pagina
startGame();

