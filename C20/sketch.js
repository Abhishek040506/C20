var fixed,moving;


function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 80);
  moving = createSprite(100, 250, 80, 50);

  fixed.shapeColor = "red";
  moving.shapeColor = "blue";
  moving.velocityX = 3;
}

function draw() {
  background("lightblue"); 
  
 // moving.x = mouseX;
 // moving.y = mouseY;

  console.log(fixed.x-moving.x)


  //collision detection algorithm
  /*
  if(fixed.x-moving.x <= fixed.width/2 + moving.width/2 &&
    moving.x-fixed.x <= fixed.width/2 + moving.width/2 &&
   fixed.y-moving.y  <= fixed.height/2 + moving.height/2 &&
   moving.y-fixed.y  <= fixed.height/2 + moving.height/2){
    fixed.shapeColor = "black";
  moving.shapeColor = "black";
  }
  else
  {
    fixed.shapeColor = "red";
  moving.shapeColor = "blue";
  }
*/

if(fixed.x-moving.x <= fixed.width/2 + moving.width/2 &&
  moving.x-fixed.x <= fixed.width/2 + moving.width/2 &&
 fixed.y-moving.y  <= fixed.height/2 + moving.height/2 &&
 moving.y-fixed.y  <= fixed.height/2 + moving.height/2)
{
    
    if(fixed.x-moving.x <= fixed.width/2 + moving.width/2 &&
      moving.x-fixed.x <= fixed.width/2 + moving.width/2) {
    moving.velocityX=-(moving.velocityX)
    fixed.velocityX=-(fixed.velocityX)
      }
    if(fixed.y-moving.y  <= fixed.height/2 + moving.height/2&& 
    moving.y-fixed.y  <= fixed.height/2 + moving.height/2){
      moving.velocitY=-(moving.velocityY)
      moving.velocityY=-(moving.velocityY)

    }

}




  drawSprites();
}
