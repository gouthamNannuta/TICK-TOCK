var hr,mn,sc;
var scAngle,mnAngle,hrAngle;

function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(400,400)
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(8);
  stroke("red");
  noFill();
  scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle)

  stroke("green");
  mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle)

  stroke("blue");
  hrAngle = map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,hrAngle)

  push();
  rotate(scAngle);
  stroke("red");
  line(0,0,100,0);
  pop()

  push();
  rotate(mnAngle);
  stroke("green");
  line(0,0,80,0);
  pop()

  push();
  rotate(hrAngle);
  stroke("blue");
  line(0,0,60,0);
  pop()
}

