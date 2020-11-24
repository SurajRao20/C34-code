var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png",50,50);
}

function setup() {
  createCanvas(800, 600);
  database = firebase.database();
  console.log(database);
  doggy = createSprite(400,300,50,50);
  doggy.addImage(dog);


}


function draw() {  
  background(46, 139, 87);

  drawSprites();
  textSize(12)
  fill("white")
  text("Milk Bottles Remaining:" + foodS, 310, 40)
  text("Note: Press UP arrow key to feed milk",310,20)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }



  foodStock = database.ref('Food');
  foodStock.on("value", readStock);


}

function readStock (data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food: 20
  })
}



