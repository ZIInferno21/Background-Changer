var btn_red;
var btn_green;
var box;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

box = createSprite(200,200,400,400);
box.shapeColor = "black";

  btn_red = createButton("RED");
  btn_red.position(100,50);
  
  

  btn_green = createButton("GREEN");
  btn_green.position(300,50);
  

  

}

function draw() {
  background("blue")
 if (keyDown("DOWN")){
  box.shapeColor = "red";
 }
 
 if (keyDown("UP")){
  box.shapeColor = "green";

}
     drawSprites();
  
}








