var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var orangeLeaf,orangeLeafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png")
}

function setup(){

//canvas
createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX
  
  var select_sprites = Math.round(random(1,2))
  if(frameCount % 80 == 0 ){
    if(select_sprites == 1){
      spawnApples()
    }
    else{
      spawnOrangeLeaves()
    }
  }
  
  drawSprites();
}

function spawnApples(){
  apple = createSprite(random(50,350),50,20,20)
  apple.scale = 0.05
  apple.velocityY = 3
  apple.addImage(appleImg)
  apple.lifetime = 350
}

function spawnOrangeLeaves(){
  orangeLeaf = createSprite(random(50,350),50,20,20)
  orangeLeaf.scale = 0.05
  orangeLeaf.velocityY = 3
  orangeLeaf.addImage(orangeLeafImg)
  orangeLeaf.lifetime = 350

}