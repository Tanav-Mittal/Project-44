var canvas
var soldier,soldierAni
var scenery,sceneryImg


function preload()
{
  soldierAni = loadAnimation("soldier1.PNG","soldier2.PNG","soldier3.PNG","soldier4.PNG","soldier5.PNG","soldier6.PNG",)
  sceneryImg = loadImage("war background.PNG")
  enemy_IMG = loadImage("Enemy-1.png")
}
  

function setup()
{
  createCanvas(1200,600);

  scenery = createSprite(600,500)
  scenery.addImage(sceneryImg);
  scenery.scale = 2.3
  scenery.velocityX = -4

  soldier = createSprite(100,450,50,50);
  soldier.addAnimation("soldier",soldierAni);
  

  ground = createSprite(600,590,1200,20)
  
  
}

function draw() {
  background(100); 
  
  if(scenery.x <= 0)
  {
    scenery.x = 600;
  }

  if(keyDown("space"))
  {
    soldier.velocityY = -12
  }

  soldier.velocityY = soldier.velocityY + 0.8;
  soldier.collide(ground)
  spawnRobot()
  

  drawSprites();
}

function spawnUfo()
{
 
}


function spawnRobot()
  {
    if(frameCount % 100 === 0)
    {
      var robot = createSprite(1400,300,50,50)
      robot.addImage(enemy_IMG)
      robot.scale = 5
      robot.velocityX = -2

      robot.lifetime = 1000
      
    }
  }
