let cn;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  cn.position(x);
}

function windowResized() {
  centerCanvas();
}

function setup() {
  cn = createCanvas(1920, 1080);
  centerCanvas();
  cn.parent('p5');

  blackhole = new Blackhole();
  bg_p = new bg_particle();
}

function draw() {
  background(20);
  blackhole.display();
  blackhole.scaleBounce();

  bg_p.show();
}
