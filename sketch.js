const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body; 
const Render = Matter.Render; 
const Constraint = Matter.Constraint; 
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject 
var rope1,rope2,rope3, rope4,rope5; 
var world;

function draw() { 
	rectMode(CENTER); 
	background(230); 
	roofObject.display(); 
	rope1.display() 
	rope2.display() 
	rope3.display() 
	rope4.display() 
	rope5.display() 
	bobObject1.display(); 
	bobObject2.display(); 
	bobObject3.display(); 
	bobObject4.display(); 
	bobObject5.display(); 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45}); 
	} 
}
 function drawLine(constraint) { 
	 bobBodyPosition=constraint.bodyA.position 
	 roofBodyPosition=constraint.bodyB.position 
	 roofBodyOffset=constraint.pointB; 
	 roofBodyX=roofBodyPosition.x+roofBodyOffset.x 
	 roofBodyY=roofBodyPosition.y+roofBodyOffset.y 
	 line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY); 
	}
