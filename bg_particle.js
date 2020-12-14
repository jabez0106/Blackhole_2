class bg_particle {
  constructor() {
    this.pos = createVector(0,0);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
  }
  show() {
    ellipse(this.pos.x, this.pos.y, 10);
  }
}
