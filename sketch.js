/*
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
*/

var car1, car1Img, car2, car2Img;
var bg, bgImg, ball, ballImg, goalpost, goalpostImg, goalpost1, goalpost1Img
var coin, coinImg
var form,player, playerCount
var database, gameState
var cars = [];
var allPlayers;
var invisibleblock
//var engine, world;


function preload(){
bg = loadImage("Images/bg1.jpg")
car1Img = loadImage("Images/car1.png")
car2Img = loadImage("Images/car2.png")
ballImg = loadImage("Images/ball.png") 
goalpostImg = loadImage("Images/Goalpost.png")
goalpost1Img = loadImage("Images/Goalpost1.png")
}
function setup() {
canvas = createCanvas(windowWidth, windowHeight);
database = firebase.database();
//engine = Engine.create();
//world = engine.world;
game = new Game();
  game.getState();
  game.start();

  invisibleblock = createSprite(3000,600, 500000, 10)

//ball = new ball(200,50)
  
}

function draw() {
  background(bg);
  if(car1.y>325){
    car1.y = 325
  }
  
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
  //  game.showLeaderboard();
    game.end();
  }
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}