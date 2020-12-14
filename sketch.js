let cn;
var bg_p;

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

class Blackhole {
  constructor() {
  }

  display() {
    fill(0);
    strokeWeight(0);
    stroke('rgba(100,0,100,100)');
    translate(960,540)
  }

  scaleBounce() {
    if (keyIsPressed === true) {
      let step = frameCount % 120;
      applyMatrix(step / 100, 0, 0, step / 100, 0, 0);
      circle(0, 0, 1800);
    } else {
      let step = frameCount % 20;
      applyMatrix(1 / step, 0, 0, 1 / step, 0, 0);
    }
  }
}
