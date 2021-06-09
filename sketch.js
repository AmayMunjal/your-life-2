var gameState = 0
var bg1 
var player
var playerStanding, playerRunning1,playerRunning2,playerLayingDown
var invG1
var invG2
var accidentFlag = 0
car,carImage

function preload(){
  bg1 = loadImage("playerhouse.png")
  playerStanding = loadImage("PlayerStanding.png")
  roadBg = loadImage ("road background.png")
  carImage = loadImage ("car.png")
  playerLayingDown = loadImage("PlayerLayingDown.png")
  

}
function setup(){
  createCanvas(1500,800)
  player = createSprite(740,555,10,10)
  player.addImage(playerStanding)
  player.visible = false
  player.debug = true
  player.setCollider("rectangle",20,10,105,194)
  player.scale =0.8
  
  invG1 = createSprite(730,670,530,10)
  invG2 = createSprite(750,717,1500,10)

  car = createSprite(750,120,10,10)
  car.addImage(carImage)
  car.scale=2
  car.visible=false
  
}


function draw() {
  background("red")
  if (gameState === 0){
    background("black")
    textSize(20)
    fill("white")
    textFont("Times New Roman")
    text("Make Your Own Decisions  ",600,220)
    text("But Be Careful What You Choose.",575,250)
    text("Press 'Space' To Continue",600,400)
    if (keyDown("space")){
      gameState = 1
    }
  }
  if (gameState === 1){
    background(bg1)
    player.visible = true
    
    if (keyDown("w")){
      player.velocityY = -10
    }
    player.velocityY = player.velocityY+0.8
    player.collide(invG1)
    player.collide(invG2)

    if (keyDown("a")){
      player.x = player.x-5
      player.rotate = 180
    }
    if (keyDown("d")){
      player.x = player.x+5
    }
    if(player.x === 1425){
      gameState = 2
      player.x =142
      player.y = 475
    }

    
  }
  if(gameState === 2){
    background(roadBg)
    
    car.visible=true
    car.velocityY = 3
    player.velocityX=4
    if (player.isTouching(car)){
      accidentFlag = 1
    }
    if (accidentFlag === 1){
      player.velocityX = 0
      player.addImage(playerLayingDown)
    }
  }
  
  drawSprites()
  textSize(20)
  fill("red")
  text(mouseX + "," + mouseY,mouseX,mouseY)
}
