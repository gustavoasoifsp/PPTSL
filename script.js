const playerScoreElem = document.getElementById('player-score');
const computerScoreElem = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');
const playerChoicesContainer = document.getElementById('player-choices');
const rulesContainer = document.querySelector('.rules-grid');
const ruleTooltip = document.getElementById('rules-tooltip');

// Escolhas
const elements = {
    pedra: {
        emoji: '🪨',
        description: 'PEDRA: Esmaga Caranguejo, quebra Garrafa e rasga a Rede.',
        winsAgainst: ['rede', 'garrafa', 'caranguejo']
    },
    alga: {
        emoji: '🌿',
        description: 'ALGA: Cobre a Pedra, enrosca na Rede e no Saco.',
        winsAgainst: ['saco', 'pedra', 'rede']
    },
    caranguejo: {
        emoji: '🦀',
        description: 'CARANGUEJO: Corta a Alga, fura o Saco e belisca o Peixe.',
        winsAgainst: ['peixe', 'alga', 'saco']
    },
    peixe: {
        emoji: '🐠',
        description: 'PEIXE: Come a Alga, desvia da Pedra e fura o Saco.',
        winsAgainst: ['alga', 'saco', 'pedra']
    },
    saco: {
        emoji: '🛍️',
        description: 'SACO: Cobre a Pedra, enrosca na Rede e na Garrafa.',
        winsAgainst: ['pedra', 'rede', 'garrafa']
    },
    garrafa: {
        emoji: '🍾',
        description: 'GARRAFA: Esmaga o Peixe, quebra o Caranguejo e corta a Alga.',
        winsAgainst: ['caranguejo', 'peixe', 'alga']
    },
    rede: {
        emoji: '🕸️',
        description: 'REDE: Captura o Peixe, o Caranguejo e a Garrafa.',
        winsAgainst: ['garrafa', 'caranguejo', 'peixe']
    }
};

const choices = Object.keys(elements);

// Zera o placar
let playerScore = 0;
let computerScore = 0;

// Pega os cliques nos botões de escolha
playerChoicesContainer.addEventListener('click', (event) => {
    const playerChoice = event.target.closest('button')?.id;
    if (playerChoice) {
        playGame(playerChoice);
    }
});

function playGame(playerChoice) {
    // Computador faz uma escolha
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    resultText.textContent = `Você jogou ${elements[playerChoice].emoji}, o oponente jogou ${elements[computerChoice].emoji}.`;

    // Atraso pra dar suspense
    setTimeout(() => {
        if (playerChoice === computerChoice) {
            resultText.textContent = "Empate!";
        } else if (elements[playerChoice].winsAgainst.includes(computerChoice)) {
            playerScore++;
            playerScoreElem.textContent = playerScore;
            resultText.textContent = "Vitória!";
        } else {
            computerScore++;
            computerScoreElem.textContent = computerScore;
            resultText.textContent = "Derrota!";
        }
    }, 700);
}

// Vê quando o mouse passa por cima dos ícones de regras
rulesContainer.addEventListener('mouseover', (event) => {
    const choice = event.target.dataset.choice;
    if (choice) {
        ruleTooltip.textContent = elements[choice].description;
        ruleTooltip.style.opacity = '1';
    }
});

// Vê quando o mouse sai da área das regras
rulesContainer.addEventListener('mouseout', () => {
    ruleTooltip.textContent = 'Passe o mouse sobre um ícone para ver o que ele faz.';
    ruleTooltip.style.opacity = '0.7';
});