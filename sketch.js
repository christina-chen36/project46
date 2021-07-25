/*/
gamestate0 = game running
gamestate1 = game over
gamestate2 = win
/*/


var gameState = 0;
var player;
var finalSquare;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8;
var invisWall1, invisWall2, invisWall3, invisWall4;
var enemy1, enemy2, enemy3;

function preload() {


}

function setup() {
    createCanvas(800,700)

    wall1 = createSprite(100,100,200,10)
    wall1.shapeColor = "#e0e0de"
    wall2 = createSprite(600,100,500,10)
    wall2.shapeColor = "#e0e0de"
    invisWall1 = createSprite(400,100,800,10)
    invisWall1.visible = false;

    wall3 = createSprite(100,250,500,10)
    wall3.shapeColor = "#e0e0de"
    wall4 = createSprite(800,250,500,10)
    wall4.shapeColor = "#e0e0de"
    invisWall2 = createSprite(400,250,800,10)
    invisWall2.visible = false;

    wall5 = createSprite(50,400,200,10)
    wall5.shapeColor = "#e0e0de"
    wall6 = createSprite(600,400,500,10)
    wall6.shapeColor = "#e0e0de"
    invisWall3 = createSprite(400,400,800,10)
    invisWall3.visible = false;

    wall7 = createSprite(800,550,200,10)
    wall7.shapeColor = "#e0e0de"
    wall8 = createSprite(250,550,600,10)
    wall8.shapeColor = "#e0e0de"
    invisWall4 = createSprite(400,550,800,10)
    invisWall4.visible = false;


    player = createSprite(50,50,30,30)
    player.shapeColor = "green"

    enemy1 = createSprite(50,175,40,40)
    enemy1.shapeColor = "#ff3b3b"
    enemy1.velocityX=Math.round(random(6,8))
    enemy1.velocityY=Math.round(random(-8,8))

    enemy2 = createSprite(750,325,40,40)
    enemy2.shapeColor = "#ff3b3b"
    enemy2.velocityX=Math.round(random(6,8))
    enemy2.velocityY=Math.round(random(-8,8))

    enemy3 = createSprite(50,475,40,40)
    enemy3.shapeColor = "#ff3b3b"
    enemy3.velocityX=Math.round(random(6,8))
    enemy3.velocityY=Math.round(random(-8,8))

    finalSquare = createSprite(50,628,100,146)
    finalSquare.shapeColor = "#fff091"
    
    edges = createEdgeSprites()

}

function draw() {
    background("black")
    drawSprites()

    if (gameState == 0) {
        player.bounce(wall1)
        player.bounce(wall2)
        player.bounce(wall3)
        player.bounce(wall4)
        player.bounce(wall5)
        player.bounce(wall6)
        player.bounce(wall7)
        player.bounce(wall8)
    
        enemy1.bounceOff(invisWall1)
        enemy1.bounceOff(invisWall2)
    
        enemy2.bounceOff(invisWall2)
        enemy2.bounceOff(invisWall3)
    
        enemy3.bounceOff(invisWall3)
        enemy3.bounceOff(invisWall4)
    
    
        enemy1.bounceOff(edges)
        enemy2.bounceOff(edges)
        enemy3.bounceOff(edges)
    
        player.bounceOff(edges)
       
        if (enemy1.isTouching(player)||enemy2.isTouching(player)||enemy3.isTouching(player)) {
            gameState = 1
        }
        if (player.isTouching(finalSquare)) {
            gameState = 2
        }
    
    
        if (keyDown("UP_ARROW")) {
            player.y = player.y - 5
        }
        if (keyDown("DOWN_ARROW")) {
            player.y = player.y + 5
        }
        if (keyDown("LEFT_ARROW")) {
            player.x = player.x - 5
        }
        if (keyDown("RIGHT_ARROW")) {
            player.x = player.x + 5
        }
    }

    if (gameState == 1) {
        enemy1.velocityX=0
        enemy1.velocityY=0
        enemy2.velocityX=0
        enemy2.velocityY=0
        enemy3.velocityX=0
        enemy3.velocityY=0
        textSize(40)
        fill("#9c0000")
        text("Game Over", 300,300)
        textSize(20)
        text("Press ENTER To Restart", 300,330)

        if (keyDown("ENTER")) {
            player.x = 50
            player.y = 50

            enemy1.x = 50
            enemy1. y = 175
            enemy1.velocityX=Math.round(random(6,8))
            enemy1.velocityY=Math.round(random(-8,8))

            enemy2.x = 750
            enemy2.y = 325
            enemy2.velocityX=Math.round(random(6,8))
            enemy2.velocityY=Math.round(random(-8,8))

            enemy3.x = 50
            enemy3.y = 475
            enemy3.velocityX=Math.round(random(6,8))
            enemy3.velocityY=Math.round(random(-8,8))
            
            gameState = 0;
        }
    }

    if (gameState == 2) {
        enemy1.velocityX=0
        enemy1.velocityY=0
        enemy2.velocityX=0
        enemy2.velocityY=0
        enemy3.velocityX=0
        enemy3.velocityY=0
        textSize(40)
        fill("#75ffa5")
        text("You Win", 300,300)
        textSize(20)
        text("Press ENTER To Restart", 300,330)

        
        if (keyDown("ENTER")) {
            player.x = 50
            player.y = 50

            enemy1.x = 50
            enemy1. y = 175
            enemy1.velocityX=Math.round(random(6,8))
            enemy1.velocityY=Math.round(random(-8,8))

            enemy2.x = 750
            enemy2.y = 325
            enemy2.velocityX=Math.round(random(6,8))
            enemy2.velocityY=Math.round(random(-8,8))

            enemy3.x = 50
            enemy3.y = 475
            enemy3.velocityX=Math.round(random(6,8))
            enemy3.velocityY=Math.round(random(-8,8))
            
            gameState = 0;
        }
    }
}