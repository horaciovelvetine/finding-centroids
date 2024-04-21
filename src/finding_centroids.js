export const findingCentroids = (p5) => {
  p5.setup = () => {
    p5.createCanvas(800, 800);
    p5.background(200);
    p5.noLoop(); // draw() will only be called once (!!)
  }

  p5.draw = () => {
    p5.background(200);
    p5.fill(255, 0, 0);
    p5.ellipse(400, 400, 50, 50);
  }
}