import { SKETCH_HEIGHT, SKETCH_WIDTH } from "./constants";
import { DisplayMeanCentroidInfo, DisplayCartesianAxis2D, DisplayGraphsetInfo, DisplayCartesianGrid } from "./components";
import { CreateSimpleGraphset, FindWeightedMeanVertex } from "./functions";

let graphset; // Graphset2D
let weightedMeanResults; // {x,y,score,vertex}

export const findingCentroids = (p5) => {
  p5.setup = () => {
    p5.createCanvas(SKETCH_WIDTH, SKETCH_HEIGHT);
    p5.background('black');
    p5.noLoop(); // draw() will only be called once (!!)
    p5.translate(SKETCH_WIDTH / 2, SKETCH_HEIGHT / 2); // Mandatory for 2D cartesian plane 
    graphset = CreateSimpleGraphset(p5); // Create a randomly generated graphset
    weightedMeanResults = FindWeightedMeanVertex(p5, graphset);
  }

  p5.draw = () => {
    // Display UI Components
    p5.translate(SKETCH_WIDTH / 2, SKETCH_HEIGHT / 2); // Mandatory for 2D cartesian plane 
    DisplayCartesianAxis2D(p5);
    DisplayCartesianGrid(p5);
    DisplayGraphsetInfo(graphset);
    DisplayMeanCentroidInfo(weightedMeanResults);

    graphset.draw();
  }
}