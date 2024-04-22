class Edge2D {
  constructor(p5, source, target, weight) {
    this.p5 = p5;
    this.source = source;
    this.target = target;
    this.weight = weight;
  }

  drawStrengthRadius() {
    const { p5, target, weight } = this;
    p5.fill(255, 165, 0, 50);
    p5.stroke(255, 165, 0, 90);
    p5.strokeWeight(1);
    p5.ellipse(target.x, target.y, (weight*10), (weight*10));
  }

  drawMeanVertexConnectingLine() {
    const { p5, source, target } = this;
    p5.stroke(255, 255, 255, 90);
    p5.strokeWeight(1);
    p5.line(source.x, source.y, target.x, target.y);
  }
}

export default Edge2D;