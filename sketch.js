balloon,ball_pos,database,position;
bckimg;

function preload(){
bckimg=loadImage("Hot Air Ballon-01.png")
balloon=loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png",
"Hot Air Ballon-04.png")
}
function setup() {
  createCanvas(500,500);
  balloon=createSprite(400, 200, 50, 50);
  ball_pos=database.ref('balloon/position')
  ball_pos.on("value",readposition)
  
}

function draw() {
  background(0);  
  background(bckimg);

  if(keyDown(LEFT_ARROW)){
    changePosition(-10,0);
}
else if(keyDown(RIGHT_ARROW)){
    changePosition(10,0);
}
else if(keyDown(UP_ARROW)){
    changePosition(0,-10);
}
else if(keyDown(DOWN_ARROW)){
    changePosition(0,+10);
}
  drawSprites();
}

function changePosition(x,y){
  database.ref('balloon/position').set({
    'x':position.x+x,
    'y':position.y+y
})
}
function readposition(){
  position=data.val()
    balloon.x=position.x;
    balloon.y=position.y;
}