var dog;
var database, position;

function preload(){     
  dog = loadImage("images/dogimg1.png");
}

function setup() {
  createCanvas(500,500);
  ball = createSprite(50,50,10,10);
  database = firebase.database();
  position = database.ref("dog/pos");
  position.on("value",readPosition,showError);
  console.log(database);
  
}


function draw() {  
  background("white");
  if(keyDown(LEFT_ARROW)){
      changePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
      changePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
      changePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
      changePosition(0,+1);
  }
   dog1(dog);

  drawSprites();
}

function changePosition(ofsetx,ofsety){
  database.ref("ball/pos").set(
      {
          x:dog.x + ofsetx, 
          y:dog.y + ofsety,
      }
  )
}

function readPosition(data){
  var ballPosition = data.val();
  dog.x = dogPosition.x;
  dog.y = dogPosition.y;
  console.log("readPosition" + dogPosition);
}
function showError(){
  console.log("database readError");
}