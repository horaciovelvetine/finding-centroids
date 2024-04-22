export default function DisplayCartesianAxis2D(p5) {
  const xAxisColor = p5.color(255, 0, 0, 200);
  const yAxisColor = p5.color(0, 255, 0, 200);
  p5.strokeWeight(2);
  p5.stroke(xAxisColor);
  p5.line(0, -p5.height / 2, 0, p5.height / 2);
  p5.stroke(yAxisColor);
  p5.line(-p5.width / 2, 0, p5.width / 2, 0);
}