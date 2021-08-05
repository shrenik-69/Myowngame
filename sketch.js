const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var bg,leaf,playb,leaderboard,logo,form;
var database;
var gameState = 0;

function preload() {
  bg = loadImage("assets/bg.png");
  leaf_img = loadImage("assets/leaf.png");
  leaderboard_img = loadImage("assets/leaderboard.png");
  playb_img = loadImage("assets/playbutton.png");
  logoimg = loadImage("assets/logo.png");

}

function setup() {
  createCanvas(1000,700);

  
  

  logo = createSprite(450,350,30,30);
  logo.addImage(logoimg);
  logo.scale = 1.7

  playb = createImg("assets/playbutton.png");
  playb.position(200,500);
  playb.size(120,150);
  playb.mouseClicked(play1);

  leaderboard = createImg("assets/leaderboard.png");
  leaderboard.position(600,500);
  leaderboard.size(100,100);

  
}

function draw() {
  background(bg);

  
  if (gameState === 2) {

    if (frameCount %50 === 0) {
      leaf = createSprite(Math.random(10,990),Math.random(10,690),50,50);
      leaf.addImage(leaf_img);
      leaf.scale = 0.2
    }
  }
  drawSprites();
}

function play1() {

  form = new Form();
  gameState = 1;
  form.display();
  logo.visible = false;
  playb.hide();
  leaderboard.hide();
}