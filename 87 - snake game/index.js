const gameBoard = document.querySelector('#gameBoard')
const context = gameBoard.getContext('2d') // paint on the canvas
const scoreText = document.querySelector('#scoreText')
const resetBtn = document.querySelector('#resetBtn')
const gameWidth = gameBoard.width
const gameHeight = gameBoard.height
const boardBackground = 'white'
const snakeColor = 'lightgreen'
const snakeBorder = 'black'
const foodColor = 'red'
const unitSize = 25
let running = false
let xVelocity = unitSize // how far we move on the x access
let yVelocity = 0
let foodX
let foodY
let score = 0
let snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 }
]

window.addEventListener('keydown', changeDirection)
resetBtn.addEventListener('click', resetGame)

gameStart()

function gameStart() {
    running = true
    scoreText.textContent = score
    createFood()
    drawFood()
    nexttick()
}
function nexttick() {
    if (running) {
        setTimeout(() => {
            clearBoard()
            drawFood()
            movesnake()
            drawsnake()
            checkGameOver()
            nexttick()
        }, 130)
    }
    else {
        displayGameOver()
    }
}
function clearBoard() {
    context.fillStyle = boardBackground
    context.fillRect(0, 0, gameWidth, gameHeight)
}
function createFood() {
    function randomFood(min, max) {
        const randomNumber = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize
        return randomNumber
    }
    foodX = randomFood(0, gameWidth - unitSize)
    foodY = randomFood(0, gameWidth - unitSize)
}
function drawFood() {
    context.fillStyle = foodColor
    context.fillRect(foodX, foodY, unitSize, unitSize)
}
function movesnake() {
    const head = {
        x: snake[0].x + xVelocity,
        y: snake[0].y + yVelocity
    }
    snake.unshift(head)
    // if food is eaten
    if (snake[0].x == foodX && snake[0].y == foodY) {
        score += 1
        scoreText.textContent = score
        createFood()
    } else {
        snake.pop()
    }
}
function drawsnake() {
    context.fillStyle = snakeColor
    context.strokeStyle = snakeBorder
    snake.forEach((snakePart) => {
        context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize)
        context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize)
    })
}
function changeDirection(event) {
    const keyPressed = event.key;
    const LEFT = 'ArrowLeft';
    const UP = 'ArrowUp';
    const RIGHT = 'ArrowRight';
    const DOWN = 'ArrowDown';

    const goingUP = (yVelocity === -unitSize);
    const goingDOWN = (yVelocity === unitSize);
    const goingRIGHT = (xVelocity === unitSize);
    const goingLEFT = (xVelocity === -unitSize);

    switch (keyPressed) {
        case LEFT:
            if (!goingRIGHT) {
                xVelocity = -unitSize;
                yVelocity = 0;
            }
            break;

        case UP:
            if (!goingDOWN) {
                xVelocity = 0;
                yVelocity = -unitSize;
            }
            break;

        case RIGHT:
            if (!goingLEFT) {
                xVelocity = unitSize;
                yVelocity = 0;
            }
            break;

        case DOWN:
            if (!goingUP) {
                xVelocity = 0;
                yVelocity = unitSize;
            }
            break;
    }
}
function checkGameOver() {
    switch (true) {
        case (snake[0].x < 0):
            running = false
            break;

        case (snake[0].x >= gameWidth):
            running = false
            break;

        case (snake[0].y < 0):
            running = false
            break;

        case (snake[0].y >= gameHeight):
            running = false
            break;
    }
    for (let index = 1; index < snake.length; index++) {
        if (snake[index].x == snake[0].x && snake[index].y == snake[0].y) {
            running = false
        }

    }
}
function displayGameOver() {
    context.font = '50px cursive'
    context.fillStyle = 'black'
    context.textAlign = 'center'
    context.fillText('GAME OVER', gameWidth / 2, gameHeight / 2)
    running = false
}
function resetGame() {
    score = 0
    xVelocity = unitSize
    yVelocity = 0
    snake = [
        { x: unitSize * 4, y: 0 },
        { x: unitSize * 3, y: 0 },
        { x: unitSize * 2, y: 0 },
        { x: unitSize, y: 0 }
    ]
    gameStart()
}