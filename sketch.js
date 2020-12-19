let cn;
let ship;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  cn.position(x);
  ship = new Spaceship();
}

function windowResized() {
  centerCanvas();
}

function setup() {
  cn = createCanvas(1920, 1080);
  centerCanvas();
  cn.parent('p5');

  blackhole = new Blackhole();

}

function draw() {

  background(20);
  blackhole.display();
  blackhole.scaleBounce();

  ship.update();
  ship.wrapEdges();
  ship.display();

  if (keyIsDown(LEFT_ARROW)) {
    ship.turn(-0.03);
  } else if (keyIsDown(RIGHT_ARROW)) {
    ship.turn(0.03);
  } else if (keyIsDown(UP_ARROW)) {
    ship.thrust();
  }

}
