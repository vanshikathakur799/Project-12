var runner, runner_running;
var path,pathImg, boundry_1, boundry_2; 

function preload(){
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(700,700);
  path = createSprite(350,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 2.0;

  runner = createSprite(350,350,15,10);
  runner.addAnimation("run",runner_running);
  runner.scale = 0.2;

  boundry_1 = createSprite(15,350,30,700);
  boundry_1.visible = false;

  boundry_2 = createSprite(685,350,30,700);
  boundry_2.visible = false;
}

function draw() {
  background(220);
  if(path.y > 700){
    path.y = height/2;
  }

  runner.x = World.mouseX;

  runner.collide(boundry_1);
  runner.collide(boundry_2);
drawSprites();
}
