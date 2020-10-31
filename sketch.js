
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var foodGroup = createGroup;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	player = new Player(400,350,30,30)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  fill("white")
  text("Score: "+ score, 500,50);

  if(keyDown(UP_ARROW)){
	player.y = player.y -3
	}
	if(keyDown(DOWN_ARROW)){
	player.y = player.y +3
	}
	if(keyDown(LEFT_ARROW)){
	player.x = player.x -3
	}
	if(keyDown(RIGHT_ARROW)){
	player.x = player.x -3
	}

	if (foodGroup.isTouching(player)){
	score = score + 10
	spawnFood()
	}
  
  drawSprites();
  player.display()
  food.display()
 
}

function spawnFood(){
	food = new Food (0,0,30,30)
	food.x = Math.round(random(100,700))
	food.y = Math.round(random(100,600))

	foodGroup.add(food)
}



