var  database,GAMESTATE;
var playerCount=0;
var form,player,game;
function setup(){
  createCanvas(400,400);
  database = firebase.database();
  game =new Game();
  game.getState();
 game.start();
 
}

function draw(){
  background("white");
  if(playerCount==2){
    game.updateState(1)
  
  }
  if(GAMESTATE==1){
 console.log("game started")
  }
}