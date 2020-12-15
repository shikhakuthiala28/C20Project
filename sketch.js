var car,wall,speed,weight,deformation;
function setup(){
  createCanvas(700,600);
  
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));

  car=createSprite(200,300,100,30);
  car.shapeColor='black';
  car.velocityX=speed;

  wall=createSprite(600,300,60,height/2);
  wall.shapeColor='brown';
}
function draw(){
  background('lightblue');

  if(wall.x-car.x<(wall.width/2+car.width/2)
  && car.x-wall.x<(car.width/2+wall.width/2)){
    
    deformation=(0.5*weight*speed*speed)/22500;
    console.log("Deformation: "+deformation);

    if(deformation<100){
      car.shapeColor='green';
      car.velocityX=0;
    }
    else if(deformation>100 && deformation<180){
      car.shapeColor='yellow';
      car.velocityX=0;
    }
    else{
      car.shapeColor='red';
      car.velocityX=0;
    }

  }
  drawSprites();
}