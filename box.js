class Particles {
  constructor() {
    this.body=bodies.circle(x, y, this.r, options)
    this.color=colorRandom(0,255), random(0,255), random(0,255);
    World.add(world, this.body);
  }
  for (var j=0; j<particles.length; j++) {
    particles[j].display();
  }
  for (var k=0; k< divisions.length; k++){
    divisions[k].display();
  }
}
  