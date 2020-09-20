var bullet,wall,speed,weight;

var thickness;

function setup() {
  createCanvas(1600,1600);
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  speed = random(223,321);
bullet.velocityX = speed;
  weight = random(30,52);

}

function draw() {

 if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage  = speed*weight*speed/(thickness*thickness*thickness)

  if(damage>10){

    wall.shapeColor = color(255,0,0);
  }

  if(damage<10){
    wall.shapeColor = color(0,255,0);
  }


  drawSprites();


 }


function hasCollided(bullet,wall){

    bulletRightEdge = bullet.x + bullet.width
   wallLeftEdge = wall.x

   if(bulletRightEdge>= wall.wallLeftEdge)
   {
     return true
   }
   return false
}















} 
