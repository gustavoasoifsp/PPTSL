const playerScoreElem = document.getElementById('player-score'); // Placar do Jogador
const computerScoreElem = document.getElementById('computer-score'); // Placar do Computador
const resultText = document.getElementById('result-text'); // Resultado
const playerChoicesContainer = document.getElementById('player-choices'); // Paínel das Jogadas
const computerChoiceDisplay = document.getElementById('computer-choice'); // Quadrado da Jogada do Computador

// Pra resetar
let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const emojis = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️',
    lizard: '🦎',
    spock: '🖖'
};

// Regras do jogo
const rules = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
};

// Pra ver se o jogador clicou em um botão
playerChoicesContainer.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON' ) {    //Por algum motivo o BUTTON tem que ser maiúsculo pra pegar a tag do HTML
        const playerChoice = event.target.id;
        playGame(playerChoice);
    }
});

function playGame(playerChoice) {
    // Escolha do Computador
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Atualiza o quadrado com a escolha do computador
    computerChoiceDisplay.textContent = emojis[computerChoice];
    
    // Escolhe o vencedor e atualiza o texto do resultado
    if (playerChoice == computerChoice) {
        resultText.textContent = "Empate!";
    } else if (rules[playerChoice].includes(computerChoice)) {
        playerScore++;
        playerScoreElem.textContent = playerScore;
        resultText.textContent = "Ganhou!";
    } else {
        computerScore++;
        computerScoreElem.textContent = computerScore;
        resultText.textContent = "Perdeu!";
    }
}