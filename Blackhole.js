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
