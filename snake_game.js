var snake;
var blocks = 20;
var food;
var score = document.getElementsByClassName('score')[0];

function setup() {
    createCanvas(600, 600);
    frameRate(10);
    pickLocation();
    snake = new Snake();
    textSize(32);

}

function pickLocation() {
    var cols = floor(width / blocks);
    var rows = floor(height / blocks);

    food = createVector(random(floor(cols)), random(floor(rows)));
    food.mult(blocks);

}

function drawScore() {

}

function draw() {
    score.innerHTML = "Score : " + snake.tail.length;
    background(51);
    if (snake.death()) {
        createCanvas(600, 600);
        frameRate(10);
        pickLocation();
        snake = new Snake();
        alert("Has perdido");
    }



    snake.update();
    snake.show();

    if (snake.eat(food)) {
        pickLocation();
    }


    fill(255, 0, 100);
    rect(food.x, food.y, blocks, blocks);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        snake.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        snake.dir(-1, 0);
    }
}