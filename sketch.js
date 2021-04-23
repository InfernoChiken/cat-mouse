var cat, mouse;
var catImg, mouseImg, catImg2, mouseImg2, backImg;

function preload() {
    //load the images here
    backImg = loadImage("images/garden.png");
    mouseImg = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    catImg = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
}

function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(900, 600);
    cat.addAnimation("stand", catImg);
    cat.scale = 0.3;

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouse", mouseImg);
    mouse.scale = 0.3;
}

function draw() {

    background(backImg);
    //Write condition here to evalute if tom and jerry collide

    if(mouse.x - cat.x < mouse.width / 2 + cat.width / 2 &&
        cat.x - mouse.x < mouse.width / 2 + cat.width / 2 &&
      mouse.y - cat.y < mouse.height / 2 + cat.height / 2 &&    
      cat.y - mouse.y < mouse.height / 2 + cat.height / 2){
          cat.velocityX = 0;
          cat.changeAnimation("cat2", catImg);
          mouse.changeAnimation("mouse2", mouseImg);
      }

    drawSprites();
}


function keyPressed(){

    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;

        cat.addAnimation("catWalking", catImg2);
        cat.changeAnimation("catWalking");
        cat.frameDelay = 25;

        
}
}
