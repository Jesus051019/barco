var sea,seaImage;
var ship,shipImage;
function preload(){
seaImage = loadImage("sea.png");
shipImage = loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");
  sea = creatSprite(400,200);
  sea.addImage(seaImage);
  sea.velocityX=-3;
  sea.scale=0.3

  ship = creatSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImage1);
  ship.scale=0.02;

}

function draw() {
  background("blue");
  sea.velocityX = -3; 
  drawSprites();
}