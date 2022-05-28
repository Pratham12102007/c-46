var jungle,mario,ob1,ob2,ob3,ob4,ob5,ob6,finish;
var invisibleground,edges;

function preload(){
jungleImage=loadImage("bg.png")
marioImage=loadImage("mario.png")
ob1Image=loadImage("ob1.png")
ob2Image=loadImage("ob2.png")
ob3Image=loadImage("ob3.png")
ob4Image=loadImage("ob4.png")
ob5Image=loadImage("ob5.png")
ob6Image=loadImage("ob6.png")
finishImage=loadImage("finish line.png")
}
function setup(){
  createCanvas (windowWidth,windowHeight)
  //jungle=createSprite(600,300,windowWidth,windowHeight)
 // jungle.addImage("jungle",jungleImage)
  //jungle.scale=1
invisibleground=createSprite(width/2,height-40,width,15);
invisibleground.visible=false
 edges=createEdgeSprites();


  mario=createSprite(50,height-75,20,100)
  mario.addImage("mario",marioImage)
  mario.scale=0.6

  ob1=createSprite(400,600,20,20)
  ob1.addImage("ob1",ob1Image)
  ob1.scale=1.4
  ob1.setCollider("rectangle",-3,0,105,10)
  


  ob2=createSprite(560,500,20,20)
  ob2.addImage("ob2",ob2Image)
  ob2.scale=1.4
  ob2.setCollider("rectangle",-25,10,50,40)

  
  
  ob3=createSprite(590,380,20,20)
  ob3.addImage("ob3",ob3Image)
  ob3.scale=1.4
  ob3.setCollider("rectangle",40,10,40,35)


ob4=createSprite(870,410,20,20)
  ob4.addImage("ob4",ob4Image)
  ob4.scale=1.4
  ob4.setCollider("rectangle",-3,0,105,10)
  

  ob5=createSprite(1000,300,20,20)
  ob5.addImage("ob5",ob5Image)
  ob5.scale=1.4
  ob5.setCollider("rectangle",40,16,40,40)
  //ob5.debug=true


  ob6=createSprite(1360,250,20,20)
  ob6.addImage("ob6",ob6Image)
  ob6.scale=1.4
  ob6.setCollider("rectangle",-25,10,50,40)
  //ob6.debug=true

  finish=createSprite(1460,250,20,20)
  finish.addImage("finish",finishImage)
  finish.scale=1.4
  finish.setCollider("rectangle",0,-10,20,300)
  //finish.debug=true








}

function draw(){
  background (jungleImage)
  drawSprites();
 

  mario.collide(invisibleground)
  mario.collide(edges);
  mario.collide(ob1);
  mario.collide(ob2);
mario.collide(ob3);
mario.collide (ob4);
mario.collide(ob5);
mario.collide(ob6); 
  if(keyWentDown("SPACE")){
  mario.velocityY=-11
  }

mario.velocityY=mario.velocityY+0.5

if(keyDown(RIGHT_ARROW)){
  mario.x=mario.x+5
}
if(keyDown(LEFT_ARROW)){
  mario.x=mario.x-5
}

if(mario.isTouching(finish)){
  mario.velocity=0
  stroke("yellow");
    fill("yellow");
    textSize(50);
    text("YOU WONNNNNNNN", 700,400)
}

}
