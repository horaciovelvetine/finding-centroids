import { SKETCH_HEIGHT, SKETCH_WIDTH } from "./constants";
import DisplayCartesianAxis2D from "./components/display_cartesian_axis_2d";
import DisplayCartesianGrid from "./components/display_cartesian_grid_2d";
import CreateSimpleGraphset from "./functions/create_simple_graphset";
import FindWeightedMeanVertex from "./functions/find_weighted_mean_vertex";

let graphset;

export const findingCentroids = (p5) => {
  p5.setup = () => {
    p5.createCanvas(SKETCH_WIDTH, SKETCH_HEIGHT);
    p5.background('black');
    p5.noLoop(); // draw() will only be called once (!!)
  }

  p5.draw = () => {
    p5.translate(SKETCH_WIDTH / 2, SKETCH_HEIGHT / 2); // Mandatory for 2D cartesian plane 
    // Display UI Components
    DisplayCartesianAxis2D(p5);
    DisplayCartesianGrid(p5);
    
    // Display and Calculate the Graphset
    graphset = CreateSimpleGraphset(p5); // Create a randomly generated graphset
    let weightedMeanResults = FindWeightedMeanVertex(p5, graphset);

    for (let vertex of graphset.vertices) {
      vertex.draw();
    }

    for (let edge of graphset.edges) {
      edge.drawStrengthRadius();
      edge.drawMeanVertexConnectingLine();
    }
    console.log(weightedMeanResults);
    
  }
}