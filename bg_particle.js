class bg_particle {
  constructor() {
    this.pos = createVector(x,y)
    this.vel = createVector(x,y)
    this.acc = createVector(x,y)
  }
  show() {
    ellipse(this.pos.x, this.pos.y, 10);
  }
}
