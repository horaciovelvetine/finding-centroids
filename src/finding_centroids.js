import DisplayCartesianAxis2D from "./components/display_cartesian_axis_2d";
import DisplayCartesianGrid from "./components/display_cartesian_grid_2d";
import { SKETCH_HEIGHT, SKETCH_WIDTH, VERTEX_RADIUS } from "./constants";

export const findingCentroids = (p5) => {
  p5.setup = () => {
    p5.createCanvas(SKETCH_WIDTH, SKETCH_HEIGHT);
    p5.background(200);
    p5.noLoop(); // draw() will only be called once (!!)
  }

  p5.draw = () => {
    p5.translate(SKETCH_WIDTH / 2, SKETCH_HEIGHT / 2);
    p5.background('black');
    DisplayCartesianAxis2D(p5);
    DisplayCartesianGrid(p5);
  }
}